using Model;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;


namespace Persistence
{
    public class TipoDAO
    {
        String DBConecta = "PCO";
        public List<User> todosUsuario()
        {

            SqlCommand comand = null;                                               // instanciando obj class command
            SqlConnection conn = null;                                              // instanciando obj class connection
            SqlDataReader result = null;
            List<User> todosUser = new List<User>();
            User user = null;
            String[] maisDeUmUsuario;
            String sql = "SELECT  DISTINCT(RESPONSAVEL) FROM TIPO WHERE ATIVO = 1";
            try
            {
                conn = new Conexao().abrirConexao(DBConecta);

                if(conn != null)
                {
                    comand = new SqlCommand(sql, conn);
                    result = comand.ExecuteReader();

                    while (result.Read())
                    {
                        maisDeUmUsuario = result["RESPONSAVEL"].ToString().Split(";");

                        for(int i = 0; i < maisDeUmUsuario.Length; i++)
                        {
                            user = new User();

                            user.Login = maisDeUmUsuario[i].ToString(); ;
                            todosUser.Add(user);
                        }
                        
                    }
                }
            }
            catch ( Exception ex )
            {

            }
            conn.Close();
            return todosUser;
        }

       
    }
}
