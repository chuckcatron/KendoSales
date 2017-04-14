using Sales.DataAccess.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sales.DataAccess.Models
{
    public class TaskViewModel : SchedulerEvent
    {
        public int TaskID { get; set; }
        public int? OwnerID { get; set; }

        public Task ToEntity()
        {
            return new Task
            {
                TaskID = TaskID,
                Title = Title,
                Start = Start,
                StartTimezone = StartTimezone,
                End = End,
                EndTimezone = EndTimezone,
                Description = Description,
                RecurrenceRule = RecurrenceRule,
                RecurrenceException = RecurrenceException,
                RecurrenceID = RecurrenceID,
                IsAllDay = IsAllDay,
                OwnerID = OwnerID
            };
        }
    }
}