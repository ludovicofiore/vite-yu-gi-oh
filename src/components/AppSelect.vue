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
    }
    
</script>

<template>
<div class="container">
    <select name="archetype" id="archetype" @change="$emit('switchSelect')" v-model="store.selectCards">

        <option v-for="(option, index) in store.optionsArray" :key="index" :value="option.archetype_name">{{ option.archetype_name }}</option>
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