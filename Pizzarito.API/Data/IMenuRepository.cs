using System.Collections.Generic;
using System.Threading.Tasks;
using Pizzarito.API.Models;
using Pizzarito.API.Models.BaseItems;

namespace Pizzarito.API.Data
{
    public interface IMenuRepository
    {
        Task<IEnumerable<Size>> GetSizes();
        Task<IEnumerable<Drink>> GetDrinks();
        Task<IEnumerable<Extra>> GetExtras();
        Task<IEnumerable<Dessert>> GetDesserts();
        Task<IEnumerable<Starter>> GetStarters();     
    }
}