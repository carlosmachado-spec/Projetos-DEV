// Seleção de Elementos
const multipicationForm = document.getElementById('multiplicationForm');
const numberInput = document.getElementById('number');
const multiplicationInput = document.getElementById('multiplicator')
const multiplicationTable = document.getElementById('multiplicationOperations');
const multiplicationTitle = document.getElementById('multiplicationTitle').querySelector('span');

// Functions
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";
    for (i = 1; i <= multiplicatorNumber; i++){
        const result = number * i;
        const template = `
        <div class="row">
        <div class="operation"> ${number} x ${i} = </div>
        <div class="result"> ${result}</div>
        </div>`

        const parser = new DOMParser();

        const htmlTemplater = parser.parseFromString(template, 'text/html');

        const row = htmlTemplater.querySelector('.row');
        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.textContent = number;
}
// Eventos
multipicationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) {
        alert('Preencha os campos corretamente!');
        return;
    }

    createTable(multiplicationNumber, multiplicatorNumber);

})