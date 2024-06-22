<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5 text-uppercase">
          Вход в систему
        </h2>
        <div class="card my-5">
          <form
            class="card-body cardbody-color p-lg-5"
            v-on:submit.prevent="submitForm()"
          >
            <div class="text-center"></div>

            <div class="mb-3">
              <input
                type="email"
                autocomplete="email"
                class="form-control"
                id="Email"
                aria-describedby="emailHelp"
                placeholder="Электронная почта"
                v-model="user.email"
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Пароль"
                v-model="user.password"
              />
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-color px-5 mt-3 mb-5 w-50">
                Войти
              </button>
            </div>
            <div class="form-text text-center mb-1 text-dark">
              У Вас нет учетной записи?
              <router-link class="text-dark fw-bold" to="/signup">
                Зарегистрироваться
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const user = ref({
  email: '',
  password: ''
})
async function submitForm() {
  console.log(JSON.stringify({ user }))
  const response = await fetch(
    'http://localhost/Authentication/Authentication.php',
    {
      method: 'POST',
      body: JSON.stringify({ user })
    }
  )
  const data = await response.json()
  console.log(data)
  localStorage.setItem('userName', data.username)
}
</script>

<style scoped>
.btn-color {
  background-color: #0e1c36;
  color: #fff;
}

.cardbody-color {
  background-color: #ebf2fa;
}
</style>
