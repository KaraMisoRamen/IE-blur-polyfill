import html2canvas from 'html2canvas'

export function renderToCanvas (el) {
  return new Promise ((resolve, reject) => {
    html2canvas(el, {
      useCORS: true,
      allowTaint: true,
    }).then((canvas) => {
      el.innerHTML = ''
      canvas.style.width = '100%'
      canvas.style.height = '100%'
      el.appendChild(canvas)

      resolve()
    })
  })
}
