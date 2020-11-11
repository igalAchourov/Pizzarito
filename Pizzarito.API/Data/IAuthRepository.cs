using System.Threading.Tasks;
using Pizzarito.API.Models;

namespace Pizzarito.API.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user,string password); 
        Task<User> Login(string userName,string password);
        Task<bool> UserExists(string userName);
         Task<User> GetUser(int id);

    } 
   
}