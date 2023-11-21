<template>
  <div class="app-container">
    <Transition>
      <SearchBar v-if="store.isLensClicked" />
    </Transition>
    <HeaderComponent />
    <div class="body-container">
      <main>
        <MainComponent />
      </main>
      <div class="prov">
        <FooterComponent />
      </div>

    </div>
  </div>
</template>

<script>
import MainComponent from './components/MainComponent.vue'
import SearchBar from './components/SearchBar.vue'
import { store } from './assets/data/store'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    SearchBar,
    MainComponent
  },
  data() {
    return {
      store
    }
  }
}
</script>

<style lang="scss" scoped>
.body-container {
  height: calc(100vh - 160px);
  overflow-y: auto;
}

.prov {
  position: relative;
  z-index: 10;
  background-color: white;
}

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