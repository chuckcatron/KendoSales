using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Routing;
using Sales.DataAccess.Context;
using Sales.DataAccess.Interfaces;
using Sales.DataAccess.Repositories;

namespace Sales.Controllers
{
    [RoutePrefix("sales")]
    public class SalesController : ApiController
    {
        private readonly ISalesRepo _salesRepo;

        public SalesController(ISalesRepo salesRepo)
        {
            _salesRepo = salesRepo;
        }
        [HttpGet]
        [Route("all")]
        public HttpResponseMessage GetAllSales()
        {
            var allSales = _salesRepo.GetAllSales();
            return Request.CreateResponse(HttpStatusCode.OK, allSales);
        }

        [HttpGet]
        [Route("salesperson/{id}")]
        public HttpResponseMessage GetSalesPersonSales(int id)
        {
            var sales = _salesRepo.GetSalesBySalesPersonId(id);
            return Request.CreateResponse(HttpStatusCode.OK, sales);
        }
    }
}