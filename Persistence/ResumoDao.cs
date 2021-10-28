using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;
using System.Text;
using Model;


namespace Persistence
{
    public class ResumoDAO {

        String DBConecta = "PCO";

        /// <summary>
        /// //////////////////////////// CONSULTAR TODOS /////////////////////////////////////////////////
        /// </summary>
        /// <returns></returns>

        //public List<Resumo> ConsultarTodos()
        //{
        //    String sql = "select  top 10 * from dbo.Resumo"; 
        //    SqlCommand comand = null;
        //    SqlConnection conn = null;
        //    SqlDataReader result = null;
        //    List<Resumo> todos = new List<Resumo>();
        //    Resumo resumo = null;

        //    try
        //    {
        //        conn = new Conexao().abrirConexao("TESTE");
        //        comand = new SqlCommand(sql, conn);
        //        ValorOrcado orcado = null;
        //        List<ValorOrcado> ListOrcado = new List<ValorOrcado>();

        //        if (conn != null)
        //        {
        //            result = comand.ExecuteReader();

        //            while (result.Read())
        //            {
        //                orcado = new ValorOrcado();
        //                resumo = new Resumo();
        //                orcado.ID_Movimento = Convert.ToInt32(result["ID_Movimento"]);
        //                orcado.Situacao = Convert.ToInt32(result["Situacao"]);
        //                if (result["ValorOrcado"] == DBNull.Value) { orcado.Valor = 0; }
        //                else { orcado.Valor = Convert.ToSingle(result["ValorOrcado"]); }
        //                ListOrcado.Add(orcado);

        //                resumo.ID_Conta = Convert.ToInt32(result["ID_Conta"]);
        //                resumo.ID_Tipo = Convert.ToInt32(result["ID_Tipo"]);
        //                resumo.ValorInicial = Convert.ToSingle(result["ValorInicial"]);
        //                resumo.ValorFinal = Convert.ToSingle(Convert.ToString(result["ValorFinal"]));
        //                if (result["ValorAcumuladoInicial"] == DBNull.Value) { resumo.ValorAcumuladoInicial = 0; }
        //                else {resumo.ValorAcumuladoInicial = Convert.ToSingle(result["ValorAcumuladoInicial"]);}
        //                if (result["ValorAcumulado"] == DBNull.Value) { resumo.ValorAcumulado = 0; }
        //                else{resumo.ValorAcumulado = Convert.ToSingle(result["ValorAcumulado"]);}
        //                if (result["ValorRealizado"] == DBNull.Value) { resumo.ValorRealizado = 0; }
        //                else{resumo.ValorRealizado= Convert.ToSingle(result["ValorRealizado"]);}
        //                if (result["ValorDebitoInicial"] == DBNull.Value) { resumo.ValorDebitoInicial = 0; }
        //                else{resumo.ValorDebitoInicial = Convert.ToSingle(result["ValorDebitoInicial"]);}
        //                resumo.Data = Convert.ToDateTime(result["Data"]);
        //                resumo.Orcado = ListOrcado;
                        
        //                resumo.Obs_Gestor =(result["Obs_Gestor"]).ToString();

        //                todos.Add(resumo);
        //            }
                    
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        Console.Write(ex);
        //    }
        //    conn.Close();
        //    return todos;
        //}


        /// <summary>
        /// ///////////////////////////// ALTERAR VALOR DO CAMPO ///////////////////////////////////////////////////
        /// </summary>
        /// <param name="id_movimento"></param>
        /// <param name="nomeCampo"></param>
        /// <param name="valor"></param>
        /// <param name="situacao"></param>
        /// <returns></returns>
        //////////////////////////////////// FUNÇÃO QUE REALIZA QUALQUER ALTERAÇÃO NOS CAMPOS ////////////////////////////////
        public bool alterarCampo(int id_movimento, String nomeCampo, String valor, int situacao)

        {
                                                                                    // Query que vai ser rodando no banco de dados
            String sql = "update dbo.Resumo set " + nomeCampo +" = @valorCampo, situacao = @situacao where ID_Movimento = @id_movimento";
            SqlCommand comand = null;                                               // Instanciando um objeto do tipo command
            SqlConnection conn = null;                                              // Instanciando um objeto do tipo Connection

            try
            {
                conn = new Conexao().abrirConexao(DBConecta);                         // Instanciando a conexão com o banco passando o nome do banco como parametro
                comand = new SqlCommand(sql, conn);                                 // passando query com a conexão para o obj command
                comand.Parameters.AddWithValue("@valorCampo", valor);               // passando valor como parametro para o comand
                comand.Parameters.AddWithValue("@id_movimento", id_movimento);      // passando valor como parametro para o comand
                comand.Parameters.AddWithValue("@situacao", situacao);              // passando valor como parametro para o comand
                if (conn != null)                                                   // Se a conexão der certo
                {
                    comand.ExecuteNonQuery();                                       // executa o comando no banco 
                    return true;                                                    // returna true se o comando acima der certo
                }
            }
            catch (Exception ex)                                                    // tratamento de erro
            {
                Console.Write(ex);
            }
            conn.Close();                                                           // fecha a conexão com banco de dados
            return false;                                                           // retorna falso se o comando falhar
        }


        /// <summary>
        /// ///////////////////////////////// CONSULTAR TODOS POR DATA //////////////////////////////////
        /// </summary>
        /// <param name="dataRecebida"></param>
        /// <param name="horizonte"></param>
        /// <param name="xTipo"></param>
        /// <param name="xConta"></param>
        /// <param name="xSituacao"></param>
        /// <param name="xNivel"></param>
        /// <param name="xLogin"></param>
        /// <returns></returns>
        /// //////////////////////////////// CONSULTA TODOS MOVIMENTOS DE ACORDO COM OS PARAMETROS ////////////////////////////////////////////////
        public List<Resultado> ConsultarPorData(String[] dataRecebida, int horizonte, int xTipo, int xConta, int xSituacao, int xNivel, String xLogin, String xResponsavel, int xMoeda)
        {

                                                                                    // Declaração de variaveis que serão utilizadas para criação da query
            String[] Orcado = new String[horizonte];  
            String[] situacao = new String[horizonte];
            String[] ID_movimento = new String[horizonte];
            String[] ValorRealizado = new String[horizonte];
            String[] Mensagem = new String[horizonte];
            String[] ValorSolicitado = new String[horizonte];
            String[] duplicado = new string[horizonte];
            String[] AutorUltimaMensagem = new string[horizonte];


                                                                                    // loop de repetição que responsavel pela criação da query 
            for (int i = 0; i < horizonte; i++)                                     // cria colunas dinamicas de acordo com a data e horizonte pedido
            {
                Orcado[i] = ", SUM(CASE WHEN R.DATA = '" + dataRecebida[i] + "' THEN R.ValorOrcado  ELSE 0.0 END) AS '[" + dataRecebida[i] + "-Valor_Orcado]'";
                situacao[i] = ", SUM(CASE WHEN R.DATA = '" + dataRecebida[i] + "' THEN R.situacao     ELSE 0.0 END) AS '[" + dataRecebida[i] + "-Situacao]'";
                ID_movimento[i] = ", SUM(CASE WHEN R.DATA = '" + dataRecebida[i] + "' THEN R.ID_Movimento ELSE 0.0 END) AS '[" + dataRecebida[i] + "-ID_Movimento]'";
                duplicado[i] = " ,SUM(CASE WHEN R.DATA = '"+dataRecebida[i]+"' THEN 1  ELSE 0 END) AS '[" + dataRecebida[i] + "-Duplicado]'";
                ValorRealizado[i] = ", SUM(CASE WHEN R.DATA = '" + dataRecebida[i] + "' THEN R.ValorRealizado ELSE 0.0 END) AS '[" + dataRecebida[i] +"-ValorRealizado]'";
                Mensagem[i] = ", SUM(CASE WHEN R.DATA = '" + dataRecebida[i] + "' THEN R.Obs_Gestor ELSE 0.0 END) AS '[" + dataRecebida[i] + "-Mensagem]'";
                ValorSolicitado[i] = ", SUM(CASE WHEN R.DATA = '" + dataRecebida[i] + "' THEN R.ValorSolicitado ELSE 0.0 END) AS '[" + dataRecebida[i] + "-ValorSolicitado]'";
                AutorUltimaMensagem[i] = ", SUM(CASE WHEN R.DATA = '" + dataRecebida[i] + 
                                         "' THEN (CASE WHEN isnull(FollowUp_Login, '') = ''"+
                                         "  THEN 0 WHEN FollowUp_Login = 'OK' " +
                                         "  THEN 3 WHEN FollowUp_Login = '<" + xLogin + ">'"+
                                         "  THEN 1 WHEN FollowUp_Login <> '<" + xLogin + ">'"+
                                         "  THEN 2 else -1 END) ELSE 0.0 END) AS '[" + dataRecebida[i] + "-FollowUp]'";
            }
            // commeço da query de consulta ** SELECT **
            String xSelect_Sql = "SELECT T.ID_TIPO , (T.DESCRICAO) as T_DESCRICAO , C.ID_CONTA, C.DESCRICAO, T.RESPONSAVEL";
                                                                                    // adiciona na query as colunas geradas acima 
            for (int i = 0; i < horizonte; i++)
            {                                                                       // adiciona na query as colunas geradas acima 
                xSelect_Sql = xSelect_Sql + 
                              Orcado[i] + 
                              situacao[i] + 
                              ID_movimento[i] + 
                              duplicado[i] +
                              ValorRealizado[i] + 
                              Mensagem[i] + 
                              ValorSolicitado[i] + 
                              AutorUltimaMensagem[i];
            }
                                                                                    // declara a segunda  parte de montagem da query
            String xSelect_From = " FROM dbo.Tipo T INNER Join" +

                                  " dbo.Conta C" +

                                  " ON T.ID_TIPO = C.ID_TIPO" +

                                  " INNER JOIN dbo.Resumo R ON " +

                                  " R.ID_TIPO = T.ID_TIPO" +

                                  " AND R.ID_CONTA = C.ID_CONTA And C.ATIVO = 1  WHERE R.DATA BETWEEN '" +

                                  dataRecebida[0] + "' AND '" + dataRecebida[horizonte - 1] + "'";
                                    
             if(xTipo > 0)                                                          // concatena se tipo > 0
            {
                xSelect_From = xSelect_From + " AND  T.ID_TIPO = " + xTipo;
            }

            if (xConta > 0)                                                          // concatena se conta > 0
            {
                xSelect_From = xSelect_From + " AND  C.ID_CONTA= " + xConta;
            }

            if(xSituacao != 0)                                                       // concatena se xSituacao > 0
            {
                xSelect_From = xSelect_From + " AND  R.SITUACAO = " + xSituacao;
            }
            if(xNivel != 0)                                                         // concatena se xNivel > 0
            {
                xSelect_From = xSelect_From + " AND T.RESPONSAVEL LIKE  '<" + xLogin + ">'";
            }

            if(xResponsavel != "0")
            {
                xSelect_From = xSelect_From + " AND T.RESPONSAVEL LIKE  '%" + xResponsavel + "%'";
            }

            if(xMoeda != 0)
            {
                xSelect_From = xSelect_From + " AND C.TipoMovimento = " + xMoeda;
            }
                                                                                    // concatena o group by 
            xSelect_From = xSelect_From + " Group BY T.ID_TIPO , T.DESCRICAO , C.ID_CONTA,C.DESCRICAO,T.RESPONSAVEL";
              

            String sql = xSelect_Sql + xSelect_From;                                // juntando as duas partes da query

            SqlCommand comand = null;                                               // instanciando obj class command
            SqlConnection conn = null;                                              // instanciando obj class connection
            SqlDataReader result = null;                                            // instanciando obj class result
            List<Resultado> todos = new List<Resultado>();                          // instanciando obj class command
            Resultado resultado = null;

            try
            {
                conn = new Conexao().abrirConexao(DBConecta);                         // abrindo conexão passando como parametro o nome do banco
                comand = new SqlCommand(sql, conn);                                 // completando a instancia da class commad passando a query e a conexao como parametro 
                ValorOrcado orcado = null;                                          // instanciando obj do tipo valorOrcado
                List<ValorOrcado> ListOrcado = null;                                // criando uma lista de obj do tipo valorOrcado
                String ColunaSituacao;                                              // variavel utilizada para ajudar na pesquisa nas colunas dinamicas
                String ColunaOrcado;                                                //
                String ColunaID_Movimento;                                          //
                String ColunaValorRealizado;                                        //
                String ColunaMensagem;                                              //        
                String ColunaValorSolicitado;                                       //
                String ColunaDuplicado;                                             //
                String ColunaAutorUltima;

                Tipo tipo = null;                                                   // instanciando o obj do tipo Tipo
                Conta conta = null;                                                 // instanciando o obj do tipo Conta

                if (conn != null)
                {
                    result = comand.ExecuteReader();                                // rodando o comando e recebendo o resultado

                    while (result.Read())                                           // se o resultado não for vazio
                    {
                        
                        resultado = new Resultado();                                // completa instancia do objeto
                        tipo = new Tipo();                                          // completa instancia do objeto
                        conta = new Conta();                                        // completa instancia do objeto
                        ListOrcado = new List<ValorOrcado>();                       // completa instancia  da lista de objetos

                        for (int i=0; i < horizonte; i++)                           // loop para receber o valor das colunas dinamicas
                        {
                            orcado = new ValorOrcado();                             // completa instancia do objeto
                                                                                    
                                                                                    // variaveis que recebem os nomes que irão ser consultados no banco
                            ColunaID_Movimento = "["+dataRecebida[i] + "-ID_Movimento]";
                            ColunaSituacao= "["+dataRecebida[i] + "-Situacao]";
                            ColunaOrcado = "["+dataRecebida[i] + "-Valor_Orcado]";
                            ColunaValorRealizado = "[" + dataRecebida[i] + "-ValorRealizado]";
                            ColunaMensagem = "[" + dataRecebida[i] + "-Mensagem]";
                            ColunaValorSolicitado = "[" + dataRecebida[i] + "-ValorSolicitado]";
                            ColunaDuplicado = "[" + dataRecebida[i] + "-Duplicado]";
                            orcado.NomeColuna = dataRecebida[i];
                            ColunaAutorUltima = "[" + dataRecebida[i] + "-FollowUp]";
                                                                                      // recebendo o resultado do banco de dados
                            if (result[ColunaID_Movimento] != DBNull.Value) { orcado.ID_Movimento = Convert.ToInt32(result[ColunaID_Movimento]); }
                            else { orcado.ID_Movimento = 0; }
                            if (result[ColunaSituacao] != DBNull.Value) { orcado.Situacao = Convert.ToInt32(result[ColunaSituacao]); }
                            else { orcado.Situacao = 0; }
                            if (result[ColunaOrcado] != DBNull.Value) { orcado.Valor = Convert.ToDecimal(result[ColunaOrcado]); }
                            else { orcado.Valor = 0; }
                            if (result[ColunaValorRealizado] != DBNull.Value) { orcado.ValorRealizado = Convert.ToDecimal(result[ColunaValorRealizado]); }
                            else { orcado.ValorRealizado = 0; }
                            if (result[ColunaMensagem] != DBNull.Value) { orcado.Mensagem = Convert.ToString(result[ColunaMensagem]); }
                            else { orcado.Mensagem = "Não possui Mensagem!"; }
                            if (result[ColunaValorSolicitado] != DBNull.Value) { orcado.ValorSolicitado= Convert.ToDecimal(result[ColunaValorSolicitado]); }
                            else { orcado.ValorSolicitado = 0; }
                            if (result[ColunaDuplicado] != DBNull.Value) { orcado.Duplicado = Convert.ToInt32(result[ColunaDuplicado]); }
                            else { orcado.Duplicado = 0; }
                            if (result[ColunaAutorUltima] != DBNull.Value) { orcado.AutorUltimaMsg = Convert.ToInt32(result[ColunaAutorUltima]); }
                            else { orcado.AutorUltimaMsg = 0; }
                            ListOrcado.Add(orcado);
                        }
                                                                                        // recebendo os demais resultados do banco
                        tipo.ID_Tipo = Convert.ToInt32(result["ID_TIPO"]);
                        tipo.Descricao = result["T_DESCRICAO"].ToString();
                        tipo.Responsavel = result["RESPONSAVEL"].ToString();
                        conta.ID_Conta = Convert.ToInt32(result["ID_CONTA"]);
                        conta.Descricao = result["DESCRICAO"].ToString();
                        resultado.Conta = conta;                                             // add objeto tipo no obj resultado
                        resultado.Tipo = tipo;                                               // add objeto conta no obj resultado
                        resultado.Orcado = ListOrcado;                                       // add objeto orcado no obj resultado

                        todos.Add(resultado);                                               // add resultado na lista de Obj
                    }

                }
            }
            catch (Exception ex)
            {
                Console.Write(ex);
            }
            conn.Close();                                                                   // fechando conexao
            return todos;                                                                   // retornando a lista com todos objetos
        }




        /// <summary>
        /// //////////////////////////////////// FUNÇÃO DE INSERIR VALORES ///////////////////////////////////////////////////////
        /// </summary>
        /// <param name="nome"></param>
        /// <param name="dataParaGravar"></param>
        /// <param name="valor"></param>
        /// <param name="tipo"></param>
        /// <param name="conta"></param>
        /// <param name="situacao"></param>
        /// <returns></returns>
        /// ///////////////////////////// FUNÇÃO PARA INSERIR QUALQUER VALOR NOS CAMPOS DA TABELA DO BANCO ///////////////////////////
        /// 
        public bool inserirNovoValor( String nome, String dataParaGravar, String valor, int tipo, int conta, int situacao) 
        {
                                                                                            // query de inserção
            String sql = " insert into dbo.Resumo"+                     
                "(Data,ID_Tipo,ID_Conta,Situacao,"+nome+") " +
                "values( @Data,@ID_Tipo,@ID_Conta,@Situacao,@Valor)";
            SqlCommand comand = null;                                                       // instanciando obj da class command
            SqlConnection conn = null;                                                      // instanciando obj da class connection

            try
            {
                conn = new Conexao().abrirConexao(DBConecta);                                 // abrindo conexao passando como parametro o nome do banco
                if (conn != null)                                                           // se conecão não for nula
                {
                    comand = new SqlCommand(sql, conn);                                     // completa instancia passando como parametro o query e a conexao
                    comand.Parameters.AddWithValue("@Data", dataParaGravar);                // passando parametro
                    comand.Parameters.AddWithValue("@ID_Tipo", tipo);                       // passando parametro
                    comand.Parameters.AddWithValue("@ID_Conta", conta);                     // passando parametro
                    comand.Parameters.AddWithValue("@Situacao", situacao);                  // passando parametro
                    comand.Parameters.AddWithValue("@Valor", valor);              // passando parametro
                    comand.ExecuteNonQuery();                                               // executando o comando no banco
                    return true;                                                            // retornando true se não deu erro no comando acima
                }
            }
            catch (Exception ex)
            {
                Console.Write(ex);
            }
            conn.Close();                                                                   // fechando conexão no banco
            return false;                                                                   // retornando false coso a trasação dê errado
        }





        /// <summary>
        /// /////////////////////////////////////// FUNÇÃO PARA ALTERAR A SITUAÇÃO ////////////////////////////////////////////////////////////
        /// </summary>
        /// <param name="situacao"></param>
        /// <param name="id_movimento"></param>
        /// <returns></returns>
        /// ////////////////////////////////////// SERVE PARA ALTERAR A SITUAÇÃO DE CADA MOVIMENTO NO BANCO DE DADOS //////////////////////////////
        public bool alterarSituacao(int situacao, int id_movimento)
        {
            SqlConnection conn = null;
            SqlCommand comand = null;                                                              // query  que vai ser inserida no banco
            String sql = "update resumo set Situacao = @situacao where ID_MOVIMENTO = @id_movimento";

            try
            {
                conn = new Conexao().abrirConexao(DBConecta);                                         // abrindo conexao passando como parametro o nome do banco
                if (conn != null)                                                                   // se conecão não for nula
                {
                    comand = new SqlCommand(sql, conn);                                             // completa instancia passando como parametro o query e a conexao
                    comand.Parameters.AddWithValue("@situacao", situacao);                          // passando parametro
                    comand.Parameters.AddWithValue("@id_movimento", id_movimento);                  // passando parametro
                    comand.ExecuteNonQuery();                                                       //
                    return true;                                                                    // retornando true se não deu erro no comando acima
                }
            }catch(Exception ex)
            {
                Console.Write(ex);
            }
            conn.Close();                                                                           // fechando conexão no banco
            return false;                                                                           // retornando false coso a trasação dê errado
        }
          
    }
}
