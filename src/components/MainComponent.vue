<template>
    <CarouselComponent />
    <div class="section-container">
        <OptionsComponent />
    </div>
    <AboutUsComponent />
    <div class="section-container">
        <DesignComponent />
    </div>
    <CommentsComponent />
</template>

<script>
import CommentsComponent from './main/CommentsComponent.vue';
import OptionsComponent from './main/OptionsComponent.vue'
import { store } from '../assets/data/store'
import AboutUsComponent from './main/AboutUsComponent.vue';
import SeparatorComponent from './separator/SeparatorComponent.vue';
import CarouselComponent from './main/CarouselComponent.vue';
import DesignComponent from './main/DesignComponent.vue';
export default {
    name: 'MainComponent',
    components: {
        CarouselComponent,
        SeparatorComponent,
        OptionsComponent,
        AboutUsComponent,
        DesignComponent,
        CommentsComponent
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

.section-container {
    padding: 200px 0;
}
</style>