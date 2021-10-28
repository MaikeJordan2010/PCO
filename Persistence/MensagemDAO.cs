using Model;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Persistence
{
    public class MensagemDAO
    {
        String DBConecta = "PCO";

        public List<Mensagem> ConsultarMensagens(String dataRecebida, int ID_Tipo, int ID_Conta)
        {
            // Query que vai ser rodando no banco de dados
            String sql = "select * from PCO_FollowUp"+
                        " where ID_tipo = @id_tipo "+
                        " and ID_Conta = @id_conta"+
                        " and Mes = @mes";
            SqlCommand comand = null;                                               // Instanciando um objeto do tipo command
            SqlConnection conn = null;                                              // Instanciando um objeto do tipo Connection
            SqlDataReader result = null;
            List<Mensagem> lista = new List<Mensagem>();
            Mensagem msg = null;

            try
            {
                conn = new Conexao().abrirConexao(DBConecta);                         // Instanciando a conexão com o banco passando o nome do banco como parametro
                comand = new SqlCommand(sql, conn);                                 // passando query com a conexão para o obj command
                comand.Parameters.AddWithValue("@id_tipo", ID_Tipo);
                comand.Parameters.AddWithValue("@id_conta", ID_Conta);
                comand.Parameters.AddWithValue("@mes", dataRecebida);
                result =  comand.ExecuteReader();

                while (result.Read())
                {
                    msg = new Mensagem();

                    msg.Id = Convert.ToInt32(result["ID_FollowUp"]);
                    msg.Id_conta = Convert.ToInt32(result["ID_Conta"]);
                    msg.Id_tipo = Convert.ToInt32(result["ID_Tipo"]);
                    msg.Login_Autor = result["Login_Autor"].ToString();
                    if (result["Login_Lido"] != DBNull.Value) { msg.Login_Lido = result["Login_Lido"].ToString(); }
                    else { msg.Login_Lido = ""; }
                    msg.Msg = result["Mensagem"].ToString();
                    msg.Data = Convert.ToDateTime(result["Data"]);
                    if(result["Data_lido"] != DBNull.Value) { msg.DataLido = Convert.ToDateTime(result["Data_lido"]); }
                    else { msg.DataLido = Convert.ToDateTime("0001-01-01 00:00:00"); }
                    msg.Mes = Convert.ToDateTime(result["Mes"]);

                    lista.Add(msg);

                }

            }
            catch (Exception ex)
            {

            }

            return lista;
         }


        public Boolean InserirMensagem(int ID_Tipo, int ID_Conta, DateTime DataMes, String Msg, String Login_Autor, String dataAtual)
        {
            // Query que vai ser rodando no banco de dados
            String sql = "insert into PCO_FollowUp(" +
                          "Mes, ID_Tipo, ID_Conta, Data, Login_Autor, Mensagem)" +
                          "values(@Mes,@ID_Tipo,@ID_Conta,@Data,@Login_Autor,@Mensagem)";

            SqlCommand comand = null;                                               // Instanciando um objeto do tipo command
            SqlConnection conn = null;                                              // Instanciando um objeto do tipo Connection

            try
            {
                conn = new Conexao().abrirConexao(DBConecta);                         // Instanciando a conexão com o banco passando o nome do banco como parametro

                if (conn != null)
                {
                    comand = new SqlCommand(sql, conn);                                 // passando query com a conexão para o obj command
                    comand.Parameters.AddWithValue("@Mes", DataMes);
                    comand.Parameters.AddWithValue("@ID_Tipo", ID_Tipo);
                    comand.Parameters.AddWithValue("@ID_Conta", ID_Conta);
                    comand.Parameters.AddWithValue("@Data", dataAtual);
                    comand.Parameters.AddWithValue("@Login_Autor", Login_Autor);
                    comand.Parameters.AddWithValue("@Mensagem", Msg);

                    comand.ExecuteNonQuery();
                    return true;

                }
            }
            catch(Exception ex)
            {

            }
            return false;
        }
    } 
}
