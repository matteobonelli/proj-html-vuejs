<template>
    <div class="card-brand">
        <img :src="'/images/' + image" alt="">
    </div>
</template>

<script>
export default {
    name: 'BrandsCards',
    props: {
        image: String
    }
}
</script>

<style lang="scss" scoped>
.card-brand {
    width: 300px;
    padding: 80px;
}
</style>