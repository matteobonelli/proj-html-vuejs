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
    margin: 30px 0;
}

.small {
    width: 10px;

    margin-right: 5px;
}

.big {
    width: 70px;

}

.small,
.big {
    border-radius: 10px;
    border: 4px solid $magnifying_lens;
}
</style>