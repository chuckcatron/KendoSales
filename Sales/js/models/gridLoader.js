var gridLoader = kendo.observable({
    docHeight: $("#rebatesGrid").height(),
    init: function () {
        $("body").append("<div id='gridoverlay'></div>");
        var loader = $("#gridoverlay");
        loader.height($("#rebatesGrid").height())
          .css({
              'opacity': 0.05,
              'position': 'fixed',
              'top': 0,
              'left': $(".sidebar").width(),
              'background-color': 'black',
              'width': $("#rebatesGrid").width() + 100,
              'z-index': 5000,
              'margin': '0 auto',
              'padding-top': '15em'
          });
    },

    show: function () {
        $("#gridoverlay").remove();
        gridLoader.init();
        var loader = $("#gridoverlay");
        loader.height($("#rebatesGrid").height());
        loader.show();
        kendo.ui.progress($("#gridoverlay"), true);
    },

    hide: function () {
        var loader = $("#gridoverlay");
        setTimeout(function () {
            kendo.ui.progress($("#gridoverlay"), false);
            loader.hide();
        }, 500);
    }
});