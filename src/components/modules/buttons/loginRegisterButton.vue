<template>
  <div class="button-container">
    <RouterLink to="/login" @clcik="click" class="cine-button">INICIAR SESSIÓN</RouterLink>
  </div>
</template>
  
<script setup>
import { RouterLink } from 'vue-router';


</script>
  
<style scoped>
.button-container {
  position: relative;
  display: flex;
  gap: 1rem;
  justify-content: center;
}
  
.cine-button {
  position: relative;
  background-color: #a40808; /* bordo */
  text-decoration: none;
  color: white;
  font-family: "Oswald", sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  border: solid 1px white;
}
  
.cine-button:hover {
  background-color: #bb2020;
  transform: scale(1.05);
}

.cine-button:active {
  transform: scale(0.97);
}
</style>
  