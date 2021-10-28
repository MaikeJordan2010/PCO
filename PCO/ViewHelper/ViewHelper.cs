using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Model;

namespace PCO.ViewHelper
{
    public class ViewHelper
    {
        public List<Resumo> resumo { get; set; }
        public User user { get; set; }
        public List<Resultado> resultado { get; set; }
        public int horizonte { get; set; }
        public List<User> TodosUsuarios { get; set; }
    }
}
