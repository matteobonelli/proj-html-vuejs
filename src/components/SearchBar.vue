<template>
    <div class="search-container">
        <i class="fa-regular fa-circle-xmark" @click="store.isLensClicked = false"></i>
        <div class="searchbar d-flex align-items-center justify-content-center ">
            <input type="text" placeholder="Search...">
            <i class="fa-solid fa-magnifying-glass me-3"></i>
        </div>
    </div>
</template>

<script>
import { store } from '../assets/data/store'
export default {
    name: 'SearchBar',
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
.search-container {
    position: relative;
    z-index: 100000;
}

.form-outline {
    width: 50%;
}

input {
    padding: 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    width: 50%;
    font-size: 1.5vw;
    margin-right: 20px;
    font-weight: bold;
}

i {
    font-size: 1.5vw;
}

.searchbar {
    width: 100%;
    height: 100vh;
    background-color: rgba($color: #ffffff, $alpha: 0.98);
    position: absolute;
    z-index: 110000;
}

.fa-circle-xmark {
    position: absolute;
    z-index: 110001;
    right: 0;
    padding: 20px;
    font-size: 2vw;

    &:hover {
        cursor: pointer;
    }

}

input:focus {
    outline: none;
}
</style>