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

        public async Task<IEnumerable<Order>> GetOrders(int userId)
        {
            if (_context.Orders.Count() > 0)
            {
                return await _context.Orders
                            .Include(o => o.OrderedDesserts).ThenInclude(d => d.Dessert)
                            .Include(o => o.OrderedDrinks).ThenInclude(d => d.Drink)
                            .Include(o => o.OrderedStarters).ThenInclude(d => d.Starter)
                            .Include(o => o.Pizzas).ThenInclude(p => p.Extras).ThenInclude(o => o.Extra).Include(o => o.Pizzas).ThenInclude(o => o.Size)
                            .Where(o => o.UserId == userId)
                            .OrderBy(o => o.Date)
                            .ToListAsync();
            }
            return null;

        }
    }
}