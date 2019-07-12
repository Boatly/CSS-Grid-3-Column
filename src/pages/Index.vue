<template>
  <Layout>
    <h1>Index.vue - Homepage</h1>
    <!-- <nav>
      <p v-for="edge in $page.allPokemon.edges" :key="edge.node.id" class="nav-bar">
        <g-link :to="edge.node.path">
          {{ edge.node.name }}
        </g-link>
      </p>
    </nav> -->

  </Layout>
</template>

<script>
// import PokeNav from '../components/PokeNav.vue'

export default {
  components: {
    // PokeNav
  },
  metaInfo: {
    title: 'Hello, world!',
  }
}
</script>

<style>

</style>