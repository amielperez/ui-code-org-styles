photos.PhotoCard = (function () {
    return function (photoElem, captionElem) {
        var elem = plainJsUtils.createElem('div');
        plainJsUtils.addClass(elem, 'photo-card');
        elem.appendChild(photoElem);
        elem.appendChild(captionElem);
        return elem;
    }
}());    