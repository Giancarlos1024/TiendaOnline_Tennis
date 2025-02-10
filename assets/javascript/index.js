function toggleMenu() {
    var menu = document.querySelector('.navegacionPaginas');
    menu.classList.toggle('mostrar');
}


/* CARRUSEL */
document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.getElementById("raqueta-titulo");
    const descripcion = document.getElementById("raqueta-descripcion");
    const carrusel = document.querySelector(".groupRaquetas-carrusel");

    const btnPrev = document.querySelector(".antescarrusel");
    const btnNext = document.querySelector(".siguientecarrusel");
    const indicadores = document.querySelectorAll(".op-carrusel");

    const slider = document.querySelector(".groupRaquetas-slider");
    const slides = slider.children;

    let index = 0;

    const raquetas = [
        {
            titulo: "Nuestras Raquetas",
            descripcion: "Conoce nuestras raquetas y aprende a jugar Tennis como un profesional.",
            fondo: "assets/img/ball-color-court-1405355.webp"
        },
        {
            titulo: "Raqueta Intermedia",
            descripcion: "Perfecta para quienes están mejorando su juego.",
            fondo: "assets/img/ball-color-court-1405355.webp"
        },
        {
            titulo: "Raqueta Principiante",
            descripcion: "Ideal para quienes están empezando en el tenis.",
            fondo: "assets/img/ball-color-court-1405355.webp"
        },
        {
            titulo: "Raqueta de Competición",
            descripcion: "Diseñada para torneos y alto rendimiento.",
            fondo: "assets/img/ball-color-court-1405355.webp"
        }
    ];

    function actualizarCarrusel() {
        titulo.textContent = raquetas[index].titulo;
        descripcion.textContent = raquetas[index].descripcion;
        carrusel.style.backgroundImage = `url('${raquetas[index].fondo}')`;

        // Mostrar 3 imágenes del slider en función de la opción seleccionada
        const startIndex = index * 3; // Calcular el índice inicial
        Array.from(slides).forEach((slide, i) => {
            if (i >= startIndex && i < startIndex + 3) {
                slide.style.display = "block"; // Mostrar las 3 imágenes
            } else {
                slide.style.display = "none"; // Ocultar las demás
            }
        });

        // Actualizar los indicadores del carrusel
        indicadores.forEach((btn, i) => {
            btn.style.backgroundColor = i === index ? "white" : "rgba(247, 240, 240, 0.59)";
        });

        actualizarBotones();
    }

    function actualizarBotones() {
        if (index === 0) {
            btnPrev.style.background = "transparent";
            btnPrev.style.border = "2px solid var(--white)";
            btnNext.style.background = "var(--sickly-yellow)";
            btnNext.style.border = "none";
        } else if (index === raquetas.length - 1) {
            btnNext.style.background = "transparent";
            btnNext.style.border = "2px solid var(--white)";
            btnPrev.style.background = "var(--sickly-yellow)";
            btnPrev.style.border = "none";
        } else {
            btnPrev.style.background = "var(--sickly-yellow)";
            btnNext.style.background = "var(--sickly-yellow)";
            btnPrev.style.border = "none";
            btnNext.style.border = "none";
        }
    }

    btnNext.addEventListener("click", () => {
        // Si llegamos al último índice, volvemos al primer elemento
        if (index === raquetas.length - 1) {
            index = 0;
        } else {
            index++;
        }
        actualizarCarrusel();
    });

    btnPrev.addEventListener("click", () => {
        // Si estamos en el primer índice, volvemos al último elemento
        if (index === 0) {
            index = raquetas.length - 1;
        } else {
            index--;
        }
        actualizarCarrusel();
    });

    indicadores.forEach((btn) => {
        btn.addEventListener("click", () => {
            index = parseInt(btn.getAttribute("data-index"));
            actualizarCarrusel();
        });
    });

    // Inicializar el carrusel
    actualizarCarrusel();
});
