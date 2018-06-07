const createElem = function (type) {
    return document.createElement(type);
}

const addClass = function (el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += ' ' + className;
}

const addTextToElem = function (elem, text) {
    elem.appendChild(document.createTextNode(text));
}