using System;
using System.Diagnostics;
using System.Net.Http;
using System.Threading.Tasks;
using JavaScriptProject.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace JavaScriptProject.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly string apiUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult QuizApp()
        {
            return View();
        }

        public IActionResult calculatorApp()
        {
            return View();
        }


        public IActionResult MovieApp()
        {
            return View();
        }

        public IActionResult weatherApp()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
