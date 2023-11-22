<template>
    <div class="card-container">
        <i :class="'fa-solid ' + image"></i>
        <h5 class="mb-3">{{ name }}</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis ipsa odit dolor...</p>
    </div>
</template>

<script>
export default {
    name: 'OptionsCardComponent',
    props: {
        name: String,
        image: String
    }
}
</script>

<style lang="scss" scoped>
@use '../../../assets/styles/partials/variables' as *;

.card-container {
    border-radius: 20px;
    box-shadow: 1px 1px 20px 10px rgba($color: #000000, $alpha: 0.05);
    padding: 40px;
    width: 400px;
    margin: 30px;
}

i {
    font-size: 5vw;
    margin-bottom: 30px;
    color: $magnifying_lens;
}
</style>