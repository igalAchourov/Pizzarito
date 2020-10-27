using System;
using System.Collections.Generic;
using Pizzarito.API.Models.OrderedItems;

namespace Pizzarito.API.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int TotalBill { get; set; }
        public bool IsCash { get; set; }
        public DateTime Date { get; set; }
        public ICollection<OrderedDessert> OrderedDesserts { get; set; }
        public ICollection<OrderedDrink> OrderedDrinks { get; set; }
        public ICollection<OrderedStarter> OrderedStarters { get; set; }
        public ICollection<Pizza> Pizzas { get; set; }

        public Order()
        {
            this.Date= DateTime.Now;
        }

    }
}