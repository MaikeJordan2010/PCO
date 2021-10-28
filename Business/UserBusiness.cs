using System;
using System.Collections.Generic;
using System.Text;
using Model;
using Persistence;

namespace Business
{
    public class UserBusiness
    {
        public User Login(User user)
        {
            LoginDAO login = new LoginDAO();
            User usuario = new User();
            usuario =  login.ConsultaUM(user);


            return usuario;
        }

       
    }
}
