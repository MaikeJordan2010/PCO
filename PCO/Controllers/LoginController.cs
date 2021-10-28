using Microsoft.AspNetCore.Mvc;
using Model;
using Business;
using PCO.ViewHelper;
using System.Collections.Generic;
using System;
using System.Security.Authentication.ExtendedProtection;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace PCO.Controllers
{
    public class LoginController : Controller
    {
        
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Logar(User user)
        {
            String Format = "dd/MM/yyyy hh:mm:ss";
            String dataHora = DateTime.Now.ToString(Format);
            DateTime data = Convert.ToDateTime(dataHora);

            UserBusiness business = new UserBusiness();
            ViewHelper.ViewHelper vw = new ViewHelper.ViewHelper();
            ResumoBusiness resumoNegocio = new ResumoBusiness();
            User usuario = new User();
            List<Resultado> resultados = new List<Resultado>();

            usuario = business.Login(user);

            String msg = "Usuário ou Senha inválidos!";
            
            if (usuario != null)
            {

                var claims = new List<Claim>()
               {
                   new Claim(ClaimTypes.Name, usuario.Nome )
               };
            var usuarioIdentidade = new ClaimsIdentity(claims);

                ClaimsPrincipal principal = new ClaimsPrincipal(usuarioIdentidade);

                await HttpContext.SignInAsync(principal);


                HttpContext.Session.SetString("usuario", usuario.Nome);
                HttpContext.Session.SetString("email", usuario.Email);
                HttpContext.Session.SetInt32("id_usuario", usuario.Id);

                TipoBusiness TB = new TipoBusiness();
                List<User> todosUsuarios = new List<User>();
                todosUsuarios = TB.todosUsuarios();
                vw.user = usuario;
                vw.TodosUsuarios = todosUsuarios;
                return View("../Home/Index", vw);
            }

            ViewData["msg"] = msg;
            return View("../Login/Index");
        }

        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync();
            HttpContext.Session.Remove("usuario");
            HttpContext.Session.Remove("email");
            HttpContext.Session.Remove("id_usuario");
            return RedirectToAction("../Login/Index");
        }
    }
}