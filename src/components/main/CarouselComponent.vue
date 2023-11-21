<template>
    <div class="carousel-container">
        <SlideComponent :class="{ 'd-none': store.index !== index }" v-for="jumbo, index in store.jumbos"
            :title1="jumbo.titleTop" :title2="jumbo.titleBottom" :greenword="jumbo.greenWord" :image="jumbo.image"
            :id="index" :key="index" />
        <div class="caret-container right d-flex align-items-center justify-content-center" @click="scrollRight(index)">
            <i class="fa-solid fa-caret-right"></i>
        </div>
        <div class="caret-container left d-flex align-items-center justify-content-center">
            <i class="fa-solid fa-caret-left" @click="scrollLeft(index)"></i>
        </div>
    </div>
</template>

<script>
import { store } from '../../assets/data/store'
import SlideComponent from './carousel/SlideComponent.vue';
export default {
    name: 'CarouselComponent',
    components: {
        SlideComponent
    },
    data() {
        return {
            store
        }
    },
    methods: {
        scrollRight() {
            store.index += 1

            if (store.index === store.jumbos.length) {
                store.index = 0
            }

        },
        scrollLeft() {
            if (store.index === 0) {
                store.index = store.jumbos.length
            }
            store.index -= 1

        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

.carousel-container {
    position: relative;
}

.caret-container {
    position: absolute;
    z-index: 100;
    font-size: 2vw;
    width: 50px;
    height: 50px;
    background-color: rgba($color: #000000, $alpha: 0.2);
    color: white;
    border-radius: 50px;

    &:hover {
        background-color: $magnifying_lens;
        cursor: pointer;
    }

}

.right {
    right: 50%;
    bottom: 10%;
}

.left {
    right: 54%;
    bottom: 10%;
}
</style>