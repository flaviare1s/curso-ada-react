// Utility Types (permite criar novos tipos a partir de tipos já existentes)

type Carro = {
  marca: string;
  modelo: string;
  ano?: number;
  placa: string;
}


// 1. Partial (parcial): permite que um objeto seja parcialmente preenchido, ou seja, todos os parâmetros se tornam opcionais.

type CarroPartial = Partial<Carro>;

const outraPessoa: CarroPartial = {
  placa: 'ABC-1234',
}

// 2. Required (obrigatório): permite que um objeto seja obrigatoriamente preenchido, ou seja, todos os parâmetros se tornam obrigatórios.

type CarroRequired = Required<Carro>;

// 3. Pick (escolha): permite que um objeto seja escolhido de acordo com os parâmetros informados.

type CarroPicked = Pick<Carro, 'marca' | 'modelo'>;

// 4. Omit (omitir): permite que um objeto seja omitido de acordo com os parâmetros informados.

type CarroOmit = Omit<Carro, 'ano'>;

// 5. Exclude (excluir): permite que um tipo seja excluido de acordo com os parâmetros informados.

type CarroExclude = Exclude<Carro, 'ano'>;

// 6. Record

type Carros = Record<string, Carro>;

const carros: Carros = {
  'Carro 1': {
    marca: 'Fiat',
    modelo: 'Uno',
    placa: 'ABC-1234',
  },
  'Carro 2': {
    marca: 'Honda',
    modelo: 'Civic',
    placa: 'DEF-5678',
  },
}

console.log(carros);
