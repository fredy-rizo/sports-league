document.addEventListener("DOMContentLoaded", function () {
  // Manejador de envío del formulario de contacto
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const message = document.getElementById("message").value;
      const whatsappUrl = `https://wa.me/+573237805673?text=Hola, mi nombre es ${name}. ${message}`;
      window.open(whatsappUrl, "_blank");
    });
  }

  // Manejador del botón de contacto para mostrar/ocultar el formulario
  const contactButton = document.getElementById("contact-button");
  const contactFormContainer = document.getElementById(
    "contact-form-container"
  );

  if (contactButton && contactFormContainer) {
    contactButton.addEventListener("click", () => {
      contactFormContainer.classList.toggle("hidden");
    });
  }

  // Configuración del carrusel
  const carouselImages = document.querySelector(".carousel-images");
  const images = carouselImages ? carouselImages.querySelectorAll("img") : [];
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");
  const indicators = document.querySelectorAll(".carousel-indicator");
  let index = 0;

  function updateCarousel() {
    const offset = -index * 100; // Desplazamiento en porcentaje
    if (carouselImages) {
      carouselImages.style.transform = `translateX(${offset}%)`;
    }
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index);
    });
  }

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      index = index > 0 ? index - 1 : images.length - 1;
      updateCarousel();
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      index = index < images.length - 1 ? index + 1 : 0;
      updateCarousel();
    });
  }

  // Inicializa el carrusel
  updateCarousel();

  // Funcionalidad del modal de pantalla completa
  const fullscreenGallery = document.getElementById("fullscreen-gallery");
  const fullscreenImage = document.getElementById("fullscreen-image");
  const closeButton = fullscreenGallery.querySelector(".close");

  document.querySelectorAll(".galeria-grid .gallery-item").forEach((img) => {
    img.addEventListener("click", () => {
      fullscreenImage.src = img.src;
      fullscreenGallery.style.display = "flex";
    });
  });

  closeButton.addEventListener("click", () => {
    fullscreenGallery.style.display = "none";
  });
});
