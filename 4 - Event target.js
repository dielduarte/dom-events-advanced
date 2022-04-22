// --------------------------------------------------------
// ELEMENT

const button = document.querySelector('.button')

// escutando um evento
button.addEventListener('click', () => {
  // faça algo aqui
})

// enviando um evento
button.dispatchEvent(new MouseEvent('click'))

// --------------------------------------------------------
// Window/Document

window.addEventListener('click', (e) => e.preventDefault())

// --------------------------------------------------------
// FileReader API

const reader = new FileReader();

reader.addEventListener('load', (e) => {
  // faça algo com o arquivo lido
})

reader.readAsText('file')