<script>

export default {
    name: 'Card',
}

</script>

<template>
    <div class="card">
        <div class="image">

        </div>

        <div class="name">
            <h3>NOME CARTA</h3>
        </div>

        <div class="archetype">
            <span>archetipo</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as*;

.card {
    background-color: $primary;
    flex-basis: calc(100% / 5 - 20px);
    text-align: center;

    .image {
        width: 100%;
        height: 200px;
        background-color: aquamarine;
    }

    .name {
        color: $secondary;
        padding: 20px 0;
    }

    .archetype {
        color: $tertiary;
        padding-bottom: 15px;
    }
}
</style>