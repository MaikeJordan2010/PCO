using System;
using System.Collections.Generic;
using System.Text;
using Model;
using System.Data.SqlClient;

namespace Persistence
{
    public class LoginDAO
    {
        private SqlConnection conn = null;
        private SqlCommand comand = null;
        private SqlDataReader result = null;


        public User ConsultaUM(User user)
        {
            String sql = "select * from dbo.TB_Usuario where Login = @Login and Senha = @senha  and Ativo = 1";
            User usuario = null;
            SqlParameter param = new SqlParameter();

            try
            {
                conn = new Conexao().abrirConexao("Cpd");
                comand = new SqlCommand(sql, conn);
                comand.Parameters.AddWithValue("@Login", user.Login);
                comand.Parameters.AddWithValue("@senha", user.Password);

                if (conn != null)
                {
                    result = comand.ExecuteReader();
                    
                    while (result.Read())
                    {
                        usuario = new User();
                        usuario.Id = Convert.ToInt32(result["ID_Usuario"]);
                        usuario.Login = result["Login"].ToString();
                        usuario.Email = result["Email_Envio"].ToString();
                        usuario.Nome = result["Nome"].ToString();
                        usuario.Nivel = Convert.ToInt32(result["Nivel"]);

                    }
                    conn.Close();
                }
            }
            catch(Exception ex)
            {

            }

            return usuario;
        }
       
    }
}
