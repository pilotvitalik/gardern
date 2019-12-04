export function stopWheel(elem, handler) {
  if (elem.addEventListener) {
    if ('onwheel' in document) {
      elem.addEventListener("wheel", handler);
    } else if ('onmousewheel' in document) {
      elem.addEventListener("mousewheel", handler);
    } else {
      elem.addEventListener("MozMousePixelScroll", handler);
    }
  } else {
    elem.attachEvent("onmousewheel", handler);
  }
}

export function stopTouch(e) {
  e.preventDefault();
}