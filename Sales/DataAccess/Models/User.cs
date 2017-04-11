using Sales.DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sales.DataAccess.Models
{
    public class User
    {
        private readonly IUserRepo _userRepo;

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public User(IUserRepo userRepo)
        {
            _userRepo = userRepo;
        }
        
        public User()
        {

        }

        public bool ValidateUser()
        {
            return _userRepo.ValidateUser(Email, Password);
        }

        public string GetName()
        {
            return this.FirstName + " " + this.LastName;
        }

        public bool HasAccess()
        {
            return this.ValidateUser();
        }

        public bool CanUpdate()
        {
            return this.ValidateUser();
        }
    }
}