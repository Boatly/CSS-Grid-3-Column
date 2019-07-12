<template>
  <Layout>
    <h1>PokéDex</h1>

    <div class="flex">
      <Sidebar />
      <div>
        <ul v-for="mon in $page.pokemon.edges" :key="mon.node.id">
          <h2>{{ mon.node.name }}</h2>
          <img :src="mon.node.image_lg" :alt="mon.node.name" />
          <p>{{ mon.node.description }}</p>
          <p>{{ mon.node.type_1 }}</p>
          <p>{{ mon.node.type_2 }}</p>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Pokemon {
  pokemon: allPokemonEntry {
    edges {
      node {
        name,
        image_sm,
        image_lg,
        description,
        type_1,
        type_2
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
  }
};
</script>

<style>
.flex {
  display: flex;
}
</style>
