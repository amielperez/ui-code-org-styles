photos.Photo = (function() {
    return function (imgSrc) {
        var elem = plainJsUtils.createElem('div');
        var img = plainJsUtils.createElem('img');
        plainJsUtils.addClass(elem, 'photo');
        elem.appendChild(img);
        img.src = imgSrc;
        return elem;
    }
}());