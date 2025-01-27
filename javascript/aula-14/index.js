// Fetch API

// Utilizando then/catch:

fetch('https://viacep.com.br/ws/01001000/json/').then((response) => {
  response.json().then((data) => {
    console.log(data)
  })
}).catch((err) => {
  console.log(err)
})

// Utilizando async/await:

async function buscaCEP() {
  try {
    const response = await fetch(`https://viacep.com.br/ws/01001000/json/`)
  const data = await response.json()
  console.log(data)
  } catch (err) {
    console.log(err)
  } finally {
    console.log('Terminou a requisição!')
  }
}

buscaCEP('01001000')
