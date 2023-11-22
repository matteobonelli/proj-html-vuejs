<template>
    <div class="d-flex align-items-center mb-5">
        <div class="title-container">
            <SeparatorComponent />
            <h2 class="display-4 fw-bold mb-5">Our recent <span class="color-green">web designs</span> & some examples of
                past
                <span class="color-green">projects</span>
            </h2>
            <SeparatorComponent />
        </div>
        <div class="paragraph-container d-flex align-items-end ">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rem odio odit. Earum mollitia quas
                fugit
                perferendis
                asperiores? Optio sint laborum autem, excepturi vitae molestias vel aliquid voluptatem et sit perferendis
                repudiandae beatae quaerat ab ratione, rem reiciendis cum dolor ipsum tempora tempore fuga molestiae!
                Laborum
                eos
                explicabo commodi sequi incidunt nam beatae dignissimos consequatur officiis reprehenderit!</p>
        </div>
    </div>
    <div class="container">
        <div class="row mb-5">

            <DesignCard v-for="design in store.designs" :image="design.image" :name="design.name" :genre1="design.genre1"
                :genre2="design.genre2" />

        </div>
        <div class="d-flex justify-content-center my-5">
            <button class="btn text-light text-uppercase">Read More</button>
        </div>
    </div>
</template>

<script>
import { store } from '../../assets/data/store'
import DesignCard from './cards/DesignCard.vue';
import SeparatorComponent from '../separator/SeparatorComponent.vue';
export default {
    name: 'DesignComponent',
    components: {
        SeparatorComponent,
        DesignCard
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

.color-green {
    color: $magnifying_lens;
}

.title-container {
    padding: 40px;
    width: 800px;
}

.paragraph-container {
    width: 800px;
    height: 300px;
}

.container {
    max-width: 1600px;
}

.btn {
    margin-top: 100px;
}
</style>