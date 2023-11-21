<template>
    <header>
        <div class="infos-bg">
            <div class="container d-flex justify-content-between align-items-center">
                <div>{{ store.contacts.telNumber }}</div>
                <ul>
                    <li v-for="social in store.socials" class="me-3">
                        <i class='fa-brands ' :class="social"></i>
                    </li>
                </ul>
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
                <button class="btn me-4 text-uppercase">Purchase</button>
                <i class="fa-solid fa-magnifying-glass me-3"></i>
            </div>
        </nav>

    </header>
</template>

<script>
import { store } from '../assets/data/store'
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

header {
    background-color: $brand_primary;
}

nav {
    padding: 30px;
}

ul {
    display: flex;
}

a {
    color: $text_navbar;
}

.fa-magnifying-glass {
    color: $magnifying_lens;
    font-size: 1vw
}

.infos-bg {
    background-color: $brand_infos;
    color: white;
    padding: 10px 0;
}

.btn {
    background-color: $magnifying_lens;
    color: white;
    padding: 20px 60px;
    border-radius: 40px;
}

.container {
    max-width: 1700px;
}
</style>