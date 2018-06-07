import plainJsUtils from './plainjs-utils';

function Caption(text) {
    var elem = plainJsUtils.createElem('div');
    plainJsUtils.addClass(elem, 'caption');
    plainJsUtils.addTextToElem(elem, text);
    return elem;
}

export default Caption;
