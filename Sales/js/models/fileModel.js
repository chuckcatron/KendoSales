var fileModel = kendo.observable({
    processEnabled: false,
    processComplete: false,
    processProductsEnabled: false,
    processProductsComplete: false,
    files: [],
    eps: [],
    epList: function () {
        return fileModel.get("eps").join();
    },
    tbs: [],
    tbsList: function () {
        return fileModel.get("tbs").join();
    },
    tbp: [],
    tbpList: function () {
        return fileModel.get("tbp").join();
    },
    stores: [],
    storeList: function () {
        return fileModel.get("stores").join();
    },
    products: [],
    productList: function () {
        return fileModel.get("products").join();
    },
    initStores: function () {
        var deferred = $.Deferred();
        fileModel.set("processComplete", false);
        fileModel.set("processEnabled", false);
        fileModel.set("stores", []);
        fileModel.set("files", []);
        deferred.resolve(fileModel);
        return deferred.promise();
    },
    initProducts: function () {
        var deferred = $.Deferred();
        fileModel.set("processComplete", false);
        fileModel.set("processEnabled", false);
        fileModel.set("products", []);
        fileModel.set("files", []);
        deferred.resolve(fileModel);
        return deferred.promise();
    },
    initEP: function () {
        var deferred = $.Deferred();
        fileModel.set("processComplete", false);
        fileModel.set("processEnabled", false);
        fileModel.set("eps", []);
        fileModel.set("files", []);
        deferred.resolve(fileModel);
        return deferred.promise();
    },
    fileSelected: function (e) {
        var message = $.map(e.files, function (file) { return file.name; }).join(", ");
        console.log("event :: select (" + message + ")");
    },
    complete: function (e) {
        console.log(e);
        if (e.operation === "upload") {
            fileModel._uploadComplete(e);
        } else if (e.operation === "remove") {
            fileModel._removeComplete(e);
        }
    },
    productFileSelected: function (e) {
        var message = $.map(e.files, function (file) { return file.name; }).join(", ");
        console.log("event :: select (" + message + ")");
    },
    productComplete: function (e) {
        console.log(e);
        if (e.operation === "upload") {
            fileModel._productUploadComplete(e);
        } else if (e.operation === "remove") {
            fileModel._removeComplete(e);
        }
    },
    epFileSelected: function (e) {
        var message = $.map(e.files, function (file) { return file.name; }).join(", ");
        console.log("event :: select (" + message + ")");
    },
    epComplete: function (e) {
        console.log(e);
        if (e.operation === "upload") {
            fileModel._epUploadComplete(e);
        } else if (e.operation === "remove") {
            fileModel._removeComplete(e);
        }
    },
    tbFileSelected: function (e) {
        var message = $.map(e.files, function (file) { return file.name; }).join(", ");
        console.log("event :: select (" + message + ")");
    },
    tbsComplete: function (e) {
        console.log(e);
        if (e.operation === "upload") {
            fileModel._tbsUploadComplete(e);
        } else if (e.operation === "remove") {
            fileModel._removeComplete(e);
        }
    },
    tbpComplete: function (e) {
        console.log(e);
        if (e.operation === "upload") {
            fileModel._tbpUploadComplete(e);
        } else if (e.operation === "remove") {
            fileModel._removeComplete(e);
        }
    },
    _uploadComplete: function (e) {
        toastr.success("Upload Complete: " + fileModel.getFileInfo(e));
        fileModel.set("processEnabled", true);
        fileModel.ProcessFiles(e.files);
    },
    _productUploadComplete: function (e) {
        toastr.success("Upload Complete: " + fileModel.getFileInfo(e));
        fileModel.set("processEnabled", true);
        fileModel.ProcessProductFiles(e.files);
    },
    _epUploadComplete: function (e) {
        toastr.success("Upload Complete: " + fileModel.getFileInfo(e));
        fileModel.set("processEnabled", true);
        fileModel.ProcessEPFiles(e.files);
    },
    _tbsUploadComplete: function (e) {
        toastr.success("Upload Complete: " + fileModel.getFileInfo(e));
        fileModel.set("processEnabled", true);
        fileModel.ProcessTBSFiles(e.files);
    },
    _tbpUploadComplete: function (e) {
        toastr.success("Upload Complete: " + fileModel.getFileInfo(e));
        fileModel.set("processEnabled", true);
        fileModel.ProcessTBPFiles(e.files);
    },
    _removeComplete: function (e) {
        toastr.success("Delete Complete: " + fileModel.getFileInfo(e));
        fileModel.set("processEnabled", false);
        setTimeout(function() {}, 500);
    },
    _error: function (e) {
        toastr.error("We had a problem with " + fileModel.getFileInfo(e));
    },
    getFileInfo: function (e) {
        return $.map(e.files, function (file) {
            var info = file.name;

            // File size is not available in all browsers
            if (file.size > 0) {
                info += " (" + Math.ceil(file.size / 1024) + " KB)";
            }
            return info;
        }).join(", ");
    },
    ProcessFiles: function (files) {
        fileModel.set("processComplete", false);
        loader.show();
        fileModel._processFiles(files).done(function () {
            fileModel.set("processComplete", true);
            loader.hide();
        }).fail(function () {
            loader.hide();
        });
    },
    _processFiles: function (files) {
        var deferred = $.Deferred(),
            fileList = [];
        $(files).each(function(key, item) {
            fileList.push(item.name);
        });
        //var data = JSON.stringify(fileList);
        $.ajax({
            url: "Upload/BuildList",
            contentType: "application/json; charset=utf-8",
            type: 'Post',
            dataType: 'json',
            data: JSON.stringify({ 'files': fileList })
        }).done(function (result) {
            var f = [];
            $(result.data).each(function (key, item) {
                f.push(item.A);
            });
            fileModel.set("stores", f);
            rebatesModel.get("rebate").setStoreList(f);
            toastr.success(f.length + " stores in uploaded file.");
            deferred.resolve();
        }).fail(function (error) {
            toastr.error(error.statusText);
            deferred.reject();
        });
        return deferred.promise();
    },
    ProcessProductFiles: function (files) {
        fileModel.set("processProductsComplete", false);
        loader.show();
        fileModel._processProductFiles(files).done(function () {
            fileModel.set("processProductsComplete", true);
            loader.hide();
        }).fail(function () {
            loader.hide();
        });
    },
    _processProductFiles: function (files) {
        var deferred = $.Deferred(),
             fileList = [];
        $(files).each(function (key, item) {
            fileList.push(item.name);
        });
        $.ajax({
            url: "Upload/BuildList",
            contentType: "application/json; charset=utf-8",
            type: 'Post',
            dataType: 'json',
            data: JSON.stringify({ 'files': fileList })
        }).done(function (result) {
            var f = [];
            $.each(result.data, function (key, item) {
                f.push(item.A);
            });
            fileModel.set("products", f);
            rebatesModel.get("rebate").setProductList(f);
            toastr.success(f.length + " products in uploaded file.");
            deferred.resolve();
        }).fail(function (error) {
            toastr.error(error.statusText);
            deferred.reject();
        });
        return deferred.promise();
    },
    ProcessEPFiles: function (files) {
        fileModel.set("processEPComplete", false);
        loader.show();
        fileModel._processEPFiles(files).done(function () {
            fileModel.set("processEPComplete", true);
            loader.hide();
        }).fail(function () {
            loader.hide();
        });
    },
    _processEPFiles: function (files) {
        var deferred = $.Deferred(),
            fileList = [];
        $(files).each(function (key, item) {
            fileList.push(item.name);
        });
        $.ajax({
            url: "Upload/BuildList",
            contentType: "application/json; charset=utf-8",
            type: 'Post',
            dataType: 'json',
            data: JSON.stringify({ 'files': fileList })
        }).done(function (result) {
            var f = [];
            $.each(result.data, function (key, item) {
                f.push(item.A + "|" + item.B);
            });
            fileModel.set("eps", f);
            rebatesModel.get("rebate").setEPList(f);
            toastr.success(f.length + " EP Ids in uploaded file.");
            deferred.resolve();
        }).fail(function (error) {
            toastr.error(error.statusText);
            deferred.reject();
        });
        return deferred.promise();
    },
    ProcessTBSFiles: function (files) {
        fileModel.set("processTBSComplete", false);
        loader.show();
        fileModel._processTBSFiles(files).done(function () {
            fileModel.set("processTBSComplete", true);
            loader.hide();
        }).fail(function () {
            loader.hide();
        });
    },
    _processTBSFiles: function (files) {
        var deferred = $.Deferred(),
            fileList = [];
        $(files).each(function (key, item) {
            fileList.push(item.name);
        });
        $.ajax({
            url: "Upload/BuildList",
            contentType: "application/json; charset=utf-8",
            type: 'Post',
            dataType: 'json',
            data: JSON.stringify({ 'files': fileList })
        }).done(function (result) {
            var f = [];
            $.each(result.data, function (key, item) {
                f.push(item.A + "|" + item.B + "|" + item.C + "|" + item.D + "|" + item.E + "|" + item.F + "|" + item.G + "|" + item.H + "|" + item.I + "|" + item.J + "|" + item.K);
            });
            fileModel.set("tbs", f);
            rebatesModel.get("rebate").setTBSList(f);
            toastr.success(f.length + " items in uploaded file.");
            deferred.resolve();
        }).fail(function (error) {
            toastr.error(error.statusText);
            deferred.reject();
        });
        return deferred.promise();
    },
    ProcessTBPFiles: function (files) {
        fileModel.set("processTBPComplete", false);
        loader.show();
        fileModel._processTBPFiles(files).done(function () {
            fileModel.set("processTBPComplete", true);
            loader.hide();
        }).fail(function () {
            loader.hide();
        });
    },
    _processTBPFiles: function (files) {
        var deferred = $.Deferred(),
            fileList = [];
        $(files).each(function (key, item) {
            fileList.push(item.name);
        });
        $.ajax({
            url: "Upload/BuildList",
            contentType: "application/json; charset=utf-8",
            type: 'Post',
            dataType: 'json',
            data: JSON.stringify({ 'files': fileList })
        }).done(function (result) {
            var f = [];
            $.each(result.data, function (key, item) {
                f.push(item.A + "|" + item.B + "|" + item.C + "|" + item.D + "|" + item.E + "|" + item.F + "|" + item.G + "|" + item.H + "|" + item.I + "|" + item.J + "|" + item.K);
            });
            fileModel.set("tbp", f);
            rebatesModel.get("rebate").setTBPList(f);
            toastr.success(f.length + " items in uploaded file.");
            deferred.resolve();
        }).fail(function (error) {
            toastr.error(error.statusText);
            deferred.reject();
        });
        return deferred.promise();
    }
});