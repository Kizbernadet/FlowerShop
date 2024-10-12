// variable qui permet de selectionner la div de classe .menu-button
const menu_button = document.querySelector(".menu-button");

// cette ligne permet de détecter le clic sur la div burger-button
menu_button.addEventListener("click", () => {
    menu_button.classList.toggle("active")
} );
