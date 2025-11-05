console.log("Script year.js carregado.");

// Função para atualizar o ano quando o footer existir
function updateYearWhenReady() {
  const footer = document.querySelector("#footer-placeholder footer");
  const yearSpan = document.getElementById("year");

  if (footer && yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
    console.log("Ano atualizado:", currentYear);
  } else {
    // Se o footer ainda não foi carregado, tenta de novo em 300ms
    console.log("Footer ainda não carregado... tentando novamente.");
    setTimeout(updateYearWhenReady, 300);
  }
}

// Inicia a verificação
updateYearWhenReady();
