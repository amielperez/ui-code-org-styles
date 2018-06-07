var plainJsUtils = (function() {
    function createElem(type) {
        return document.createElement(type);
    }
    
    function addClass(el, className) {
        if (el.classList) el.classList.add(className);
        else if (!hasClass(el, className)) el.className += ' ' + className;
    }
    
    function addTextToElem(elem, text) {
        elem.appendChild(document.createTextNode(text));
    }

    return {
        createElem: createElem,
        addClass: addClass,
        addTextToElem: addTextToElem,
    }
}());
