using Microsoft.AspNetCore.Mvc;
using Pizzarito.API.Models.Payments;
using System.Threading.Tasks;

namespace Pizzarito.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        public PaymentController()
        {

        }

        [HttpPost]
        public async Task<IActionResult> Pay(PaymentModel pm)
        {
            if (await MakePayment.PayAsync(pm.CardNumber, pm.Month, pm.Year, pm.Cvc, pm.Value)){
                return Ok();
            }
            return BadRequest("Charge Failed");

        }


    }
}
