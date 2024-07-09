<script>

export default {
    name: 'AppHeader',
}

</script>

<template>
    <header>
        <span>
            <img src="https://www.kindpng.com/picc/m/172-1722622_yugioh-logo-png-yo-gi-oh-logo-transparent.png"
                alt="logo yugioh">
        </span>
        <h1>Yu-Gi-Oh Api</h1>
    </header>
</template>

<style lang="scss" scooped>
@use '../style/partials/variables' as*;

header {
    background-color: $secondary;
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;

    span {
        width: 10%;
        margin-right: 30px;

        img {
            max-width: 100%;
        }
    }
}
</style>