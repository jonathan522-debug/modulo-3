/* ===============================================
   NAVBAR STICKY - JAVASCRIPT
   ===============================================
   Funcionalidades:
   - Detectar cuando el navbar está "pegado" (scroll)
   - Añadir clase .scrolled para cambiar estilos
   - Menú hamburguesa responsive
   - Mostrar/ocultar botón "Volver arriba"
   - Smooth scroll entre secciones
   =============================================== */

// Elementos
const navbar = document.getElementById('navbar');
const btnTop = document.getElementById('btnTop');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// ===== NAVBAR SCROLLED =====

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Añadir clase .scrolled cuando scrolleamos hacia abajo
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Mostrar botón "Volver arriba" después de 300px
    if (currentScroll > 300) {
        btnTop.classList.add('visible');
    } else {
        btnTop.classList.remove('visible');
    }
});

// ===== VOLVER ARRIBA =====

btnTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== MENÚ HAMBURGUESA =====

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Cerrar menú al hacer click en enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Cerrar menú al hacer click fuera
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ===== HIGHLIGHT ACTIVE SECTION =====

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== SMOOTH SCROLL EXTRA (por si el navegador es viejo) =====

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href').startsWith('#')) {
            e.preventDefault();

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

console.log('🎯 Demo Navbar Sticky cargada');
