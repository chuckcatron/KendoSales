kendo.data.binders.widget.lock = kendo.data.Binder.extend({
    init: function (widget, bindings, options) {
        //call the base constructor
        kendo.data.Binder.fn.init.call(this, widget.element[0], bindings, options);

        this.widget = widget;
    },
    refresh: function () {
        var value = this.bindings["lock"].get();

        if (value) {
            $('#' + this.element.id).attr("disabled", "disabled");
        } else {
            $('#' + this.element.id).removeAttr("disabled");
        }
    }
});