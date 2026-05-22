document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".registerForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Limpar Mensagens de erro anteriores
    document
      .querySelectorAll(".errorMessage")
      .forEach((el) => (el.textContent = ""));
    const formData = new FormData(form);
    const dadosObject = Object.fromEntries(formData.entries());
    let hasError = false;
    // Validação do nome
    if (!dadosObject.name || dadosObject.name.trim() === " ") {
      document.getElementById("errorName").textContent =
        "Poderia nos dizer o seu nome completo ?";
      hasError = true;
    }
    // Validação de senha
    if (dadosObject.password !== dadosObject.repeatPassword) {
      document.getElementById("errorPassowrd").textContent =
        "Opa, as senhas não ficaram iguais. Tenta de novo ?";
      hasError = true;
    }

    // validacao do CPF
    if (!validateCPF(dadosObject.cpf)) {
      document.getElementById("errorCPF").textContent = "CPF Invalido";
      hasError = true;
    }

    // Aqui se algo estiver errado ele não envia.

    if (hasError) {
      return;
    }

    const dadosJson = JSON.stringify(dadosObject);

    console.log("JSON pronto para o Postman");
    console.log(dadosJson);
  });
});
