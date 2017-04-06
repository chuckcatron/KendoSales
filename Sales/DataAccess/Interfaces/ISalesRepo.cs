using System.Collections.Generic;
using Sales.DataAccess.Context;

namespace Sales.DataAccess.Interfaces
{
    public interface ISalesRepo
    {
        List<Sale> GetAllSales();
        List<Sale> GetSalesBySalesPersonId(int id);
        List<Sale> GetSalesByCustomerId(int id);
        List<Sale> GetSalesByProductId(int id);
    }
}