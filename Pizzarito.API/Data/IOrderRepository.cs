using System.Collections.Generic;
using System.Threading.Tasks;
using Pizzarito.API.Models;
using Pizzarito.API.Models.BaseItems;

namespace Pizzarito.API.Data
{
    public interface IOrderRepository
    {
        Task<Order> AddOrder(Order order);
        Task<IEnumerable<Order>> GetOrders(int userId);

        Task<Order> GetOrder(int orderId);
    }
}