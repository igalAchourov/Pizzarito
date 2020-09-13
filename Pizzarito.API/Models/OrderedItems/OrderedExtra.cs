namespace Pizzarito.API.Models.OrderedItems
{
    public class OrderedExtra
    {
        public int Id { get; set; }
        public int PizzaId { get; set; }
        public Pizza Pizza { get; set; }
        public int ExtraId { get; set; }
        public Extra Extra { get; set; }
      
    }
}