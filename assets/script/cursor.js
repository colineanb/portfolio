// cursor


const cursor = document.querySelector('.cursor')
const cursorAround = document.querySelector('.cursor-around')

window.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px'
  cursor.style.top = e.clientY + 'px'

  cursorAround.style.left = e.clientX + 'px'
  cursorAround.style.top = e.clientY + 'px'
  
})

window.addEventListener('mousedown', (e) => {
  cursor.classList.add('is-hold')
  cursorAround.classList.add('is-hold')
})

window.addEventListener('mouseup', (e) => {
  cursor.classList.remove('is-hold')
  cursorAround.classList.remove('is-hold')
})
