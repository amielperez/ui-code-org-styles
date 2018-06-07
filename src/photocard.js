import plainJsUtils from './plainjs-utils';

function PhotoCard(photoElem, captionElem) {
    var elem = plainJsUtils.createElem('div');
    plainJsUtils.addClass(elem, 'photo-card');
    elem.appendChild(photoElem);
    elem.appendChild(captionElem);
    return elem;
}

export default PhotoCard;