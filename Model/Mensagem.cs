using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public class Mensagem
    {

        public int Id { get; set; }
        public DateTime Mes { get; set; }
        public int Id_tipo { get; set; }
        public int Id_conta { get; set; }
        public DateTime Data { get; set; }
        public DateTime DataLido { get; set; }
        public String Login_Autor { get; set; }
        public String Login_Lido { get; set; }
        public String Msg { get; set; }

    }
}
