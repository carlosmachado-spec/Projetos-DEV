// selecionando por tag

const listItens = document.getElementsByTagName('li');

console.log(listItens);

// selecionando por id

const title = document.getElementById('title');

console.log(title);

// selecionando por classe

const product = document.getElementsByClassName('product')

console.log(product);

// selecionando por querySelector

const footer = document.querySelector('footer');
console.log(footer);

//6 - insertBefore
// Criando um novo elemento <p>
// Mas ele ainda esta flutuando na memória, ele não esta no DOM
const p = document.createElement('p');

// Para inserir o elemento no DOM, precisamos selecionar um elemento pai e usar o método insertBefore
const header = title.parentElement

// O método insertBefore recebe dois argumentos: o elemento que queremos inserir e o elemento de referência (antes do qual o novo elemento será inserido)
header.insertBefore(p, title);

// Agora o elemento <p> está no DOM, mas ainda não tem conteúdo, então foi adicionado um texto a ele.
p.innerText = 'Olá, eu sou um parágrafo criado com JavaScript!';

//7 - appendChild
// Aqui estou acessando a lisa nav ul, para criar um novo li
const navLinks = document.querySelector("nav ul");
//aqui é criado um novo li e um novo a
const li = document.createElement("li");
const link = document.createElement("a");

// Aqui é adicionado o texto ao link e o href
link.href = "#";
link.innerText = "Criado por JS";

// Aqui é adicionado o link ao li e o li à nav
navLinks.appendChild(li);
li.appendChild(link);

//8 - ReplaceChild

// aqui esta sendo criado o elemento h2 para substituir a onde eu quiser
const h2 = document.createElement('h2');

// Foi adicionado um texto ao h2 criado acima
h2.textContent = 'Subtitulo criado com JavaScript';

// Aqui é onde o h2 vai ser inserido, ou seja, no lugar do title
header.replaceChild(h2, title);