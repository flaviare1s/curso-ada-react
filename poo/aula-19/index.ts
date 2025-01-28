// POO - Programação Orientada a Objetos

interface IPessoa {
  nome: string;
  idade: number;
  altura: number;

  dormir: () => void;
}

// Classe: Abstração

class Pessoa implements IPessoa {
  // atributos (características)
  nome: string;
  idade: number;
  altura: number;
  private _cpf: string;

  // métodos (ações)

  // Método construtor
  constructor(nome: string, idade: number, altura: number, cpf: string) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this._cpf = cpf;
  }

  dormir() {
    console.log('Dormindo...😴');
  }

  // acessor: getter
  get cpf(): string {
    return this._cpf;
  }

  // acessor: setter
  set cpf(newCpf: string) {
    if (newCpf.length !== 14) {
      throw new Error('CPF inválido!');
    }
    this._cpf = newCpf;
  }
}

// Herança:
class Professor extends Pessoa {
  codigo: string;

  constructor(nome: string, idade: number, altura: number, cpf: string, codigo: string) {
    super(nome, idade, altura, cpf);
    this.codigo = codigo;
  }

  ensinar() {
    console.log('Estou ensinando...');
  }
}

// Criando um indivíduo (objeto) a partir da classe Pessoa
const pessoaUm = new Pessoa('Walisson', 30, 1.75, '123.456.789-00');
const pessoaDois = new Pessoa('Ana', 25, 1.55, '987.654.321-00');

console.log(pessoaUm.cpf);

pessoaUm.cpf = '123.456.789-00';

pessoaDois.dormir();

// Criando um indivíduo (objeto) a partir da classe Professor

const professor = new Professor('Mario', 30, 1.75, '123.456.789-00', '12345');

console.log(professor);
professor.ensinar();

// Polimorfismo

console.log(pessoaUm instanceof Pessoa);
