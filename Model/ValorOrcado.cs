using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public class ValorOrcado
    {
        public int      ID_Movimento { get; set; }
        public Decimal  Valor { get; set; }
        public int      Situacao { get; set; }
        public String   NomeColuna { get; set; }
        public Decimal  ValorRealizado {get ; set;}
        public String   Mensagem { get; set; }
        public Decimal  ValorSolicitado { get; set; }
        public String   Responsavel { get; set; }
        public int      Duplicado { get; set; }
        public int AutorUltimaMsg { get; set; }
    }
}
