using Sales.DataAccess.Context;
using Sales.DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sales.DataAccess.Models;

namespace Sales.DataAccess.Repositories
{
    public class UserRepo: IUserRepo
    {
        bool IUserRepo.ValidateUser(string email, string password)
        {
            var user = new Models.User();
            using (var db = new KendoSalesDBEntities())
            {
                try
                {
                    var result = db.Users.Single(u => u.Email == email && u.Password == password);
                    return true;
                }
                catch (Exception ex)
                {
                    return false;
                }
            }
        }
    }
}