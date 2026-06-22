// let é uma forma d eatribuir valor, e poder modificar depois
// const é uma constante, que pode atribuir um valor, mas não pode ser modificada depois
// Exemplo de Let
let nome = 'João';
console.log(nome);

if (nome === 'João') {
    let nome = 'Maria';
    console.log(nome);
}


function logName() {
    const name = 'Carlos';
    console.log(name);
}

const name = 'Ana';
logName();
console.log(name);


// arrow function é uma forma mais curta de escrever funções, e tem uma sintaxe mais simples

const sum = function (a, b) {
    return a + b;
}

// uma function padrão, que pode ser chamada em qualquer lugar do código

const sumArrow = (a, b) => a + b;
// uma arrow function, que é mais curta e tem uma sintaxe mais simples

console.log(sum(2, 3));
console.log(sumArrow(2, 3));

const greeting = (name) => {
    if (name) {
        return `Olá, ${name}!`;
    } else {
        return 'Olá, sem nome';
    }
};
// uma função de saudação, que recebe um nome como parâmetro e retorna uma mensagem de saudação. Se o nome não for fornecido, retorna uma mensagem padrão.

console.log(greeting('João'));
console.log(greeting());

const user = {
    name: "Alice",
    sayUserName() {
        setTimeout(function () {
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 1000)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 2000)
    }
}

/* user.sayUserName();
user.sayUserNameArrow(); */

// Filter

// É um método de array para filtrar dados.


const arr = [1, 2, 3, 4, 5];

const highNumber = arr.filter((n) => {
    if (n >= 3) {
        return n;
    }
})
console.log(highNumber);
// esse metodo do filter, somente para filter os números maiores ou iguais a 3

const users = [
    { name: 'João', available: true },
    { name: 'Maria', available: false },
    { name: 'Carlos', available: true },
    { name: 'Ana', available: false }
]

const availableUsers = users.filter((user) => user.available);
console.log(availableUsers);
// esse metodo do filter, somente para filter os usuários disponíveis, ou seja, aqueles que tem a propriedade available como true.

//map É um método de array para transformar os dados.

const products = [
    { name: 'Camisa', price: 29.99, category: 'Roupas' },
    { name: 'Calça', price: 59.99, category: 'Roupas' },
    { name: 'Sapato', price: 99.99, category: 'Calçados' },
    { name: 'Fogão', price: 99.99, category: 'Eletrodomésticos' },
    { name: 'Geladeira', price: 99.99, category: 'Eletrodomésticos' }
];
// criando um array de produtos, onde cada produto é um objeto com as propriedades name, price e category.
products.map((product) => {
    if(product.category === 'Roupas') {
        product.onSale = true;
    }
});
// utilizando o método map para percorrer o array de produtos, e adicionar a propriedade onSale como true para os produtos que pertencem à categoria 'Roupas'.
console.log(products);