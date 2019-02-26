import { IEBlurPoly } from './IEBlurPoly.js'

const elShouldBeBlur = Array.from(document.querySelectorAll('.wrapper'))

elShouldBeBlur.forEach((item) => {
  IEBlurPoly(item)
})
