function loadComponents(placeholderId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar os componentes ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(placeholderId).innerHTML = html;
        })
        .catch(error => {
            console.error(error);
        });
}
loadComponents("nav-placeholder", "../html/navbar.html");
loadComponents("banner-placeholder", "../html/banner.html");
loadComponents("services-placeholder", "../html/services.html");    
loadComponents("pricing-placeholder", "../html/pricing.html");
loadComponents("domain-placeholder", "../html/domain.html");
loadComponents("contact-placeholder", "../html/contact.html");  
