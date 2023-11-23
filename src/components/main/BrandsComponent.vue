<template>
    <div class="brand-container">
        <div>
            <div class="d-flex justify-content-between container ">
                <div class="input-card text-light d-flex flex-column align-items-center ">
                    <div class="mb-5 text-center">
                        <h6>Are you Ready?</h6>
                        <h4 class="display-6 fw-bold">Start a New Project</h4>
                    </div>

                    <input type="text" placeholder="Enter your Email Address">
                    <div class="submit">SUBMIT</div>
                </div>
                <div class="input-card-2 text-light d-flex flex-column align-items-center ">
                    <div class="mb-5 text-center">
                        <h6>What Are You Waiting for?</h6>
                        <h4 class="display-6 fw-bold">Let's Talk About Work</h4>
                    </div>

                    <button class="btn text-light text-uppercase">Start Now</button>

                </div>
            </div>
        </div>
        <div class="pt-5 d-flex justify-content-center">
            <BrandsCards v-for="brand in store.brands" :image="brand.image" />
        </div>
    </div>
</template>

<script>
import { store } from '../../assets/data/store'
import BrandsCards from './cards/BrandsCards.vue';
export default {
    name: 'BrandsComponent',
    components: {
        BrandsCards
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

.brand-container {
    background-color: #fafafa;
}

.input-card {
    background-image: linear-gradient(to right top, #454545, #373737, #292929, #1c1c1c, #0d0d0d);
    width: 900px;
    padding: 60px;
    margin: 0 20px;
    border-radius: 20px;
    box-shadow: 1px 1px 20px 10px rgba($color: #373737, $alpha: 0.4);
}

.container {
    max-width: 1600px;
    position: relative;
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

.input-card-2 {
    background-image: linear-gradient(to right top, #00d9a6, #3fdc96, #5fde84, #7bdf72, #95e060);
    width: 900px;
    padding: 60px;
    margin: 0 20px;
    border-radius: 20px;
    box-shadow: 1px 1px 20px 10px rgba($color: #5fde84, $alpha: 0.4);
}

h6 {
    font-size: 14px;
    opacity: 0.5;
}

input {
    width: 450px;
    height: 50px;
    padding: 20px;
    border-radius: 20px;
    background-color: #3c3c3c;
    color: #fafafa;
    border: 0;
}

input:focus {
    outline: none;
}

.submit {
    position: absolute;
    bottom: 26.7%;
    left: 35.5%;
    font-size: 12px;
    opacity: 0.8;

    &:hover {
        cursor: pointer;
    }
}
</style>