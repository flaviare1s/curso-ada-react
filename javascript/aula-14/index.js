// Fetch API

// Utilizando then/catch:

fetch('https://viacep.com.br/ws/01001000/json/').then((response) => {
  response.json().then((data) => {
    console.log(data)
  })
}).catch((err) => {
  console.log(err)
})
