import * as StackBlur from 'stackblur-canvas'
import { trigger } from './utils/trigger'
import { renderToCanvas } from './utils/renderToCanvas'

export function IEBlurPoly (el, radius) {
  if (!trigger) {
    renderToCanvas(el).
      then((canvas) => {
        StackBlur.canvasRGBA(
          canvas,
          0,
          0,
          canvas.clientWidth * window.devicePixelRatio,
          canvas.clientHeight * window.devicePixelRatio,
          radius
        )
      })
  }
}
