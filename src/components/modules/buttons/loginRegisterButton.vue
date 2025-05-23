<template>
    <div class="button-container">
      <button class="cine-button">INICIAR SESSIÓN</button>
      <!-- <button class="cine-button">Register</button> -->
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .button-container {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
  
  .cine-button {
    background-color: #a40808; /* bordo */
    color: white;
    font-family: "Oswald", sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2px;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    border: solid 1px white;
  }
  
  .cine-button:hover {
    background-color: #bb2020; /* tono más claro al pasar el mouse */
    transform: scale(1.05);
  }
  
  .cine-button:active {
    transform: scale(0.97);
  }
  </style>
  