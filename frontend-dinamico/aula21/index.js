const btn = document.querySelector('#btn');
const title = document.querySelector('h1');

btn.addEventListener('mouseenter', () => {
  document.body.style.backgroundColor = 'red'
  contador.style.color = 'white'
  title.style.color = 'white'
})

btn.addEventListener('mouseout', (e) => {
  document.body.style.backgroundColor = 'white';
  contador.style.color = 'black'
  title.style.color = 'black'
  console.log(e)
});

const diminuirBtn = document.querySelector('#diminuir');
const aumentarBtn = document.querySelector('#aumentar');
const contador = document.querySelector('.contador');

diminuirBtn.addEventListener('click', () => {
  const valorAtual = Number(contador.textContent);

  contador.innerHTML = valorAtual - 1;
})

aumentarBtn.addEventListener('click', () => {
  const valorAtual = Number(contador.textContent);

  contador.innerHTML = valorAtual + 1;
})

const input = document.querySelector('#input');

input.addEventListener('input', () => {
  console.log(input  .value)
});

diminuirBtn.classList.add('btn');
aumentarBtn.classList.add('btn');

// Mudar Tema

const themeButton = document.querySelector('#theme');
let darkTheme;

// Definindo uma função que será executada ao carregar a página
window.onload = () => {
  const isDarkThemeStorage = localStorage.getItem('isDarkTheme');

  darkTheme = isDarkThemeStorage === 'true';

   if (darkTheme) {
     document.body.style.backgroundColor = 'black';
     title.style.color = 'white';
     contador.style.color = 'white';
   } else {
     document.body.style.backgroundColor = 'white';
     title.style.color = 'black';
     contador.style.color = 'black';
   }
};

themeButton.addEventListener('click', () => {
  darkTheme = !darkTheme;

  localStorage.setItem('isDarkTheme', darkTheme);

  if (darkTheme) {
    document.body.style.backgroundColor = 'black';
    title.style.color = 'white';
    contador.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    title.style.color = 'black';
    contador.style.color = 'black';
  }
})
