<script>

export default {
    name: 'Card',
    props: ['cardData'],
}

</script>

<template>
    <div class="card">
        <div class="image">
            <img :src="cardData.card_images[0].image_url" :alt="cardData.name">
        </div>

        <div class="name">
            <h3>{{ cardData.name }}</h3>
        </div>

        <div class="archetype">
            <span>{{ cardData.archetype }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as*;

.card {
    background-color: $primary;
    flex-basis: calc(100% / 5 - 20px);
    text-align: center;

    .image img {
        max-width: 100%;
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