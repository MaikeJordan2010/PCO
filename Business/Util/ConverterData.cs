using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Util
{
    public class ConverterData
    {
        // Recebe  um  DateTime  e devolve uma string no formato YYYYMMDD
        public String dataPdrYMD(DateTime dataInicio)
        {
       
            String dataRecebida;
            String[] partes;
            String[] dataHora;
            dataRecebida = Convert.ToString(dataInicio);
            dataHora = dataRecebida.Split(" ");
            String data = dataHora[0];
            String Hora = dataHora[1];
            partes = data.Split("/");
            String dia = "01";
            String mes = partes[1];
            String ano = partes[2];
            String pData = ano + mes + dia;
            return pData;
        }

    }
}
