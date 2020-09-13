using Pizzarito.API.Models.BaseItems;
using Pizzarito.API.Models.OrderedItems;
using System.Collections.Generic;

namespace Pizzarito.API.Models
{
    public class Pizza
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public Order Order { get; set; }
        public int SizeId { get; set; }
        public Size Size { get; set; }
        public ICollection<OrderedExtra> Extras { get; set; }
        public int TotalBill { get; set; }
    }
}