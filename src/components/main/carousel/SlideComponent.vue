<template>
    <div class="slide-container d-flex align-items-center" v-if="store.carouselIndex === id">
        <img :src="'/images/' + image" alt="slide">
        <div class="container">
            <div class="text-container">
                <h4 class="text-uppercase green-color display-6 ">17 years of experience</h4>
                <h2 class=" display-1 fw-bold">{{ title1 }}
                </h2>
                <h2 class=" display-1 fw-bold">{{ title2 }} <span class="green-color">{{ greenword }}</span>
                </h2>
                <SeparatorComponent />
                <p class="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos a earum quidem itaque
                    aliquid!
                    Eius iusto
                    non,
                    ratione nam aperiam facere sequi iure. Error hic nam placeat soluta ut itaque illum omnis blanditiis
                    alias
                    exercitationem, delectus ex perferendis harum odit in natus veritatis quae aliquam obcaecati
                    aspernatur
                    molestiae fuga vel!
                </p>
                <button class="btn text-light mb-5 text-uppercase">Read More</button>
                <ul class="d-flex fw-bold">
                    <li>Facebook </li>
                    <li>Instagram </li>
                    <li>Youtube </li>
                    <li>Twitter</li>
                </ul>
            </div>


        </div>

    </div>
</template>

<script>
import { store } from '../../../assets/data/store'
import SeparatorComponent from '../../separator/SeparatorComponent.vue';
export default {
    name: 'SlideComponent',
    props: {
        title1: String,
        title2: String,
        greenword: String,
        image: String,
        id: Number
    },
    components: {
        SeparatorComponent
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../../assets/styles/partials/variables' as *;

.slide-container {
    position: relative;
    height: 100%;
    overflow: hidden;
    background: $brand_main_bg;
    opacity: 1;
    transition: opacity 1s ease;
}

.green-color {
    color: $magnifying_lens
}

.text-container {
    width: 950px;

}

h2 {
    font-size: 5vw;
}

img {
    width: 55%;
    position: absolute;
    right: -6%;
    top: -50px;
}

.btn {
    background: linear-gradient(to right top, #454545, #373737, #292929, #1c1c1c, #0d0d0d);
    transition: transform 0.5s ease;
    box-shadow: 1px 1px 20px 10px rgba($color: #000000, $alpha: 0.1);

    &:hover {

        background: linear-gradient(to right top, #00d9a6, #3fdc96, #5fde84, #7bdf72, #95e060);
        transform: scale(1.1);
    }
}

li {
    margin-right: 20px;

    &:hover {
        cursor: pointer;
    }
}

.container {
    max-width: 1600px;
}
</style>