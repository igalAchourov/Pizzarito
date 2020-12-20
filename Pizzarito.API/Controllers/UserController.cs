using System;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Pizzarito.API.Data;
using Pizzarito.API.Models.BaseItems;

namespace Pizzarito.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class UserController : ControllerBase
    {
        private readonly IUserRepository _repo;
        private readonly IMapper _mapper;
        public UserController(IUserRepository repo, IMapper mapper)
        {
            _repo = repo;
            }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAddress(int id,[FromBody] Address address)
        {
 
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            var userFromRepo = await _repo.GetUser(id);

            userFromRepo.Address = address;

            if (await _repo.SaveAll())
            {
                return Ok(userFromRepo);
            }
            throw new Exception("$Updating user {id} failed on save ");
        }





    }
}
