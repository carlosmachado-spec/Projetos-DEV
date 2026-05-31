// Constante criada para mudar a bolinha azul de lugar
document.addEventListener("click", (evento) => {
    const btn = evento.target.closest("#imagePicker li");
    if (btn) {
        // Aqui estamos removendo a class (selected)
        const removeColor = document.querySelectorAll("#imagePicker li .color")
        removeColor.forEach((ball) => {
            ball.classList.remove("selected")
        })
        //Adicionado um class para mudar a bolinha de lugar
        const changeColor = btn.querySelector(".color")
        if (changeColor) {
            changeColor.classList.add("selected")
        }
    }

    // constante criada para mudar a imagem do celular
    const image = document.getElementById("productImage")


    if (image) {
        const corSelected = btn.id;
        image.classList.add("changing");

        setTimeout(() => {
            image.src = `../img/${corSelected}.png`
            image.onload = () =>{
                image.classList.remove("changing")
            }
        },250)
    }
})
