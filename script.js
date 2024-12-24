// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Obtener el botón para cambiar el modo oscuro
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    // Verificar si el usuario ya tiene preferencia guardada en el localStorage
    const darkModePreference = localStorage.getItem('darkMode') === 'enabled';
  
    // Si el usuario ya tiene preferencia, aplicar el modo oscuro
    if (darkModePreference) {
      document.body.classList.add('dark-mode');
    }
  
    // Función para alternar el modo oscuro
    darkModeToggle.addEventListener('click', function () {
      // Alternar la clase 'dark-mode' en el body
      document.body.classList.toggle('dark-mode');
  
      // Guardar la preferencia del usuario en el localStorage
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  });
  