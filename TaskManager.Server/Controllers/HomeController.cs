using Microsoft.AspNetCore.Mvc;

namespace TaskManager.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {

        //[HttpGet(Name = "")]
        [HttpGet]
        public string Get()
        {
            return "Home obtenida";
        }
    }
}
