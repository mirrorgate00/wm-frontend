<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src=".//../assets/locked-chest_39032.png"
          alt="logo"
          width="30"
          height="30"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Домашняя</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/itemreg">
              Добавление товара
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Авторизация
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link class="dropdown-item" to="/login">
                  Вход
                </router-link>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link class="dropdown-item" to="/signup">
                  Регистрация
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
        <form class="d-flex input-icon" v-on:submit.prevent="submitForm()">
          <SpeechToTextRecog
            class="mircro-icon"
            @start-speech-recog="receiveSpeechToTextEmit"
          ></SpeechToTextRecog>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Название товара"
            aria-label="Search"
            v-model="search.itemName"
          />
          <button class="btn btn-outline-success" type="submit">Поиск</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSearchDataStore } from '../stores/SearchData'
import SpeechToTextRecog from './SpeechToTextRecog.vue'

const router = useRouter()
const store = useSearchDataStore()
const search = ref({
  itemName: ''
})

function receiveSpeechToTextEmit(value) {
  search.value.itemName = value._rawValue.transcription[0]
  console.log(value._rawValue.transcription)
  console.log(search.value.itemName)
}
async function submitForm() {
  const userName = localStorage.getItem('userName')
  const response = await fetch(
    `http://localhost/ItemSingleRetrievement.php?itemName=${search.value.itemName}&userName=${userName}`
  )
  const data = await response.json()

  router.push({ path: '/singleitem' }).then(() => {
    store.writeData(data)
  })
}
</script>

<style>
.micro-icon {
  margin-top: 20px;
}
</style>
