using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Pizzarito.API.Models;
using Pizzarito.API.Models.BaseItems;
using System.Linq;
using Pizzarito.API.Dtos;

namespace Pizzarito.API.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.Include(o => o.Orders).Include(a => a.Address).FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }


    }
}