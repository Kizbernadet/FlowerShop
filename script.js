// Variables qui permettent de sélectionner les éléments
const menu_button = document.querySelector(".menu-button");
const menu_mobile = document.querySelector(".navbar");

// Gestion du clic sur le bouton burger
menu_button.addEventListener("click", () => {
    // Ajout/Retrait de la classe 'active' pour le bouton burger
    menu_button.classList.toggle("active");

    // Ajout/Retrait de la classe 'active' pour le menu mobile
    menu_mobile.classList.toggle("active");
});
