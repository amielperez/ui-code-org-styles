
var photos = {};
(function (module) {
    module.PhotoCard = function (photoElem, captionElem) {
        var elem = plainJsUtils.createElem('div');
        plainJsUtils.addClass(elem, 'photo-card');
        elem.appendChild(photoElem);
        elem.appendChild(captionElem);
        return elem;
    }
    
    module.Photo = function (imgSrc) {
        var elem = plainJsUtils.createElem('div');
        var img = plainJsUtils.createElem('img');
        plainJsUtils.addClass(elem, 'photo');
        elem.appendChild(img);
        img.src = imgSrc;
        return elem;
    }
    
    module.Caption = function (text) {
        var elem = plainJsUtils.createElem('div');
        plainJsUtils.addClass(elem, 'caption');
        plainJsUtils.addTextToElem(elem, text);
        return elem;
    }
}(photos));

