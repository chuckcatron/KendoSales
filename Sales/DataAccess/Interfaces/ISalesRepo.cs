using Sales.DataAccess.Context;
using System.Collections.Generic;

namespace Sales.DataAccess.Interfaces
{
    public interface ISalesRepo
    {
        List<Listing> GetAllListings();
        List<Task> GetAllAppointments();
        List<BuildingStyle> GetAllBuildingStyles();
    }
}
