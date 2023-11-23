<template>
    <div class="blog-class">
        <div class="image-container">
            <img :src="'/images/' + image" :alt="title">
        </div>
        <div class="text-container">
            <div class=" h-100 titles-container d-flex flex-column justify-content-end ">
                <h5>{{ date }}</h5>
                <h4 class="fw-bold mb-4">{{ title }}</h4>
                <i class="fa-solid fa-circle"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogCards',
    props: {
        image: String,
        title: String,
        date: String
    }
}
</script>

<style lang="scss" scoped>
@use '../../../assets/styles/partials/variables' as *;

.image-container {
    padding: 0 20px;
    overflow: hidden;
    border-radius: 20px;



    img {
        width: 100%;
        border-radius: 20px;
        box-shadow: 1px 1px 20px 10px rgba($color: #000000, $alpha: 0.05);
        transition: transform 0.5s ease;

    }
}

.blog-class {
    position: relative;

    &:hover {
        cursor: pointer;

        img {
            transform: scale(1.1);

        }

        .text-container {
            background-color: $magnifying_lens ;
            color: white;
            bottom: -20%;


            h5 {
                opacity: 1;
            }

            i {
                color: white;
            }
        }


    }
}

.text-container {
    background-color: white;
    position: absolute;
    bottom: -10%;
    left: 10%;
    width: 500px;
    padding: 10px;
    height: 150px;
    border-radius: 20px;
    box-shadow: 1px 1px 20px 10px rgba($color: #000000, $alpha: 0.05);
    transition: background-color 0.5s ease, color 0.5s ease, bottom 1s ease;

}

h5 {
    opacity: 0.4;
}

h4 {
    font-size: 26px;
}

.titles-container {
    margin-left: 40px;
    position: relative;

    i {
        position: absolute;
        bottom: 31px;
        left: -20px;
        font-size: 12px;
        color: $magnifying_lens;
    }
}
</style>