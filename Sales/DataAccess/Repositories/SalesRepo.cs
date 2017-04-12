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

        public List<Task> GetAllAppointments()
        {
            var tasks = new List<Task>();
            using (var db = new KendoSalesDBEntities())
            {
                tasks = db.Tasks.AsQueryable().ToList();
            }
            return tasks;
        }

        public List<BuildingStyle> GetAllBuildingStyles()
        {
            var styles = new List<BuildingStyle>();
            using (var db = new KendoSalesDBEntities())
            {
                styles = db.BuildingStyles.AsQueryable().ToList();
            }
            return styles;
        }
    }
}