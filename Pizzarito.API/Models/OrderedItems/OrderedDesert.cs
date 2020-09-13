namespace Pizzarito.API.Models
{
    public class OrderedDessert
    {
        public int Id { get; set; }
        public int DesertId { get; set; }
        public Dessert Desert { get; set; }
        public int OrderId { get; set; }
        public Order Order { get; set; }
        public int Unit { get; set; }
        public int TotalBill { get; set; }



    }
}