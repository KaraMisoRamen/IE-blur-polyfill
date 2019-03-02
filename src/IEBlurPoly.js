import * as StackBlur from 'stackblur-canvas'
import { trigger } from './utils/trigger'
import { renderToCanvas } from './utils/renderToCanvas'

export function IEBlurPoly (el) {
  if (!trigger) {
    renderToCanvas(el)
  }
}
