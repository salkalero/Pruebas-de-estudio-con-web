// scripts.js

document.addEventListener("DOMContentLoaded",() => {//Este bloque de código se ejecuta cuando el contenido del DOM ha sido completamente cargado y procesado. Esto asegura que el script no intente acceder a elementos del DOM que aún no existen cuando el script se ejecuta
    const burger = document.querySelector(".burger");//burger: Se refiere al icono de menú, que suele tener tres líneas horizontales (también conocido como "hamburger icon"). Se asume que en el HTML hay un elemento con la clase .burger.
    const ulNav = document.querySelector(".ulNav");//ulNav: Es el contenedor de los enlaces de navegación que se despliegan. Se asume que en el HTML hay un elemento con la clase .ulNav.

    burger.addEventListener("click",(e) => {//Este código agrega un evento click al ícono de menú (burger).
        ulNav.classList.toggle("active");//Alterna (añade o quita) la clase .active al contenedor de los enlaces de navegación (ulNav). Esto generalmente se usa para mostrar u ocultar el menú desplegable.
    })
    document.addEventListener("click",(e) => {//Este código agrega un evento click al documento completo.
        if (!ulNav.contains(e.target) && !burger.contains(e.target)) {//Comprueba si el clic se ha hecho fuera del menú desplegable (ulNav) y del ícono de menú (burger).
            ulNav.classList.remove("active");//Si el clic fue fuera del menú y del ícono de menú, se elimina la clase .active del menú (ulNav), lo que oculta el menú si estaba desplegado.
        }
    })
});
