using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Model
{
    public class User
    {
        public String Nome { get; set; }
        public String Email { get; set; }
        public String Password { get; set; }
        public int Id { get; set; }
        public int Nivel { get; set; }
        [MaxLength(5)]
        public String Login{ get; set; }

    }
}
