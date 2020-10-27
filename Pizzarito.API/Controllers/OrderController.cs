using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Pizzarito.API.Data;
using Pizzarito.API.Models;

namespace Pizzarito.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository _repo;

        public OrderController(IOrderRepository repo)
        {
            _repo = repo;

        }


        [HttpPost]
        public async Task<IActionResult> AddOrder(Order order)
        {
            
                await _repo.AddOrder(order);
                return Ok(order);
            
           
        }





    }
}
