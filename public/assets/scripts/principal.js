//MENU HAMBURGUESA

// Selección de elementos
const menu = document.querySelector(".menu-horizontal");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

// Función para alternar la visibilidad del menú
function toggleMenu() {
  menu.classList.toggle("menu_opened");
  if (menu.classList.contains("menu_opened")) {
    openMenuBtn.style.display = "none"; // Oculta botón abrir
    closeMenuBtn.style.display = "block"; // Muestra botón cerrar
  } else {
    openMenuBtn.style.display = "block"; // Muestra botón abrir
    closeMenuBtn.style.display = "none"; // Oculta botón cerrar
  }
}

// Asignación de eventos de clic
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

//ajustar botones
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    menu.classList.remove("menu_opened");
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "none";
  } else {
    openMenuBtn.style.display = "block";
  }
});
