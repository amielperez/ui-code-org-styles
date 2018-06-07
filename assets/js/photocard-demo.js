

const PhotoCard = function (photoElem, captionElem) {
    var elem = createElem('div');
    addClass(elem, 'photo-card');
    elem.appendChild(photoElem);
    elem.appendChild(captionElem);
    return elem;
}

const Photo = function (imgSrc) {
    var elem = createElem('div');
    var img = createElem('img');
    addClass(elem, 'photo');
    elem.appendChild(img);
    img.src = imgSrc;
    return elem;
}

const Caption = function (text) {
    var elem = createElem('div');
    addClass(elem, 'caption');
    addTextToElem(elem, text);
    return elem;
}