// 01 - Métodos

const animal = {
  nome: "Atena",
  latir: function () {
    console.log("Au au");
  },
};

animal.latir();

// Metodo "this"

const pessoa = {
  nome: "Matheus",

  getNome: function () {
    return this.nome;
  },
  setNome: function (newName) {
    this.nome = newName;
  },
};

console.log(pessoa.nome);

pessoa.setNome("Ferdinand");

console.log(pessoa.getNome());
