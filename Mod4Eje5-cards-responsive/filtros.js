// Seleccionamos los botones de filtro y las cards
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

// Recorremos cada botón
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // 1. Cambiar el botón activo visualmente
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        // 2. Obtener el filtro seleccionado (all, web, mobile, design)
        const filtro = button.dataset.filter; // data-filter="web", etc.

        // 3. Mostrar/ocultar cards según su data-category
        cards.forEach((card) => {
            const categoria = card.dataset.category; // data-category="web", etc.

            if (filtro === "all" || categoria === filtro) {
                // Mostrar la card
                card.classList.remove("hidden-card");
            } else {
                // Ocultar la card
                card.classList.add("hidden-card");
            }
        });
    });
});
