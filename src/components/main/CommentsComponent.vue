<template>
    <div class="comment-container">
        <div class="text-container text-light text-center">
            <div class=" h-100 container d-flex flex-column justify-content-center">
                <i class="fa-solid fa-quote-left"></i>
                <p>When it comes to barbequing, there are two main schools of thought for the techniques that you can use.
                    Freshly scrambled eggs with applewood smoked bacon - are amazing!</p>
                <div>
                    <div class="img-container mb-4">
                        <img src="../../assets/images/businesswoman.jpg" alt="businesswoman">
                    </div>
                    <h4 class="text-uppercase">Lissa Durbin</h4>
                    <h5>Client</h5>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'CommentsComponent'
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

i {
    font-size: 3vw;
    color: $magnifying_lens;
}

h4 {
    color: $magnifying_lens;
}

.comment-container {
    height: 1000px;
    background-image: url('../../assets/images/reunion.jpg');
    background-size: cover;
    background-position: center;
}

.text-container {
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.85);
}

.container {
    max-width: 1000px;
}

p {
    font-size: 1.8vw;
    margin: 80px 0;
}

img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
}
</style>