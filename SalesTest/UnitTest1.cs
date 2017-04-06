using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Hosting;
using System.Web.Http.Routing;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Sales.Controllers;
using Sales.DataAccess.Context;
using Sales.DataAccess.Interfaces;
using SalesTest.Interfaces;

namespace SalesTest
{
    [TestClass]
    public class SalesControllerTest
    {
        [TestMethod]
        public void Test_GetAllSales()
        {
            var sales = new List<Sale>();
            //Arrange
            sales.Add(new Sale()
            {
                SalesID = 1,
                SalesPersonID = 17,
                CustomerID = 10482,
                ProductID = 500,
                Quantity = 500
            });

            sales.Add(new Sale()
            {
                SalesID = 1,
                SalesPersonID = 17,
                CustomerID = 10482,
                ProductID = 500,
                Quantity = 500
            });
            var mockSalesRepo = new Mock<ISalesRepo>();
            mockSalesRepo.Setup(x => x.GetAllSales())
                .Returns(sales);
            var controller = new SalesController(mockSalesRepo.Object);
            //Act
            SetupControllerForTests(controller, HttpMethod.Get, "sales/all");
            var response = controller.GetAllSales();
            //Assert
            Assert.IsNotNull(response.Content);
        }


        private static void SetupControllerForTests(ApiController controller, HttpMethod method, string url)
        {
            var config = new HttpConfiguration();
            var request = new HttpRequestMessage(method, url);
            var route = config.Routes.MapHttpRoute("DefaultApi", "api/{controller}/{id}");
            var routeData = new HttpRouteData(route, new HttpRouteValueDictionary {{"controller", "products"}});

            controller.ControllerContext = new HttpControllerContext(config, routeData, request);
            controller.Request = request;
            controller.Request.Properties[HttpPropertyKeys.HttpConfigurationKey] = config;
        }
    }
}
