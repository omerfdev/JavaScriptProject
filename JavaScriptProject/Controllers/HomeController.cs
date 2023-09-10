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

        public async Task<IActionResult> RecipeApp()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var response = await httpClient.GetAsync(apiUrl);

                    if (response.IsSuccessStatusCode)
                    {
                        var content = await response.Content.ReadAsStringAsync();
                        var categories = JsonConvert.DeserializeObject<CategoryModel>(content);
                        ViewBag.Categories = categories;
                        return View("recipeApp", categories);
                    }
                    else
                    {
                        return View("Error");
                    }
                }
            }
            catch (Exception ex)
            {
                return View("Error");
            }
        }

        public IActionResult Privacy()
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
