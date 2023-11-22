<template>
    <div class="col-12 col-md-3 mb-3" @mouseover="isHovered" @mouseleave="hovered = false">
        <div class="mask d-flex justify-content-end flex-column p-4 text-light" :class="{ 'd-none': !hovered }">
            <h4>{{ name }}</h4>
            <div class="d-flex text-uppercase">
                <h5 class="me-2">{{ genre1 }}</h5>
                <h5>{{ genre2 }}</h5>
            </div>

        </div>
        <img :src="'/images/' + image" :alt="name">
    </div>
</template>

<script>
export default {
    name: 'DesignCard',
    props: {
        image: String,
        name: String,
        genre1: String,
        genre2: String
    },
    data() {
        return {
            hovered: false
        }
    },
    methods: {
        isHovered() {
            this.hovered = true
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../../assets/styles/partials/variables' as *;

img {
    width: 100%;
}

.col-12 {
    position: relative;
    transition: transform 0.5s ease
}

.mask {
    position: absolute;
    width: 94%;
    height: 100%;
    background-color: $magnifying_lens;
    opacity: 0;
}

.mask:hover {
    transition: opacity 0.5s ease;
    opacity: 0.9;
}

.col-12:hover {
    transform: scale(1.2);
    z-index: 100;
    cursor: pointer;
}

h5 {
    font-size: 16px;
}
</style>