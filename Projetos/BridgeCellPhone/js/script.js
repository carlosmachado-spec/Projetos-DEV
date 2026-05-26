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

loadcomponents("nav-placeholder", "/Projetos/BridgeCellPhone/html/navbar.html");