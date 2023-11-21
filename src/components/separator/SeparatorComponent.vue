<template>
    <div class="d-flex separator">
        <div class="small">
        </div>
        <div class="big">

        </div>
    </div>
</template>

<script>
export default {
    name: 'SeparatorComponent'
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

.separator {
    margin: 20px 0;
}

.small {
    width: 10px;

    margin-right: 5px;
}

.big {
    width: 50px;

}

.small,
.big {
    border-radius: 10px;
    border: 2px solid $magnifying_lens;
}
</style>