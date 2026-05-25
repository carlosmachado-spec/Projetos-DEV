const container = document.querySelector('#container');
const qrCodeBtn = document.querySelector('#qrForm button');
const qrCodeInput = document.querySelector('#qrForm input');
const qrCodeImg = document.querySelector('#qrCode img');
//Eventos
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;
    if (!qrCodeInputValue) return;

    qrCodeBtn.innerText = 'Estamos gerando o seu QR Code...'

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener('load', () => {
        container.classList.add("active")
        qrCodeBtn.innerText = 'QR Code Criado com Sucesso!'
    })
}
qrCodeBtn.addEventListener('click', () => {
    generateQrCode();
})  
qrCodeBtn.addEventListener('keydown', (e) => {
    if(e.code === "Enter" ){
        generateQrCode();
    }
})  


//Limpar área do QR Code

qrCodeInput.addEventListener('keyup', () => {
    if(!qrCodeInput.value){
        container.classList.remove("active")
        qrCodeBtn.innerText = 'Gerar QR Code'    }
})