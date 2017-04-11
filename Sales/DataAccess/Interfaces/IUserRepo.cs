using Sales.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sales.DataAccess.Interfaces
{
    public interface IUserRepo
    {
        bool ValidateUser(string email, string password);
    }
}
