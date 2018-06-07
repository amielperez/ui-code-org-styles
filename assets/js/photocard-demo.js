
var photos = (function () {
    function PhotoCard(photoElem, captionElem) {
        var elem = plainJsUtils.createElem('div');
        plainJsUtils.addClass(elem, 'photo-card');
        elem.appendChild(photoElem);
        elem.appendChild(captionElem);
        return elem;
    }
    
    function Photo(imgSrc) {
        var elem = plainJsUtils.createElem('div');
        var img = plainJsUtils.createElem('img');
        plainJsUtils.addClass(elem, 'photo');
        elem.appendChild(img);
        img.src = imgSrc;
        return elem;
    }
    
    function Caption(text) {
        var elem = plainJsUtils.createElem('div');
        plainJsUtils.addClass(elem, 'caption');
        plainJsUtils.addTextToElem(elem, text);
        return elem;
    }

    return {
        PhotoCard: PhotoCard,
        Photo: Photo,
        Caption: Caption,
    }
}());

