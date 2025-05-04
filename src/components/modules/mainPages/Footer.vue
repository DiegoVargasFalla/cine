<template>
    <footer class="container-footer">
      <div class="footer-content">
        <p class="footer-text">© 2025 CinePlus. Todos los derechos reservados.</p>
        <div class="footer-links">
          <a href="#">Política de privacidad</a>
          <a href="#">Términos y condiciones</a>
          <a href="#">Contacto</a>
        </div>
        <div class="footer-extra">
          <p class="footer-created-by">Desarrollado por <strong>DevStudio</strong></p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            class="instagram-link"
          >
            <i class="fa-brands fa-instagram icon"></i>
          </a>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup></script>
  
  <style scoped>
  .container-footer {
    background-color: #8e0b0b;
    color: white;
    width: 100%;
    padding: 2rem 1rem;
    font-family: "Cal Sans", sans-serif;
    font-size: 14px;
    display: flex;
    justify-content: center;
  }
  
  .footer-content {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
  
  .footer-text {
    margin: 0;
    letter-spacing: 1px;
  }
  
  .footer-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .footer-links a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
    font-weight: 300;
    font-size: 14px;
  }
  
  .footer-links a:hover {
    color: #ffd6d6;
  }
  
  .footer-extra {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .footer-created-by {
    margin: 0;
    font-weight: 300;
    font-size: 14px;
  }
  
  .instagram-link img {
    width: 20px;
    height: 20px;
    filter: brightness(0) invert(1);
    transition: filter 0.3s ease;
  }
  
  .instagram-link:hover img {
    filter: brightness(0.8) invert(1);
  }
  
  @media (min-width: 600px) {
    .footer-content {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }
  
    .footer-links {
      order: 2;
    }
  
    .footer-extra {
      order: 3;
    }
  }

.icon {
    font-size: 30px;
    color: white;
}
  </style>
  