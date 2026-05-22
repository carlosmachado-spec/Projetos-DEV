// 01 - Métodos

/* const animal = {
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

console.log(pessoa.getNome()); */

// Object

const animal = {
  comer: function () {
    console.log("Cachorro comendo");
  },
};

const cachorro = Object.create(animal);
cachorro.latir = function () {
  console.log("Au Au");
};

cachorro.comer();
cachorro.latir();
