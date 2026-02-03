// 2 - Criando um objeto
//Aqui estou criando a function para escutar o envio do botão
function criarCarro() {
  const marcaDigitada = document.getElementById("marca").value;
  const kmDigitado = document.getElementById("km").value;
  const anoDigitado = document.getElementById("ano").value;
  // Aqui estou criando objeto carro que foi recebido do botãoo
  const car = {
    marca: marcaDigitada,
    km: Number(kmDigitado),
    ano: Number(anoDigitado),
  };

  alert(`Parabéns o seu ${car.marca} foi criado com sucesso`);
  console.log(car);
}
