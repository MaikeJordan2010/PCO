using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public class Resultado
    {
        public Resumo Resumo { get; set; }
        public Tipo Tipo { get; set; }
        public Conta Conta { get; set; }
        public List<ValorOrcado> Orcado { get; set; }
    }
}
