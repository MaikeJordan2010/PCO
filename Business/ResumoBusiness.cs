using System;
using System.Collections.Generic;
using System.Text;
using Persistence;
using Model;

namespace Business
{
    public class ResumoBusiness
    {
        /// <summary>
        /// ////////////////////////////////////////////////////////////////////////////////////////////
        /// </summary>
        /// <returns></returns>

        //public List<Resumo> consultarTodos()
        //{
        //    List <Resumo> todos = new List<Resumo>();
        //    ResumoDAO resumo = new ResumoDAO();
        //    return (todos = resumo.ConsultarTodos());
        //}


        /// <summary>
        /// ///////////////////////////////////////////////////////////////////////////////////////
        /// </summary>
        /// <param name="id_movimento"></param>
        /// <param name="nomeCampo"></param>
        /// <param name="valorCampo"></param>
        /// <param name="situacao"></param>
        /// <returns></returns>
        ////////////////// RECEBE A REQUISIÇÃO E REPASSA PARA O DAO ///////////////////////////////////

        public bool alterarCampo(int id_movimento, String nomeCampo, String valorCampo, int situacao)
        {
            ResumoDAO resumo = new ResumoDAO();

            valorCampo = valorCampo.Replace(".", "");                               // subistitui o ponto ( . ) por nada
            valorCampo = valorCampo.Replace(",", ".");                              // subistitui a virgula ( , ) por ponto (.)

            if (resumo.alterarCampo(id_movimento, nomeCampo, valorCampo, situacao)){ // chama a função e ja retorna se é true ou false
                return true;                                                         // retorna true se a condição foi atingida
            }
            return false;
        }

        /// <summary>
        /// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /// </summary>
        /// <param name="nome"></param>
        /// <param name="nomeCampo"></param>
        /// <param name="valorCampo"></param>
        /// <param name="tipo"></param>
        /// <param name="conta"></param>
        /// <param name="situacao"></param>
        /// <returns></returns>
        ////////////////// RECEBE A REQUISIÇÃO E REPASSA PARA O DAO ///////////////////////////////////
        ///
        public bool InserirNovoValor(String nome, String dataParaGravar, String valorCampo, int tipo, int conta, int situacao)
        {

            valorCampo = valorCampo.Replace(".", "");                           // subistitui o ponto ( . ) por nada
            valorCampo = valorCampo.Replace(",", ".");                          // subistitui a virgula ( , ) por ponto (.)

            ResumoDAO resumo = new ResumoDAO();                                 // chama a função e ja retorna se é true ou false
            return (resumo.inserirNovoValor(nome, dataParaGravar, valorCampo, tipo, conta, situacao));
        }



        /// <summary>
        /// ////////////////////////////////////////////////////////////////////////////////////////////////////////
        /// </summary>
        /// <param name="dataInicio"></param>
        /// <param name="Horinzonte"></param>
        /// <param name="tipo"></param>
        /// <param name="conta"></param>
        /// <param name="situacao"></param>
        /// <param name="nivel"></param>
        /// <param name="login"></param>
        /// <returns></returns>
        ////////////////////////////// RECEBE A REQUISIÇÃO E REPASSA PARA O DAO ///////////////////////////////////////////
        public List<Resultado> BuscarHorizonte( DateTime dataInicio, int Horinzonte, int tipo, int conta, int situacao, int nivel, String login, String Responsavel, int moeda)
        {
            if (Horinzonte == 0) { Horinzonte = 5; }                                // horizonte é igual a 0 horizonte recebe 5
            if(dataInicio == null) {                                                // se data é nula
                String Format = "dd/MM/yyyy hh:mm:ss";                              // Declara variavel com data no formato dd/MM/yyyy hh:mm:ss
                String dataHora = DateTime.Now.ToString(Format);                    // pegando a data atual no formato especificado
                dataInicio = Convert.ToDateTime(dataHora);                          // chamdo função de conversão para o padrão necessário 
            }
            
            Util.ConverterData data = new Util.ConverterData();                     // instanciando obj criado para conversão de data para o padrão que precisamos
            int h = Convert.ToInt32(Horinzonte);                                    // h recebe o horizonte
            String[] dataRecebida = new String[h];                                  // vetor do tipo string com N posições
            DateTime dataEnviar = dataInicio;                                       // 
            List<Resultado> list = new List<Resultado>();                           // instanciando lista de resultado


            for (int i = 0; i< h; i++)                                              // loop que gera as datas 
            {
                dataRecebida[i] = data.dataPdrYMD(dataEnviar);                      // chamando função para transformar as datas
                dataEnviar = dataEnviar.AddMonths(1);
            }

            ResumoDAO resumo = new ResumoDAO();                                     // instanciando obj da class resumo
                                                                                    // a lista recebe o resultado da chamada
            list =  resumo.ConsultarPorData(dataRecebida, Horinzonte, tipo, conta, situacao, nivel, login, Responsavel, moeda);
            return list;
        }

       

        /// <summary>
        /// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /// </summary>
        /// <param name="situacao"></param>
        /// <param name="id_movimento"></param>
        /// <returns></returns>
        /// //////////////////// RECEBE A REQUISIÇÃO E ENCAMINHA PARA O DAO //////////////////////////////////////////////
        public bool alterarSituacao(int situacao, int id_movimento)
        {
            ResumoDAO resumo = new ResumoDAO();
            return (resumo.alterarSituacao(situacao, id_movimento));
        }
    }
}
