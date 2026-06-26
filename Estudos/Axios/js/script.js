// 1 - Instalção Axios
/* console.log(axios); */

// 2 - GET
// Fazendo uma requisição GET para a API JSONPlaceholder para obter os usuários
const getDATA = async () => {
    try {
        const response = await postFetch.get(
            '/users',
            // - Definindo Headers
            {
                headers: {
                    "Content-Type": "application/json",
                    customHeader: "Meu Header Personalizado"
                }

            }
        )
        console.log(response)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
getDATA()

/* 3 - Imprimindo os dados na tela */
const container = document.querySelector('#userContainer');

const printData = async () => {
    const data = await getDATA();

    data.forEach((user) => {
        // criando a div para cada usuário
        const div = document.createElement('div');

        // buscanodo o nome do usuário e adicionando na div
        const nameElement = document.createElement('h2');
        nameElement.textContent = user.name;
        div.appendChild(nameElement);
        container.appendChild(div);

        // buscando o email do usuário e adicionando na div
        const emailElement = document.createElement('p')
        emailElement.textContent = user.email;
        div.appendChild(emailElement);
        container.appendChild(div);
    })

}
printData()

// 4 - POST

// - Selecionando o formulário e os inputs
const form = document.querySelector('#postForm');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');

// - Adicionando o evento de submit no formulário
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // - Fazendo a requisição POST para a API JSONPlaceholder para criar um novo post
    postFetch.post('/posts', {
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1
    })
})  