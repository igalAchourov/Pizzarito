namespace Pizzarito.API.Models.OrderedItems
{
    public class OrderedStarter
    {
        public int Id { get; set; }
          public int StarterId { get; set; }
        public Starter Starter { get; set; }
        public int OrderId { get; set; }
        public Order Order { get; set; }
        public int Unit { get; set; }
        public int TotalBill { get; set; }
    }
}