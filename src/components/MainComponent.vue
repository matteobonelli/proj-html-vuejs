<template>
    <CarouselComponent />
    <OptionsComponent />
    <AboutUsComponent />
</template>

<script>
import OptionsComponent from './main/OptionsComponent.vue'
import { store } from '../assets/data/store'
import AboutUsComponent from './main/AboutUsComponent.vue';
import SeparatorComponent from './separator/SeparatorComponent.vue';
import CarouselComponent from './main/CarouselComponent.vue';
export default {
    name: 'MainComponent',
    components: {
        CarouselComponent,
        SeparatorComponent,
        OptionsComponent,
        AboutUsComponent
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
</style>