var isIE11 = !!navigator.userAgent.match(/Trident/g)

function isIEWithCanvas () {
  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    if (parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10) > 8) {
      return true
    } else {
      console.error('Your browser do not support canvas blur.')
    }
  }
}

export var blurExcutable = isIE11 || isIEWithCanvas()
