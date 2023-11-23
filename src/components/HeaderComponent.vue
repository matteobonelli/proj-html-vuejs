<template>
    <header>
        <div class="infos-bg">
            <div class="container d-flex justify-content-between align-items-center">
                <div>{{ store.contacts.telNumber }}</div>
                <SocialComponent />
            </div>
        </div>
        <nav class="d-flex justify-content-between align-items-center ">
            <img src="../assets/images/logo.png" alt="logo">
            <ul>
                <li v-for="tab in store.navbar" class="me-4 text-uppercase ">
                    <a :href="tab.url">{{ tab.name }}</a>
                </li>
            </ul>
            <div>
                <button class="btn me-4 text-light text-uppercase fw-bold">Purchase</button>
                <i class="fa-solid fa-magnifying-glass me-3" @click="store.isLensClicked = true"></i>
            </div>
        </nav>

    </header>
</template>

<script>
import SocialComponent from './social/SocialComponent.vue';
import { store } from '../assets/data/store'
export default {
    name: 'HeaderComponent',
    components: {
        SocialComponent
    },
    data() {
        return {
            store
        }
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

header {
    background-color: $brand_primary;
    height: 160px;
}


nav {
    padding: 30px;
    font-weight: bold;
}

ul {
    display: flex;
}

a {
    color: $text_navbar;

    &:hover {
        opacity: 0.6;
    }
}

.fa-magnifying-glass {
    color: $magnifying_lens;
    font-size: 1vw;

    &:hover {
        cursor: pointer
    }
}

.infos-bg {
    background-color: $brand_infos;
    color: white;
    padding: 10px 0;
}

.container {
    max-width: 1700px;
}
</style>