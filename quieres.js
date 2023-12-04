
    // Selecciona el elemento de la imagen y el contenedor
    const quienesSomosImg = document.getElementById('about-image');
    const quienesSomosSection = document.getElementById('quienes-somos');
  
    // Función para hacer más pequeña la imagen al pasar el mouse
    const shrinkImage = () => {
      quienesSomosImg.style.transition = 'transform 0.3s ease'; // Agrega transición suave
      quienesSomosImg.style.transform = 'scale(0.9)'; // Escala la imagen al 90%
    };
  
    // Función para restablecer el tamaño original al salir del mouse
    const resetImage = () => {
      quienesSomosImg.style.transition = 'transform 0.3s ease'; // Agrega transición suave
      quienesSomosImg.style.transform = 'scale(1.0)'; // Restaura el tamaño original
    };
  
    // Agrega eventos para la animación al pasar el mouse
    quienesSomosSection.addEventListener('mouseenter', shrinkImage);
    quienesSomosSection.addEventListener('mouseleave', resetImage);

