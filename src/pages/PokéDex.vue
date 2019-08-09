<template>
  <Layout>
    <div class="flex">
      <Sidebar />
      <div>
        <p>Need to replace with a currentPokemon component or something.</p>
        <!-- <ul v-for="mon in $page.pokemon.edges" :key="mon.node.id">
          <h2>{{ mon.node.name }}</h2>
          <img :src="mon.node.image_lg" :alt="mon.node.name" />
          <p>{{ mon.node.description }}</p>
          <p>{{ mon.node.type_1 }}</p>
          <p>{{ mon.node.type_2 }}</p>
        </ul> -->
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Pokemon {
  pokemon: allPokemonEntry (sortBy: "number", order: ASC) {
    edges {
      node {
        number,
        name,
        image_sm,
        image_lg,
        description,
        type_1,
        type_2,
        path
      }
    }
  }
}
</page-query>

<script>
import Sidebar from "~/components/Sidebar.vue";

export default {
  metaInfo: {
    title: "PokéDex"
  },
  components: {
    Sidebar
  },
  data() {
    return {
      classes: {
        poison: 'bg-poison',
        grass: 'bg-grass',
        fire: 'bg-fire',
        water: 'bg-water',
        bug: 'bg-bug',
        normal: 'bg-normal',
        electric: 'bg-electric',
        ground: 'bg-ground',
        fairy: 'bg-fairy',
        fighting: 'bg-fighting',
        psychic: 'bg-pyschic',
        rock: 'bg-rock',
        steel: 'bg-steel',
        ghost: 'bg-ghost',
        ice: 'bg-ice',
        flying: 'bg-flying',
        dragon: 'bg-dragon'
      }
    }
  },
};
</script>

<style>
.flex {
  display: flex;
}
</style>
