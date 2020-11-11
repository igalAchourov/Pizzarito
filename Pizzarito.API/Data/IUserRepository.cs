using System.Collections.Generic;
using System.Threading.Tasks;
using Pizzarito.API.Dtos;
using Pizzarito.API.Models;
using Pizzarito.API.Models.BaseItems;

namespace Pizzarito.API.Data
{
    public interface IUserRepository
    {
        Task<User> GetUser(int id);
        Task<bool> SaveAll();

    }
}