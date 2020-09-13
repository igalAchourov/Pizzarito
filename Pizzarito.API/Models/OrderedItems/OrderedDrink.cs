namespace Pizzarito.API.Models.OrderedItems
{
    public class OrderedDrink
    {
        public int Id { get; set; }
        public int DrinkId { get; set; }
        public Drink Drink { get; set; }
        public int OrderId { get; set; }
        public Order Order { get; set; }
        public int Unit { get; set; }
        public int TotalBill { get; set; }
    }
}