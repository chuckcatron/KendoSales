using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sales.DataAccess.Context;
using Sales.DataAccess.Interfaces;

namespace Sales.DataAccess.Repositories
{
    public class SalesRepo : ISalesRepo
    {
        public List<Sale> GetAllSales()
        {
            using (var db = new SalesDBEntities())
            {
                return db.Sales.ToList();
            }
        }

        public List<Sale> GetSalesBySalesPersonId(int id)
        {
            using (var db = new SalesDBEntities())
            {
                return db.Sales.Where(s => s.SalesPersonID == id).ToList();
            }
        }

        public List<Sale> GetSalesByCustomerId(int id)
        {
            using (var db = new SalesDBEntities())
            {
                return db.Sales.Where(s => s.CustomerID == id).ToList();
            }
        }

        public List<Sale> GetSalesByProductId(int id)
        {
            using (var db = new SalesDBEntities())
            {
                return db.Sales.Where(s => s.ProductID == id).ToList();
            }
        }
    }
}