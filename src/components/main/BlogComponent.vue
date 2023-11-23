<template>
    <div class="blog-container">
        <h2 class="display-4 fw-bold text-center">Latest News & Our <span class="color-green">Blog</span></h2>
        <div class="d-flex justify-content-center my-5">
            <SeparatorComponent />
        </div>
        <div class="d-flex justify-content-between ">
            <BlogCards v-for="blog in store.blogs" :image="blog.image" :title="blog.title" :date="blog.date" />
        </div>
        <div class="d-flex justify-content-center">
            <button class="btn text-uppercase text-light">View All Posts</button>
        </div>
    </div>
</template>

<script>
import { store } from '../../assets/data/store'
import BlogCards from './cards/BlogCards.vue'
import SeparatorComponent from '../separator/SeparatorComponent.vue';
export default {
    name: 'BlogComponent',
    components: {
        SeparatorComponent,
        BlogCards
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
    color: $magnifying_lens
}

.blog-container {
    padding: 200px 0;
    background-color: $brand_main_bg ;
}

.btn {
    margin-top: 150px;
    background-color: #212529 !important;

    &:hover {
        background-color: $magnifying_lens !important;
    }
}
</style>