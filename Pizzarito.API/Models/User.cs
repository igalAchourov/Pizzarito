using Pizzarito.API.Models.BaseItems;
using System.Collections.Generic;

namespace Pizzarito.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PassHash { get; set; }
        public byte[] PassSalt { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public Address Address { get; set; }
        public ICollection<Order> Orders { get; set; }
    

    }
}