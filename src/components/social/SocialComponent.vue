<template>
    <ul>
        <li v-for="social in store.socials" class="me-3">
            <i class='fa-brands ' :class="social"></i>
        </li>
    </ul>
</template>

<script>
import { store } from '../../assets/data/store'
export default {
    name: 'SocialComponent',
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
ul {
    display: flex;
    font-size: 1vw;
    color: white;
}
</style>