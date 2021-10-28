using Business.Util;
using Model;
using Persistence;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business
{
    public class MensagemBusiness
    {
        public List<Mensagem> ConsultarMensagem(DateTime data, int ID_Tipo, int ID_Conta)
        {
            ConverterData cvtData = new ConverterData();

            String dataConvertida = cvtData.dataPdrYMD(data);

            MensagemDAO msgDAO = new MensagemDAO();

            List<Mensagem> msg = new List<Mensagem>();

            msg = msgDAO.ConsultarMensagens(dataConvertida, ID_Tipo, ID_Conta);

            return msg;
        }

        public bool InseriMensagem(int ID_Tipo, int ID_Conta, DateTime DataMes, String Msg, String Login_Autor)
        {
            MensagemDAO msgDAO = new MensagemDAO();

            String dt = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");

           return  msgDAO.InserirMensagem(ID_Tipo, ID_Conta, DataMes, Msg, Login_Autor,dt);

        }
    }
}
