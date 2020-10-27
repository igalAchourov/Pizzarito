using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Pizzarito.API.Data;
using Pizzarito.API.Dtos;
using Pizzarito.API.Models;

namespace Pizzarito.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;

        private readonly IMapper _mapper;

        private readonly IConfiguration _config;

        public AuthController(
            IAuthRepository repo,
            IMapper mapper,
            IConfiguration config
        )
        {
            _config = config;
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet("{id}", Name = "GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);

            //convert using the mapper from user class to UserForListDto
            // var userToReturn = _mapper.Map<UserForDetailedDto>(user);
            return Ok(user);
        }

        [HttpPost("register")]
        public async Task<IActionResult>
        Register(UserForRegisterDto userForRegisterDto)
        {
            userForRegisterDto.UserName = userForRegisterDto.UserName.ToLower();
            if (await _repo.UserExists(userForRegisterDto.UserName))
            {
                return BadRequest("User name already exists");
            }
            var userToCreate = _mapper.Map<User>(userForRegisterDto);

            var createdUser = await _repo.Register(userToCreate, userForRegisterDto.Password);

            var userToReturn = _mapper.Map<UserForDetailedDto>(createdUser);
            return CreatedAtRoute("GetUser",
            new { controller = "Auth", id = createdUser.Id },
            userToReturn);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
        {
            
                var userFromRepo =
                await _repo
                    .Login(userForLoginDto.UserName.ToLower(),
                    userForLoginDto.Password);
                if (userFromRepo == null)
                {
                    return Unauthorized();
                }

                var claims =
                    new[]
                    {
                    new Claim(ClaimTypes.NameIdentifier,
                        userFromRepo.Id.ToString()),
                    new Claim(ClaimTypes.Name, userFromRepo.UserName)
                    };

                var key =
                    new SymmetricSecurityKey(Encoding
                            .UTF8
                            .GetBytes(_config
                                .GetSection("AppSettings:Token")
                                .Value));

                var creds =
                    new SigningCredentials(key,
                        SecurityAlgorithms.HmacSha512Signature);

                var tokenDesc =
                    new SecurityTokenDescriptor
                    {
                        Subject = new ClaimsIdentity(claims),
                        Expires = DateTime.Now.AddDays(1),
                        SigningCredentials = creds
                    };

                var tokenHandler = new JwtSecurityTokenHandler();

                var token = tokenHandler.CreateToken(tokenDesc);

                var user = _mapper.Map<UserForDetailedDto>(userFromRepo);

                return Ok(new { token = tokenHandler.WriteToken(token), user });
            
           
        }
    }
}
