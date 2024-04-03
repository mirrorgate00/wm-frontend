<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5 text-uppercase">Регистрация</h2>
        <div class="card my-5">
          <form
            class="card-body cardbody-color p-lg-5"
            v-on:submit.prevent="submitForm()"
          >
            <div class="text-center"></div>
            <div class="row">
              <div class="col-sm-6 mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="firs-tname"
                  placeholder="Имя"
                  v-model="state.firstName"
                />
                <InputErrorShow
                  v-bind:validation-obj="v$.firstName"
                ></InputErrorShow>
              </div>
              <div
                class="col-sm-6 mb-3"
                v-bind:class="{ error: v$.lastName.$errors.length }"
              >
                <input
                  type="text"
                  class="form-control"
                  id="last-name"
                  placeholder="Фамилия"
                  v-model="state.lastName"
                />
                <InputErrorShow
                  v-bind:validation-obj="v$.lastName"
                ></InputErrorShow>
              </div>
            </div>

            <div class="mb-3" v-bind:class="{ error: v$.email.$errors.length }">
              <input
                type="email"
                autocomplete="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Электронная почта"
                v-model="state.email"
              />
              <InputErrorShow v-bind:validation-obj="v$.email"></InputErrorShow>
            </div>
            <div class="row">
              <div class="col-sm-6 mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="password"
                  placeholder="Пароль"
                  v-model="state.password"
                />
                <InputErrorShow
                  v-bind:validation-obj="v$.password"
                ></InputErrorShow>
              </div>
              <div class="col-sm-6 mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="confirm-password"
                  placeholder="Повторите пароль"
                  v-model="state.confirmPassword"
                />
                <InputErrorShow
                  v-bind:validation-obj="v$.confirmPassword"
                ></InputErrorShow>
              </div>
            </div>
            <div class="text-center">
              <input
                type="submit"
                value="Зарегистрировать"
                class="btn btn-color px-5 mt-3 mb-5 w-50"
              />
            </div>
            <div id="emailHelp" class="form-text text-center mb-1 text-dark">
              У Вас уже есть аккаунт?
              <router-link class="text-dark fw-bold" to="/login">
                Войти
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputErrorShow from '../components/InputErrorShow.vue'
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, sameAs, minLength } from '@vuelidate/validators'
import { required$ } from '../helpers/validators.js'

const state = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const rules = {
  firstName: { required$ },
  lastName: { required$ },
  email: { required$, email },
  password: { required$, minLength: minLength(6) },
  confirmPassword: {
    required$,
    sameAsPassword: sameAs(state.value.password)
  }
}

const v$ = useVuelidate(rules, state, { $lazy: true, $autoDirty: true })

async function submitForm() {
  const formIsCorrect = await this.v$.$validate()
  if (!formIsCorrect) return
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
