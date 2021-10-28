using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PCO.Models;
using Business;
using Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Server.Kestrel.Core.Internal.Http;
using System.Globalization;

namespace PCO.Controllers
{
    public class HomeController : Controller
    {
        [Authorize]
        public IActionResult Index()
        {
            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }



 /// <summary>
 /// ///////////////////////////////// FUNÇÃO PARA ALTERAÇÃO DOS VALORE /////////////////////////////////////////////////////
 /// </summary>
 /// <param name="id_movimento"></param>
 /// <param name="nomeCampo"></param>
 /// <param name="valorRecebido"></param>
 /// <param name="situacao"></param>
 /// <returns></returns>
        [HttpPost]
        public String AlterarCampos(int id_movimento, String nomeCampo, String valorRecebido, int situacao)
        {
            String[] partes = nomeCampo.Split("-");                                     // fazendo split
            String coluna = partes[0];                                                  // parte[0] é o nome da coluna
            String dataParaGravar = partes[1];                                          // parte[1] é a data usada para gravação no banco
            int tipo = Convert.ToInt32(partes[2]);                                      // parte[2] é o tipo 
            int conta = Convert.ToInt32(partes[3]);                                     // parte[3] é conta
            ResumoBusiness resumo = new ResumoBusiness();                               // instanciando o obj da class ResumoBusiness
           

            if (id_movimento != 0)                                                      // se id_movimento é diferente de 0
            {
                resumo.alterarCampo(id_movimento,coluna, valorRecebido, situacao);      // chamando função do obj passando os paramatros e recebendo a resposta
                return ("Teste: " + valorRecebido);

            }
            else
            {                                                                           // chamando função do obj passando os paramatros e recebendo a resposta
                resumo.InserirNovoValor( coluna, dataParaGravar, valorRecebido, tipo, conta, situacao);
                return ("Teste: " + valorRecebido);
            }

        }


        /// <summary>
        /// ////////////////////////////////   FUNÇÃO QUE REALIZA A PESQUISA  ////////////////////////////////////////////
        /// </summary>
        /// <param name="dataInicio"></param>
        /// <param name="horizonte"></param>
        /// <param name="tipo"></param>
        /// <param name="conta"></param>
        /// <param name="situacao"></param>
        /// <param name="nivel"></param>
        /// <param name="login"></param>
        /// <returns></returns>
        [HttpPost]                                          // RESPONSAVEL POR BUSCAR TODAS INFORMAÇÕES EXIBIDAS NO BANCO
        public ViewHelper.ViewHelper PesquisarHorizonte(DateTime dataInicio, int horizonte, 
            int tipo, int conta, int situacao, int nivel, String login, String responsavel, int moeda)
        {                                                                                           // instancia o obj da class resumo
                ResumoBusiness resumo = new ResumoBusiness();
                List<Model.Resultado> resultado = new List<Model.Resultado>();                      // cria uma lista de obj resultado

                String Format = "dd/MM/yyyy hh:mm:ss";                                              // declarando variavel do format de data dd/MM/yyyy hh:mm:ss
                String dataHora = DateTime.Now.ToString(Format);                                    // se dataInicio = 01/01/0001    
                if (dataInicio.Date == Convert.ToDateTime("01/01/0001" ) ){ dataInicio = Convert.ToDateTime(dataHora); }
                if (horizonte == 0 )                                                                // se horizonte = 0
                {
                    horizonte = 5;                                                                  // horizonte = 5
                    dataInicio = Convert.ToDateTime(dataHora);                                      // pegando data  sistema e convertendo
                }
                                                                                                    // resultado recebe o lista de obj da camada de negocio
                resultado = resumo.BuscarHorizonte(dataInicio, horizonte, tipo, conta, situacao, nivel, login, responsavel, moeda);
                PCO.ViewHelper.ViewHelper vw = new PCO.ViewHelper.ViewHelper();                     // instacia obj da class ViewHelper para enviar mais de um obj para tela
                vw.resultado = resultado;                                                           // add obj a ViewHelper
                vw.horizonte = Convert.ToInt32(horizonte);                                          // add obj a ViewHelper
            return vw;                                                                              // retorna obj ViewHelper
        }


        /// <summary>
        /// ////////////////////////////// FUNÇÃO PARA REALIZAR ALTERAÇÃO //////////////////////////////////////////
        /// </summary>
        /// <param name="situacao"></param>
        /// <param name="id_movimento"></param>
        /// <returns></returns>
        [HttpPost]
        public bool AlterarSituacao(int situacao, int id_movimento)
        {
            ResumoBusiness resumo = new ResumoBusiness();

           return(resumo.alterarSituacao(situacao, id_movimento));

        }
   

        public IActionResult ValorOrcado()
        {
            return View();
        }



        public List<Mensagem> ConsultarMensagem(DateTime DataGravacao, int ID_Tipo, int ID_Conta )
        {
            List<Mensagem> todasMesagens = new List<Mensagem>();
            MensagemBusiness msgbus = new MensagemBusiness();
         
 
            todasMesagens = msgbus.ConsultarMensagem(DataGravacao, ID_Tipo, ID_Conta);

            return todasMesagens;
        }

        public bool EnviarMensagem(int ID_Tipo, int ID_Conta, DateTime DataMes, String Msg, String Login_Autor)
        {

            MensagemBusiness msgBusiness = new MensagemBusiness();

            return msgBusiness.InseriMensagem(ID_Tipo, ID_Conta, DataMes, Msg, Login_Autor);

        }

    }
}
