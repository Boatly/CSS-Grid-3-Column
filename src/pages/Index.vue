<template>
  <Layout>
    <h1>Index.vue - layout component</h1>
    <!-- <nav>
      <p v-for="edge in $page.allPokemon.edges" :key="edge.node.id" class="nav-bar">
        <g-link :to="edge.node.path">
          {{ edge.node.name }}
        </g-link>
      </p>
    </nav> -->

    <!-- <section>
      <PokemonViewer v-for="edge in $page.allPokemon.edges" :key="edge.node.id" :pokemon="edge.node" class="pokemon" />
    </section> -->

  </Layout>
</template>

<script>
import PokemonViewer from '../components/PokemonViewer.vue'
// import PokeNav from '../components/PokeNav.vue'

export default {
  components: {
    PokemonViewer,
    // PokeNav
  },
  metaInfo: {
    title: 'Hello, world!',
  }
}
</script>

<style>

</style>