// Object Types:

//interface
//type

// Interface:
interface Person {
  nome: string;
  idade: number;
  endereco?: { // opcional
    rua: string;
    numero: number;
  }
}

const individuo: Person = {
  nome: 'Walisson',
  idade: 30,
  endereco: {
    rua: 'Rua A',
    numero: 123,
  },
}

const individuo2: Person = {
  nome: 'Ana',
  idade: 25,
}

individuo2.endereco = {
  rua: 'Rua B',
  numero: 456,
}

console.log(individuo2);

// Type:
type Animal = {
  nome: string;
  idade: number;
  raca?: string;
}
