<template>
    <article>
    <figure v-if="image">
        <img :src="image" :alt=image.name />
    </figure>
    <h2>{{pokemon.name}}</h2>
        <p>{{description}}</p>
    </article>
</template>

<script>
export default {
    name: 'PokemonViewer',
    props: ['pokemon'],
    data() {
        return {
            description: this.pokemon.description,
            image: this.pokemon.image
        };
    }
};
</script>

<style scoped>

</style>