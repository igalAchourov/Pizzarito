namespace Pizzarito.API.Models.BaseItems
{

    public class Address
    {
        public int Id { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public string City { get; set; }
        public string StreetName { get; set; }
        public string StreetNumber { get; set; }
        public int? Floor { get; set; }

#nullable enable
        public string? Apartment { get; set; }

    }
}