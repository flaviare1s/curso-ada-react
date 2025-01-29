// Selecionar elementos utilizando o document:

// 1. Pelo nome da tag
const tag = document.getElementsByTagName('p')[1]

console.log(tag)

// 2. Pela classe

const paragrafo = document.getElementsByClassName('paragrafo')

console.log(paragrafo)

// 3. Pelo nome

const email = document.getElementsByName('email')[0]

console.log(email)

// 4. Pelo ID

const title = document.getElementById('title')

console.log(title)

// 5. QuerySelector

const paragrafo2 = document.querySelector('.paragrafo')

console.log(paragrafo2)

// 6. QuerySelectorAll

const paragrafos = document.querySelectorAll('.paragrafo')

console.log(paragrafos)

console.clear();

// Acessando / alterando o conteúdo:

const primeiroParagrafo = document.querySelector('.primeiro')

primeiroParagrafo.textContent = 'Outro parágrafo'

primeiroParagrafo.innerHTML = 'Outro <strong>parágrafo</strong>'

console.log(primeiroParagrafo.textContent)
console.log(primeiroParagrafo.innerHTML);

email.value = 'jdoe@example.com'

console.log(email.value);

// Criando elementos na página HTML:

const terceiroItem = document.createElement('li')

terceiroItem.textContent = 'Terceiro item'

const lista = document.querySelector('ul')
const lis = document.querySelectorAll('li')

// lista.appendChild(terceiroItem) Adiciona o item no final de um elemento

lista.insertBefore(terceiroItem, lis[2]); // Adiciona o item no meio de um elemento

lista.removeChild(lis[0]); // Remove o item no meio de um elemento
