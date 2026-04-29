export const feirantesMock = [
  {
    id: 1,
    nome: "João das Couves",
    cpf_cnpj: "123.456.789-00",
    email: "joao@couves.com",
    localizacao_banca: "Corredor A, Banca 12"
  },
  {
    id: 2,
    nome: "Maria das Frutas",
    cpf_cnpj: "987.654.321-11",
    email: "maria@frutas.com",
    localizacao_banca: "Corredor B, Banca 05"
  }
];

export const produtosMock = [
  {
    id: 1,
    nome: "Cenoura Orgânica",
    preco: 4.50,
    quantidade: 50,
    disponivel_xepa: true,
    feirante_id: 1
  },
  {
    id: 2,
    nome: "Maçã Fuji",
    preco: 8.00,
    quantidade: 120,
    disponivel_xepa: false,
    feirante_id: 2
  }
];