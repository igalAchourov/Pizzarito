using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Pizzarito.API.Data;
using Microsoft.Extensions.Options;


namespace Pizzarito.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class PaymentController : ControllerBase
    {
        private readonly IUserRepository _repo;
        private readonly IMapper _mapper;
        public PaymentController(IUserRepository repo, IMapper mapper ,IOptions<API.Helpers.StripeSettings> stripe)
        {
            _repo = repo;
            
        }






       




    }
}
