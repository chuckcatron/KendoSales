using NLog;
using Sales.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;

namespace Sales.Core
{
    
        public class LoggerFactory
    {
        private readonly HttpContext _context = HttpContext.Current;

        private static readonly Logger Logger = LogManager.GetLogger("RMLogger");
        private static readonly Logger DwLogger = LogManager.GetLogger("DWLogger");
        public void Log(LogLevel level, Exception ex, User user)
        {
            Logger.Log(level, BuildMessage(ex, user));
            if (HttpContext.Current == null) return;
            Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
        }

        public void Log(LogLevel level, Exception ex)
        {
            Logger.Log(level, BuildMessage(ex));
            if (HttpContext.Current == null) return;
            Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
        }
        public void LogDW(string data)
        {
            DwLogger.Log(LogLevel.Trace, data);
        }

        private string BuildMessage(Exception ex, User user)
        {
            var fullMessage = new StringBuilder();
            fullMessage.AppendLine("********* BEGIN ERROR *********");
            fullMessage.AppendLine(DateTime.Now.ToShortDateString() + " " + DateTime.Now.ToShortTimeString());
            fullMessage.AppendLine(user.GetName());
            fullMessage.AppendLine(ex.Message);
            fullMessage.AppendLine(ex.StackTrace);
            fullMessage.AppendLine("********** END ERROR **********");
            return fullMessage.ToString();
        }

        private string BuildMessage(Exception ex)
        {
            var fullMessage = new StringBuilder();
            fullMessage.AppendLine("********* BEGIN ERROR *********");
            fullMessage.AppendLine(DateTime.Now.ToShortDateString() + " " + DateTime.Now.ToShortTimeString());
            fullMessage.AppendLine(ex.Message);
            fullMessage.AppendLine(ex.StackTrace);
            fullMessage.AppendLine("********** END ERROR **********");
            return fullMessage.ToString();
        }
    }
}