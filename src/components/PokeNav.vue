<template>
    <article>
        <g-link :to="pokemon.path">
            <p> {{pokemon.name}} </p>
        </g-link>
    </article>
</template>

<script>
export default {
    name: 'PokeNav',
    props: ['pokemon']
};
</script>

<style scoped>

</style>