<template>
  <div class="container-login" id="background-id">
    <!-- <bubble
      v-for="(item, index) in propsBuble"
      :key="index"
      :left="item.left"
      :top="item.top"
      :height="item.size"
      :width="item.size"
      ></bubble> -->
    <Form @submit="onClickLogIn" class="form" id="form-id">
      <h1 class="title">Iniciar Sesión</h1>
      <div class="field">
        <label for="email">Correo electrónico</label>
        <Field
          v-model="storeLogin.username"
          id="email"
          name="email"
          type="email"
          placeholder="ejemplo@correo.com"
          class="input"
        />
        <ErrorMessage name="email" class="error" />
      </div>

      <div class="field">
        <label for="password">Contraseña</label>
        <div class="password-wrapper">
          <Field
          v-model="storeLogin.password"
            :type="showPassword ? 'text' : 'password'"
            id="password"
            name="password"
            placeholder="••••••••"
            class="input"
          />
          <button type="button" class="toggle-password" @click="togglePassword">
            {{ showPassword ? 'O' : ' Φ' }}
          </button>
        </div>
        <span v-if="storeRegister.forbidden" class="error-credential">Email o contraseña incorrecta</span>
      </div>

      <button type="submit" class="btn-submit">Entrar</button>

      <div class="register-link">
        ¿No tienes cuenta?
        <span @click="changeLogin" to="/register">Regístrate aquí</span>
      </div>
    </Form>
    <Form @submit="onClikcRegister" class="form-register" id="form-register-id">
      <h1 class="title">Registrarse</h1>

      <div class="field">
        <label for="email">Correo electrónico</label>
        <Field
        v-model="storeRegister.email"
          id="email-register"
          name="email"
          type="email"
          placeholder="ejemplo@correo.com"
          class="input"
        />
        <ErrorMessage name="email" class="error" />
      </div>

      <div class="field">
        <label for="username">Nombre de usuario</label>
        <Field
        v-model="storeRegister.username"
          id="username-register"
          name="username"
          type="text"
          placeholder="Tu nombre de usuario"
          class="input"
        />
        <ErrorMessage name="username" class="error" />
      </div>

      <div class="field">
        <label for="password">Contraseña</label>
        <div class="password-wrapper">
          <Field
          v-model="storeRegister.password"
            :type="showPassword ? 'text' : 'password'"
            id="password-register"
            name="password"
            placeholder="••••••••"
            class="input"
          />
          <button type="button" class="toggle-password" @click="togglePassword">
            {{ showPassword ? 'O' : ' Φ' }}
          </button>
        </div>
        <ErrorMessage name="password" class="error" />
      </div>

      <button type="submit" class="btn-submit">Crear cuenta</button>

      <div class="register-link">
        ¿Ya tienes cuenta?
        <span @click="changeRegister" to="/login">Inicia sesión aquí</span>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Form, Field, ErrorMessage, useForm } from 'vee-validate'
import * as yup from 'yup'
import bubble from '../bubbleLogin/bubble.vue'
import { useStoreLogin } from '../movieTickets/store/loginStore/loginStore'
import { useRouter } from 'vue-router'
import { useStoreRegister } from '../movieTickets/store/loginStore/registerStore'

const storeLogin = useStoreLogin();
const storeRegister = useStoreRegister();
const showPassword = ref(false)
const router = useRouter();

function togglePassword() {
  showPassword.value = !showPassword.value
}

onMounted(() => {
  storeLogin.hiddeButtonLogin = false;
  const listValues = [];
    for (let i = 0; i < totalBubble; i++) {
      listValues.push({
        left: Math.floor(Math.random() * window.innerWidth),
        top: Math.floor(Math.random() * window.innerHeight),
        size: Math.random() * 30 + 10
      })
    }
    propsBuble.value = listValues;
})

const totalBubble = 60;
const propsBuble = ref([]);

const schema = yup.object({
  email: yup.string().email('Correo inválido').required('Correo requerido'),
  password: yup.string().min(6, 'Mínimo 6 caracteres').required('Contraseña requerida'),
})

const { handleSubmit } = useForm({
  validationSchema: schema
})

const onClickLogIn = () => {
  const email = localStorage.getItem('email')
  const password = localStorage.getItem('password')

  if(email === storeLogin.username && password === storeLogin.password) {
    storeLogin.username = "";
    storeLogin.password = "";
    storeRegister.forbidden = false;
    storeRegister.firstLeter = localStorage.getItem('firstLetter')
    router.push('/')
  } else {
    storeRegister.forbidden = true;
  }
}

const onClikcRegister = () => {
  storeRegister.registerUser = true;
  const name = storeRegister.username.charAt(0).toUpperCase();

  localStorage.setItem('username', storeRegister.username);
  localStorage.setItem('email', storeRegister.email);
  localStorage.setItem('password', storeRegister.password);
  localStorage.setItem('register', storeRegister.registerUser)
  localStorage.setItem('firstLetter', name)

  storeRegister.username = '';
  storeRegister.email = '';
  storeRegister.password = '';

  changeRegister()
  
}


const changeLogin = () => {
  const formRegister = document.getElementById('form-register-id');
  const formLogin = document.getElementById('form-id');
  const display = window.getComputedStyle(formLogin).display;

  if(display === 'block') {
    formLogin.style.display = 'none';
    formRegister.style.display = 'block'
  }
}

const changeRegister = () => {
  const formRegister = document.getElementById('form-register-id');
  const formLogin = document.getElementById('form-id');
  const display = window.getComputedStyle(formRegister).display;

  if(display === 'block') {
    formRegister.style.display = 'none';
    formLogin.style.display = 'block';
  }
}

</script>

<style scoped>
.container-login {
  background-color: #12100D;
  font-family: 'Oswald', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.form {
  display: block;
  background: #1c1b1a9d;
  backdrop-filter: blur(7px);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 0 15px #a40808a8;
  /* width: 30%; */
  aspect-ratio: 16 / 9;
  color: white;
  z-index: 100;
  animation: formRotate 1s ease-in-out forwards;
  transition: all 1s ease-in-out;
}

.form-register {
  display: none;
  background: #1c1b1a9d;
  backdrop-filter: blur(7px);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 0 15px #a40808a8;
  /* width: 30%; */
  aspect-ratio: 16 / 9;
  color: white;
  z-index: 100;
  animation: formRotate 1s ease-in-out forwards;
  transition: all 1s ease-in-out;
}

@keyframes formRotate {
  0% {
    transform: rotateX(180deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}

/* transform: perspective(200px) rotateX(-8deg); */
.title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #a40808;
  text-align: center;
}

.field {
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
}

.password-wrapper {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #a40808;
  font-weight: bold;
  cursor: pointer;
  font-size: 18px;
}

label {
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #ccc;
}

.input {
  background: #252422;
  border: 1px solid #444;
  padding: 0.75rem;
  border-radius: 6px;
  color: white;
  outline: none;
  width: 100%;
}

.input:focus {
  border-color: #a40808a8;
}

.error {
  color: #f55;
  font-size: 0.8rem;
  margin-top: 0.25rem;
}

.btn-submit {
  background-color: #a40808a8;
  color: white;
  border: none;
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  
}

.btn-submit:hover {
  background-color: #a40808;
}

.register-link {
  margin-top: 1rem;
  text-align: center;
  color: #ccc;
}

.register-link span {
  color: #a40808;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}

.register-link a:hover {
  text-decoration: underline;
}

/* Burbujas */
.container-bubble {
  position: absolute;
  /* background-color: green; */
  top: 0;
  height: 100%;
  width: 100%;
}

.error-credential {
  position: relative;
  color: red;
  font-family: 'Oswald' sans-serif;
  font-size: 15px;
  font-weight: 300;
}

@keyframes bubbleLight {
  0% {
    transform: translate(0px, 0px) scale(1);
    box-shadow: 0 0 10px rgba(200, 68, 68, 0.8),
                0 0 20px rgba(137, 32, 32, 0.6);
    opacity: 1;
  }

  25% {
    transform: translate(20px, -20px) scale(1.05);
    box-shadow: 0 0 5px rgba(128, 45, 45, 0.4),
                0 0 15px rgba(117, 16, 16, 0.3);
    opacity: 0.9;
  }

  50% {
    transform: translate(-25px, 10px) scale(1);
    box-shadow: 0 0 0px rgba(255, 255, 100, 0),
                0 0 0px rgba(255, 255, 150, 0);
    opacity: 0.4;
  }

  75% {
    transform: translate(15px, 20px) scale(1.05);
    box-shadow: 0 0 5px rgba(185, 1, 1, 0.6),
                0 0 10px rgba(113, 17, 17, 0.4);
    opacity: 0.8;
  }

  100% {
    transform: translate(0px, 0px) scale(1);
    box-shadow: 0 0 10px rgba(206, 54, 54, 0.9),
                0 0 20px rgba(165, 35, 35, 0.7);
    opacity: 1;
  }
}

@media screen and (max-width: 915px) and (min-width: 900px) {
  .form {
    width: 65%;
    height: 33vh;
  }
}

@media screen and (max-width: 770px) and (min-width: 750px) {
  .form {
    width: 70%;
    height: 40vh;
  }
}

@media screen and (max-width: 860px) and (min-width: 800px) {
  .form {
    width: 70%;
    height: 40vh;
  }
}

@media screen and (max-width: 3000px) and (min-width: 1200px) {
  .form {
    height: 60vh;
    width: 35%;
  }
}

@media screen and (max-width: 910px) and (min-width: 906px) {
  .form {
    height: 70vh;
    width: 45%;
  }
}

@media screen and (max-width: 765px) and (min-width: 763px) {
  .form {
    height: 70vh;
    width: 48%;
  }
}





@media screen and (max-width: 915px) and (min-width: 900px) {
  .form-register {
    width: 65%;
    height: 37vh;
  }
}

@media screen and (max-width: 770px) and (min-width: 750px) {
  .form-register {
    width: 70%;
    height: 50vh;
  }
}

@media screen and (max-width: 860px) and (min-width: 800px) {
  .form-register {
    width: 70%;
    height: 43vh;
  }
}

@media screen and (max-width: 3000px) and (min-width: 1200px) {
  .form-register {
    height: 80h;
    width: 35%;
  }
}

@media screen and (max-width: 910px) and (min-width: 906px) {
  .form-register {
    height: 70vh;
    width: 45%;
  }
}

@media screen and (max-width: 765px) and (min-width: 763px) {
  .form-register {
    height: 70vh;
    width: 48%;
  }
}


</style>
