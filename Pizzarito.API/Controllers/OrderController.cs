using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
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
        [HttpGet("{id}")]
        public async Task<IActionResult> GetOrders(int id)
        {

            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }
            var orders = await _repo.GetOrders(id);
            if (orders.Count() > 0)
            {
                return Ok(orders);
            }
            return NoContent();
        }

        [HttpGet("{userId}/orderHistory/{orderId}")]
        public async Task<IActionResult> GetOrder(int userId,int orderId)
        {

            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }
            var order = await _repo.GetOrder(orderId);
            
                return Ok(order);
            
        }


    }
}
