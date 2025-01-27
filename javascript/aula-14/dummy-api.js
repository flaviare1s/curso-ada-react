async function getUsers() {
  try {
    const response = await fetch('https://dummyapi.io/data/v1/user?created=1', {
      headers: {
        "app-id": "63f77cc1b7f489f0351b30f"
      }
    })
    const users = await response.json()
    console.log(users)
  } catch(err) {
    console.log(err)
  }
}

getUsers()

async function getUser() {
  try {
    const response = await fetch('https://dummyapi.io/data/v1/user/63f77cc1b7f489f0351b30d', {
      headers: {
        "app-id": "63f77cc1b7f489f0351b30f"
      }
    })
    const user = await response.json()
    console.log(user)
  } catch(err) {
    console.log(err)
  }
}

getUser()

async function createUser() {
  const userData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'jdoe@example.com',
  }

  try {
    await fetch('https://dummyapi.io/data/v1/user/create', {
    method: 'POST',
    headers: {
      'app-id': '63f77cc1b7f489f0351b30f',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
  }); 
  } catch(err) {
    console.log(err)
  }
}

createUser()

async function deleteUser() {
  try {
    await fetch('https://dummyapi.io/data/v1/user/63f77cc1b7f489f0351b30d', {
      method: 'DELETE',
      headers: {
        "app-id": "63f77cc1b7f489f0351b30f"
      }
    })
  } catch(err) {
    console.log(err)
  }
}

deleteUser()
