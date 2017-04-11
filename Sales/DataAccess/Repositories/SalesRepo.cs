using Sales.DataAccess.Context;
using Sales.DataAccess.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace Sales.DataAccess.Repositories
{
    public class SalesRepo: ISalesRepo
    {
        public List<Listing> GetAllListings()
        {
            var listings = new List<Listing>();
            using(var db = new KendoSalesDBEntities())
            {
                listings = db.Listings.AsQueryable().ToList();
            }

            return listings;
        }
    }
}