using System;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Pizzarito.API.Helpers
{
   public class StripeSettings
    {
     public string SecretKey { get; set; }
public string PublishableKey { get; set; }




    }
}