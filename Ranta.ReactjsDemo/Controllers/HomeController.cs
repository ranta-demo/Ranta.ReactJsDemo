using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ranta.ReactjsDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var employees = new[]{
              new  {id= "1", name= "John", department= "IT", phone= "555-1212"},
              new {id="2", name= "Akash", department= "Sales", phone= "555-1213"},
              new  {id= "3", name= "Suman", department= "HR", phone= "123-456"}
            };
            return View(employees);
        }
    }
}