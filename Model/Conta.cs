using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public class Conta
    {
        public int ID_Conta { get; set; }
        public String Descricao { get; set; }
        public float AcumulaSaldo { get; set; }
        public int MesesRealizados { get; set; }
        public int Codigo { get; set; }
        public int QtdeFechar { get; set; }
        public bool Ativo { get; set; }
        public int ID_ContaPai { get; set; }
        public int AceitaRealizar { get; set; }
        public int TipoMovimento { get; set; }
        public int ID { get; set; }
        public float ValorAcumulado { get; set; }
        public float Saldo_Fluxo { get; set; }
        public int ID_Gestor{get;set;}
        public int Responsavel { get; set; }
        public int Nao_Somar_Subtotal { get; set; }
    }
}
