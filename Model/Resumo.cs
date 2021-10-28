using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public class Resumo
    {
        //public int ID_Movimento { get; set; }
        public int ID_Conta { get; set; }
        public float ValorInicial { get; set; }
        public float ValorFinal { get; set; }
        public float ValorAcumuladoInicial { get; set; }
        public float ValorAcumulado { get; set; }
        public float ValorRealizado { get; set; }
        public float ValorDebitoInicial { get; set; }
        public int ID_Tipo { get; set; }
        public DateTime Data { get; set; }
        public List<ValorOrcado> Orcado { get; set; }
        public String Obs_Gestor { get; set; }
    }
}
