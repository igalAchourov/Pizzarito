using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Pizzarito.API.Models;
using Pizzarito.API.Models.BaseItems;

namespace Pizzarito.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        [StringLength(20, MinimumLength = 6, ErrorMessage = "You must specify password between 6 and 20 characters")]
        public string Password { get; set; }
        [Required]
        public string FullName { get; set; }
        public string Email { get; set; }
        [Required]
        public Address Address { get; set; }
    }
}