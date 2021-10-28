using Model;
using Persistence;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business
{
    public class TipoBusiness
    {
        public List<User> todosUsuarios()
        {
            TipoDAO TB = new TipoDAO();
            List<User> users = new List<User>();
            users = TB.todosUsuario();
            return users;
        }
    }
}
