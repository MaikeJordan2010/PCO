using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public class Tipo
    {
        public int ID_Tipo { get; set; }
        public String Descricao { get; set; }
        public int TipoMovimento { get; set; }
        public int ID_TipoOrigem{ get; set; }
        public int ID_ContaOrigem { get; set; }
        public bool Ativo { get; set; }
        public String Usuario { get; set; }
        public String Responsavel { get; set; }
    }
}
