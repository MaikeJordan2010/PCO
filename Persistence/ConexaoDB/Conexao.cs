using System;
using System.Collections.Generic;
using System.Text;
using System.Data.SqlClient;

namespace Persistence
{
    public class Conexao
    {
        private String user = "sa";
        private String password = "atusfresadora";
        private String server = "192.168.1.251\\ENTERPRISE";
  
        public SqlConnection abrirConexao(String database)
        {
            SqlConnection conn = null;
            try
            {
                conn = new SqlConnection("server=" + server + ";database=" + database + ";Uid=" + user + ";pwd=" + password);
                conn.Open();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Não foi possível se conectar ao banco de dados!");
            }
            return conn;
        }
    }
}
