<template>
  <div class="container-login" id="background-id">
    <Form @submit="onSubmit" class="form">
      <h1 class="title">Iniciar Sesión</h1>

      <div class="field">
        <label for="email">Correo electrónico</label>
        <Field
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
        <ErrorMessage name="password" class="error" />
      </div>

      <button type="submit" class="btn-submit">Entrar</button>

      <div class="register-link">
        ¿No tienes cuenta?
        <RouterLink to="/register">Regístrate aquí</RouterLink>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Form, Field, ErrorMessage, useForm } from 'vee-validate'
import * as yup from 'yup'
import { RouterLink } from 'vue-router'

const showPassword = ref(false)

function togglePassword() {
  showPassword.value = !showPassword.value
}

onMounted(() => {
  backgroundAnimation()
})

const schema = yup.object({
  email: yup.string().email('Correo inválido').required('Correo requerido'),
  password: yup.string().min(6, 'Mínimo 6 caracteres').required('Contraseña requerida'),
})

const { handleSubmit } = useForm({
  validationSchema: schema
})

const onSubmit = handleSubmit(values => {
  console.log('Datos del formulario:', values)
})

function backgroundAnimation() {
  const background = document.getElementById('background-id')
  const num = 60

  for (let i = 0; i <= num; i++) {
    const randomX = Math.floor(Math.random() * window.innerWidth)
    const randomY = Math.floor(Math.random() * window.innerHeight)
    const randomSize = Math.random() * 30 + 10

    const bubble = document.createElement('div')
    bubble.classList.add('container-bubble')

    Object.assign(bubble.style, {
      position: 'absolute',
      left: `${randomX}px`,
      top: `${randomY}px`,
      backgroundColor: '#a40808',
      width: `${randomSize}px`,
      height: `${randomSize}px`,
      borderRadius: '50%',
    })

    background.appendChild(bubble)
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
}

.form {
  background: #1c1b1a;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 0 15px #a40808a8;
  width: 30%;
  color: white;
  z-index: 100;
}

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
  transition: background 0.3s;
}

.btn-submit:hover {
  background-color: #a40808;
}

.register-link {
  margin-top: 1rem;
  text-align: center;
  color: #ccc;
}

.register-link a {
  color: #a40808;
  font-weight: bold;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}

/* Burbujas */
.container-bubble {
  position: absolute;
  display: flex;
  border-radius: 50%;
  background-color: #a40808;
  animation: bubbleLight 10s ease-in-out infinite;
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
</style>
