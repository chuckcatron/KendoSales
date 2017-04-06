using System.Collections.Generic;

namespace Northwind.Admin.Application.DataAccess.GridService
{
    class DataSourceRequest
    {
        public int Take { get; set; }
        public int Skip { get; set; }
        public int Dept { get; set; }
        public string ConnectionId { get; set; }
        public IEnumerable<Sort> Sort { get; set; }
        public Filter Filter { get; set; }
    }
}
