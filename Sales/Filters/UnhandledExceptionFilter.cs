using System.Web;
using System.Web.Http.Filters;

namespace Sales.Filters
{
    public class UnhandledExceptionFilter: ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext actionExecutedContext)
        {
            Elmah.ErrorLog.GetDefault(HttpContext.Current).Log(new Elmah.Error(actionExecutedContext.Exception));
        }
    }
}