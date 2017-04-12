loaderModel = kendo.observable({
    docHeight: $(document).height(),
    init: function () {
        $("body").append("<div id='overlay'></div>");
        var loader = $("#overlay");
        loader.height(loaderModel.get("docHeight"))
          .css({
              'position': "fixed",
              'top': 0,
              'left': 0,
              'width': "100%"
          });
    },

    show: function () {
        var d = $.Deferred();
        var loader = $("#overlay");
        loader.height(loaderModel.get("docHeight"));
        loader.show();
        kendo.ui.progress($("#overlay"), true);

        setTimeout(function () {
            d.resolve();
        }, 300);

        return d.promise();
    },

    hide: function () {
        var overlay = $("#overlay");
        setTimeout(function () {
            kendo.ui.progress($("#overlay"), false);
            overlay.hide();
        }, 500);
    }
});