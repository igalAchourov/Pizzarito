
using Microsoft.EntityFrameworkCore;
using Pizzarito.API.Models;
using Pizzarito.API.Models.BaseItems;
using Pizzarito.API.Models.OrderedItems;

namespace Pizzarito.API.Data
{
    public class DataContext:DbContext
    {
    public DataContext(DbContextOptions<DataContext> options) : base(options) { }
      public DbSet<Address> Addresses{get;set;}
      public DbSet<Dessert> Desserts{get;set;}
      public DbSet<Drink> Drinks{get;set;}
      public DbSet<Extra> Extras{get;set;}
      public DbSet<Size> Sizes{get;set;}
      public DbSet<Starter> Starters{get;set;}
      public DbSet<OrderedDessert> OrderedDesserts{get;set;}
      public DbSet<OrderedDrink> OrderedDrinks{get;set;}
      public DbSet<OrderedExtra> OrderedExtras{get;set;}
      public DbSet<OrderedStarter> OrderedStarters{get;set;}
      public DbSet<Pizza> Pizzas{get;set;}
      public DbSet<Order> Orders { get; set; }
      public DbSet<User> Users { get; set; }
      




        
    }
}