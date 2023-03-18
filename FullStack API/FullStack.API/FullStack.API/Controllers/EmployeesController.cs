using Microsoft.AspNetCore.Mvc;

namespace FullStack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        [HttpGet]
        public IActionResult GetAllEmployees()
        {
            return View();
        }
    }
}
