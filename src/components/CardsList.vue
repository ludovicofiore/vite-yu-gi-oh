<script>

export default {
    name: 'CardsList',
}

</script>

<template>
    <section class="container">
        <div class="found-cards">
            <span>Found 39 cards</span>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as*;

.container {
    background-color: $secondary;
    padding: 50px;

    .found-cards {
        background-color: $tertiary;
        color: $secondary;
        font-weight: bold;
        padding: 25px 15px;

    }
}
</style>