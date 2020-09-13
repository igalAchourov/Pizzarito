using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using Pizzarito.API.Models;
using Pizzarito.API.Models.BaseItems;

namespace Pizzarito.API.Data
{
    public class Seed
    {

        public static void SeedAll(DataContext context)
        {
            if (!context.Extras.Any())
            {

                var extrasData = System.IO.File.ReadAllText("Seeds/ExtraSeedData.json");
                var extras = JsonConvert.DeserializeObject<List<Extra>>(extrasData);


                foreach (var extra in extras)
                {
                context.Extras.Add(extra);

                }

            }
            if (!context.Drinks.Any())
            {

                var drinksData = System.IO.File.ReadAllText("Seeds/DrinkSeedData.json");
                var drinks = JsonConvert.DeserializeObject<List<Drink>>(drinksData);


                foreach (var drink in drinks)
                {
                context.Drinks.Add(drink);

                }
            }
             if (!context.Sizes.Any())
            {

                var sizeData = System.IO.File.ReadAllText("Seeds/SizeSeedData.json");
                var sizes = JsonConvert.DeserializeObject<List<Size>>(sizeData);


                foreach (var size in sizes)
                {
                context.Sizes.Add(size);

                }

            }
             if (!context.Desserts.Any())
            {

                var dessertData = System.IO.File.ReadAllText("Seeds/DessertSeedData.json");
                var desserts = JsonConvert.DeserializeObject<List<Dessert>>(dessertData);


                foreach (var dessert in desserts)
                {
                context.Desserts.Add(dessert);

                }

            }
             if (!context.Starters.Any())
            {

                var starterData = System.IO.File.ReadAllText("Seeds/StarterSeedData.json");
                var starters = JsonConvert.DeserializeObject<List<Starter>>(starterData);


                foreach (var starter in starters)
                {
                context.Starters.Add(starter);

                }

            }
            context.SaveChanges();


        }

    }
}