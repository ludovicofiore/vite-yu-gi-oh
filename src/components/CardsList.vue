<script>
import Card from './Card.vue';

// import store
import { store } from '../store';

export default {
    name: 'CardsList',
    components: {
        Card,
    },

    data() {
        return {
            store,
        }
    },
}

</script>

<template>
    <section class="container">
        <div class="found-cards">
            <span>Found 39 cards</span>
        </div>


        <div class="cards-container">
            <Card v-for="singleCard in store.cardsArray" :key="singleCard.id" :cardData="singleCard" />
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

    .cards-container {

        display: flex;
        gap: 25px;
        flex-wrap: wrap;
    }
}
</style>