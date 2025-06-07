// Función para mostrar/ocultar el menú
// Reemplazar la función toggleMenu existente con esta versión mejorada
function toggleMenu() {
    const navList = document.querySelector('.princ-nav-list');
    navList.classList.toggle('show');
    
    // Actualizar el ícono del menú hamburguesa
    const hamburger = document.querySelector('.hamburger i');
    if (navList.classList.contains('show')) {
        hamburger.className = 'fas fa-times'; // Cambiar a X
    } else {
        hamburger.className = 'fas fa-bars'; // Volver a barras
    }
}

// Agregar evento para cerrar el menú al hacer clic fuera
document.addEventListener('click', (e) => {
    const navList = document.querySelector('.princ-nav-list');
    const hamburger = document.querySelector('.hamburger');
    
    if (!navList.contains(e.target) && !hamburger.contains(e.target) && navList.classList.contains('show')) {
        navList.classList.remove('show');
        document.querySelector('.hamburger i').className = 'fas fa-bars';
    }
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.princ-nav-list-li-a').forEach(link => {
    link.addEventListener('click', () => {
        const navList = document.querySelector('.princ-nav-list');
        if (navList.classList.contains('show')) {
            navList.classList.remove('show');
            document.querySelector('.hamburger i').className = 'fas fa-bars';
        }
    });
});


// Función para manejar el modo oscuro
document.addEventListener('DOMContentLoaded', function() {
    const modoOscuroBtn = document.getElementById('modooscuro');
    const body = document.body;
    
    // Verificar si hay una preferencia guardada
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
        updateMoonIcon(true);
    }

    modoOscuroBtn.addEventListener('click', () => {
        // Toggle dark mode
        body.classList.toggle('dark-mode');
        
        // Actualizar el ícono
        const isDarkMode = body.classList.contains('dark-mode');
        updateMoonIcon(isDarkMode);
        
        // Guardar preferencia
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    });

    function updateMoonIcon(isDark) {
        const moonIcon = modoOscuroBtn.querySelector('i');
        if (isDark) {
            moonIcon.className = 'fas fa-sun'; // Cambiar a sol en modo oscuro
        } else {
            moonIcon.className = 'fas fa-moon'; // Cambiar a luna en modo claro
        }
    }
});
  function realizarCompra() {
    const cantidad = document.getElementById('cantidad').value;
    if (cantidad > 0) {
      alert(`Has comprado ${cantidad} Detector(es) de Vapeo Inteligente. ¡Gracias por tu compra!`);
    } else {
      alert('Por favor, selecciona una cantidad válida.');
    }
  }