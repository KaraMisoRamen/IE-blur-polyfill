import html2canvas from 'html2canvas'

export function renderToCanvas (el) {
  html2canvas(el).then((canvas) => {
      document.body.appendChild(canvas)
  })
}
