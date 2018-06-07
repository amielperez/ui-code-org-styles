var plainJsUtils = {};
(function(module) {
    module.createElem = function (type) {
        return document.createElement(type);
    }
    
    module.addClass = function (el, className) {
        if (el.classList) el.classList.add(className);
        else if (!hasClass(el, className)) el.className += ' ' + className;
    }
    
    module.addTextToElem = function (elem, text) {
        elem.appendChild(document.createTextNode(text));
    }
    

}(plainJsUtils));
