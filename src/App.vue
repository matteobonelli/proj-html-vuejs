<template>
  <div class="app-container">
    <Transition>
      <SearchBar v-if="store.isLensClicked" />
    </Transition>
    <HeaderComponent />
    <FooterComponent />
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import { store } from './assets/data/store'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    SearchBar
  },
  data() {
    return {
      store
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  position: relative;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.9s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0
}
</style>