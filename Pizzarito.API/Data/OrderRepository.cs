using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Pizzarito.API.Models;
using Pizzarito.API.Models.BaseItems;
using System.Linq;

namespace Pizzarito.API.Data
{
    public class OrderRepository : IOrderRepository
    {
        private readonly DataContext _context;

        public OrderRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Order> AddOrder(Order order)
        {
            
         await _context.Orders.AddAsync(order);
         await _context.SaveChangesAsync();
         
         return order;
        


        }
    }
}