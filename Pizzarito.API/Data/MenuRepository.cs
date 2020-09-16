using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Pizzarito.API.Models;
using Pizzarito.API.Models.BaseItems;
using System.Linq;

namespace Pizzarito.API.Data
{
    public class MenuRepository : IMenuRepository
    {
        private readonly DataContext _context;

        public MenuRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Dessert>> GetDesserts()
        {
            return await _context.Desserts.OrderBy(d => d.Price).ToListAsync();
        }

        public async Task<IEnumerable<Drink>> GetDrinks()
        {
            return await _context.Drinks.OrderBy(d => d.Price).ToListAsync();
        }

        public async Task<IEnumerable<Extra>> GetExtras()
        {
            return await _context.Extras.OrderBy(d => d.Price).ToListAsync();
        }

        public async Task<IEnumerable<Size>> GetSizes()
        {
            return await _context.Sizes.OrderBy(d => d.Price).ToListAsync();
        }

        public async Task<IEnumerable<Starter>> GetStarters()
        {
            return await _context.Starters.OrderBy(d => d.Price).ToListAsync();
        }
    }
}