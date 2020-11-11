using AutoMapper;
using Pizzarito.API.Dtos;
using Pizzarito.API.Models;

namespace Pizzarito.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {

            CreateMap<UserForRegisterDto, User>();
            // CreateMap<UserForDetailedDto,User>();
            CreateMap<User, UserForDetailedDto>().ForMember(dest => dest.Address, opt => opt.MapFrom(src => src.Address));

        }

    }
}