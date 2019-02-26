import * as StackBlur from 'stackblur-canvas'
import { shouldBeTrigger } from './utils/_should_be_trigger'

export function IEBlurPoly (el) {
  if (!shouldBeTrigger) {
    console.log(StackBlur)
  }
}
