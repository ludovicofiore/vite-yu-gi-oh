<script>
    // import store
    import { store } from '../store';

    export default {
        name: 'AppSelect',

        data() {
            return {
                store,
            }
        },
        methods: {
            // switchSelect(event) {
            //     store.selectCards = event.target.value;
            //     console.log(store.selectCards);
            // }
         },
    }
    
</script>

<template>
<div class="container">
    <select name="archetype" id="archetype" @change="$emit('switchSelect')" v-model="store.selectCards">

        <option value="Alien">Alien</option>
        <option value="Melodious">Melodious</option>
    </select>
</div>
</template>

<style lang="scss" scoped>

#archetype {
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 30px;
}
</style>