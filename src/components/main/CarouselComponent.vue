<template>
    <div class="carousel-container" ref="start">
        <TransitionGroup name="fade">
            <SlideComponent v-for="jumbo, index in store.jumbos" :title1="jumbo.titleTop" :title2="jumbo.titleBottom"
                :greenword="jumbo.greenWord" :image="jumbo.image" :id="index" :key="index" />
        </TransitionGroup>
        <div class="caret-container right d-flex align-items-center justify-content-center" @click="scrollRight">
            <i class="fa-solid fa-caret-right"></i>
        </div>
        <div class="caret-container left d-flex align-items-center justify-content-center" @click="scrollLeft">
            <i class="fa-solid fa-caret-left"></i>
        </div>
    </div>
    <i class="fa-regular fa-circle-up" @click="scrollUp"></i>
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
            store,
        }
    },
    methods: {
        scrollRight() {
            store.carouselIndex += 1

            if (store.carouselIndex === store.jumbos.length) {
                store.carouselIndex = 0
            }

        },
        scrollLeft() {
            if (store.carouselIndex === 0) {
                store.carouselIndex = store.jumbos.length
            }
            store.carouselIndex -= 1

        },
        autoScroll() {
            setInterval(this.scrollRight, 7000)
        },
        scrollUp() {
            this.$refs.start.scrollIntoView({ behavior: "smooth" })
        }
    },
    created() {
        this.autoScroll()
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

.carousel-container {
    position: relative;
    height: 800px;
}

.caret-container {
    position: absolute;
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

.fade-enter-active,
.fade-leave-active {
    transition: all 2s ease;
    overflow: hidden;
    visibility: visible;
    position: absolute;
    width: 100%;
    opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    visibility: hidden;
    width: 100%;
}

.right {
    right: 50%;
    bottom: 10%;
}

.left {
    right: 54%;
    bottom: 10%;
}

.fa-circle-up {
    position: absolute;
    z-index: 10000;
    bottom: 8%;
    right: 2%;
    font-size: 2vw;
    background-color: white;
    border-radius: 50%;

    &:hover {
        cursor: pointer;
    }
}
</style>