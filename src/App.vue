<template>
  <header>
    <TheNavigation></TheNavigation>
  </header>

  <router-view></router-view>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue'
export default {
  components: { TheNavigation }
}
</script>
