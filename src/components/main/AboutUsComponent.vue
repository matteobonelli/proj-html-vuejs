<template>
    <div class="about-us-container">
        <div class="d-flex">
            <div class="images-container">
                <img class="top-image" src="../../assets/images/businesswoman.jpg" alt="businesswoman">
                <div class="green-img">
                    <img src="../../assets/images/busy-architect.jpg" alt="busy-architect">
                </div>

            </div>
            <div class="text-container">
                <h2 class="display-4 fw-bold">learn more about</h2>
                <h2 class="display-4 fw-bold">our <span class="color-green">mission</span></h2>
                <SeparatorComponent />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellat commodi et animi dolorum.
                    Sapiente,
                    earum aliquam. Natus est hic fuga dolore quibusdam architecto, commodi doloremque veritatis
                    exercitationem
                    ipsa. Nisi sit ipsam sapiente voluptatibus facere pariatur laudantium explicabo commodi corporis dolorum
                    eligendi, consequatur doloremque alias, tempora eius ea fuga qui.</p>
                <button class="btn text-uppercase text-light">Read more</button>
            </div>
        </div>
    </div>
</template>

<script>
import SeparatorComponent from '../separator/SeparatorComponent.vue';
export default {
    name: 'AboutUsComponent',
    components: {
        SeparatorComponent
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

.about-us-container {
    background-color: $brand_main_bg;
    height: 1100px;
}

.color-green {
    color: $magnifying_lens;
}

.text-container {
    margin: 300px 0;
    width: 600px;
}

.images-container {
    margin: 300px 0;
    position: relative;
    width: 800px;
    margin-right: 300px;
}

img {
    width: 100%;
    margin-left: 150px;
    border-radius: 20px;
    box-shadow: 1px 1px 20px 10px rgba($color: #000000, $alpha: 0.05);
}

.btn {
    margin-top: 40px;
}

.top-image {
    position: relative;
    z-index: 1;
    left: 0;
    transition: left 1.5s ease;

    &:hover {
        left: 5%;
    }
}

.green-img {
    width: 100%;
    position: absolute;
    left: -3%;
    top: -10%;
    margin: 0;
    background-color: $magnifying_lens;
    border-radius: 20px;
}

.green-img img {
    width: 100%;
    margin: 0;
    opacity: 0.2;
}
</style>