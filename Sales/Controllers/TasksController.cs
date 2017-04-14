using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Routing;
using Sales.DataAccess.Interfaces;

namespace Sales.Controllers
{
    [RoutePrefix("meetings")]
    public class TasksController : ApiController
    {

        var tasks = this.DeserializeObject<IEnumerable<TaskViewModel>>("models");

            if (tasks != null)
            {
                foreach (var task in tasks)
                {
                    TasksRepository.Update(task);
                }
}

            return this.Jsonp(tasks);
    }
}