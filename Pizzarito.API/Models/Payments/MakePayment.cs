using System;
using System.Threading.Tasks;
using Stripe;

namespace Pizzarito.API.Models.Payments
{
    public class MakePayment
    {
        public static async Task<dynamic> PayAsync(string cardNumber, int month, int year, string cvc, int value)
        {
            try
            {
                StripeConfiguration.ApiKey = "sk_test_51Hl8GpHXD18lLEyMFg0Wgj7GkabhMH5Mv4aHN2T8YmmbHYkEgw3nie7AXUtshK0cuesufHzREMFDthlEVevTz8NX004Qe4P3d8";
                var optionsToken = new TokenCreateOptions
                {
                    Card = new TokenCardOptions
                    {
                        Number = cardNumber,
                        ExpMonth = month,
                        ExpYear = year,
                        Cvc = cvc
                    }
                };
                var serviceToken = new TokenService();
                Token stripeToken = await serviceToken.CreateAsync(optionsToken);

                var options = new ChargeCreateOptions
                {
                    Amount = value,
                    Currency = "usd",
                    Description = "test",
                    Source = stripeToken.Id
                };

                var service = new ChargeService();
                Charge charge = await service.CreateAsync(options);
                


                if (charge.Paid)
                {
                    return true;
                }
                else
                {
                    return false;
                }

            }
            catch (Exception e)
            {

                return e.Message;
            }

        }





    }
}