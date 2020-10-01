using System.Collections.Generic;
using Pizzarito.API.Models;
using Pizzarito.API.Models.BaseItems;

namespace Pizzarito.API.Dtos
{
    public class UserForDetailedDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public int AddressId { get; set; }
        public Address Address { get; set; }
        public ICollection<Order> Orders { get; set; }
    }
}