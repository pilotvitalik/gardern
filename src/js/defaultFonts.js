let nameBrowser = document.querySelector('#nameBrowser');
let stringUserAgent = window.clientInformation.vendor;
if (stringUserAgent === 'Google Inc.') {
setDefaultFonts();
}

function setDefaultFonts() {
    var head = $('head')[0];
    var insertBefore = head.insertBefore;
    head.insertBefore = function (newElement, referenceElement) {
        // intercept font download
        if (newElement.href
            && newElement.href.indexOf('https://fonts.googleapis.com/css?family=Roboto') === 0) {
            return;
        }
        // intercept style elements for IEs
        if (newElement.tagName.toLowerCase() === 'style'
            && newElement.styleSheet
            && newElement.styleSheet.cssText
            && newElement.styleSheet.cssText.replace('\r\n', '').indexOf('.gm-style') === 0) {
            return;
        }
        // intercept style elements for other browsers
        if (newElement.tagName.toLowerCase() === 'style'
            && newElement.innerHTML
            && newElement.innerHTML.replace('\r\n', '').indexOf('.gm-style') === 0) {
            return;
        }
        insertBefore.call(head, newElement, referenceElement);
    }; 
}
