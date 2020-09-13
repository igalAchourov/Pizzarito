using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Pizzarito.API.Data;

namespace Pizzarito.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MenuController : ControllerBase
    {
        private readonly IMenuRepository _repo;

        public MenuController(IMenuRepository repo)
        {
            _repo = repo;

        }

        [HttpGet("Drinks")]
        public async Task<IActionResult> GetDrinks()
        {
            try{
                var drinks=await _repo.GetDrinks(); 
                return Ok(drinks);
            }
            catch(Exception ex){
               throw new Exception(ex.Message);
            }
        }

 [HttpGet ("Sizes")]
        public async Task<IActionResult> GetSizes()
        {
            try{
                var sizes=await _repo.GetSizes(); 
                return Ok(sizes);
            }
            catch(Exception ex){
               throw new Exception(ex.Message);
            }
        }

        [HttpGet ("Extras")]
        public async Task<IActionResult> GetExtras()
        {
            try{
                var extras=await _repo.GetExtras(); 
                return Ok(extras);
            }
            catch(Exception ex){
               throw new Exception(ex.Message);
            }
        }

        [HttpGet ("desserts")]
        public async Task<IActionResult> GetDesserts()
        {
            try{
                var desserts=await _repo.GetDesserts(); 
                return Ok(desserts);
            }
            catch(Exception ex){
               throw new Exception(ex.Message);
            }
        }


        [HttpGet ("Starters")]
        public async Task<IActionResult> GetStarters()
        {
            try{
                var starters=await _repo.GetStarters(); 
                return Ok(starters);
            }
            catch(Exception ex){
               throw new Exception(ex.Message);
            }
        }





    }
}
