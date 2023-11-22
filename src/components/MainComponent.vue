<template>
    <CarouselComponent />
    <div class="main-comp-options d-flex justify-content-between  align-items-center">
        <div class="title-container">
            <h2 class="display-1 fw-bold">
                We Are Here To Make Your <span class="green-color">Website</span> Look More <span
                    class="green-color">Elegant</span> And Stylish!
            </h2>
            <SeparatorComponent />
            <button class="btn text-uppercase text-light">View All</button>
        </div>
        <div class="d-flex flex-wrap justify-content-end cards-container">
            <OptionsCardComponent v-for="option in store.optionCard" :name="option.name" :image="option.image" />
        </div>

    </div>
</template>

<script>
import { store } from '../assets/data/store'
import OptionsCardComponent from './main/OptionsCardComponent.vue'
import SeparatorComponent from './separator/SeparatorComponent.vue';
import CarouselComponent from './main/CarouselComponent.vue';
export default {
    name: 'MainComponent',
    components: {
        CarouselComponent,
        SeparatorComponent,
        OptionsCardComponent
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

.title-container {
    width: 800px;
    padding: 30px;
}

.cards-container {
    width: 1000px;
}

.main-comp-options {
    height: 800px;
}

.green-color {
    color: $magnifying_lens;
}

.btn {
    margin-top: 40px;
    background-color: $magnifying_lens;
    border-radius: 40px;
    padding: 15px 40px;
}
</style>