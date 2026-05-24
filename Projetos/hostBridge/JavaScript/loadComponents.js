function loadComponents(placeholderId, filePath) {
  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Erro ao carregar os componentes ${filePath}: ${response.statusText}`
        );
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById(placeholderId).innerHTML = html;
    })
    .catch((error) => {
      console.error(error);
    });
}
loadComponents("nav-placeholder", "/Projetos/hostBridge/html/navbar.html");
loadComponents("banner-placeholder", "/Projetos/hostBridge/html/banner.html");
loadComponents("services-placeholder", "/Projetos/hostBridge/html/services.html");
loadComponents("pricing-placeholder", "/Projetos/hostBridge/html/pricing.html");
loadComponents("domain-placeholder", "/Projetos/hostBridge/html/domain.html");
loadComponents("contact-placeholder", "/Projetos/hostBridge/html/contact.html");
loadComponents("footer-placeholder", "/Projetos/hostBridge/html/footer.html");
