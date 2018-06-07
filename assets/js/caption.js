photos.Caption = (function () {
    return function (text) {
        var elem = plainJsUtils.createElem('div');
        plainJsUtils.addClass(elem, 'caption');
        plainJsUtils.addTextToElem(elem, text);
        return elem;
    }
}());