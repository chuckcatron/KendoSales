using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Routing;
using Sales.DataAccess.Interfaces;

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
        [Route("listings")]
        public HttpResponseMessage GetAllListings()
        {
            var allSales = _salesRepo.GetAllListings();
            return Request.CreateResponse(HttpStatusCode.OK, allSales);
        }
        
        [HttpGet]
        [Route("appointments")]
        public HttpResponseMessage GetAppointments()
        {
            var allAppointments = _salesRepo.GetAllAppointments();
            return Request.CreateResponse(HttpStatusCode.OK, allAppointments);
        }

        [HttpGet]
        [Route("buildingstyles")]
        public HttpResponseMessage GetBuildingStyles()
        {
            var allstyles = _salesRepo.GetAllBuildingStyles();
            return Request.CreateResponse(HttpStatusCode.OK, allstyles);
        }
    }
}