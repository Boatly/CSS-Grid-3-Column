<template>
  <div>
    <ul v-for="mon in $page.pokemon.edges" :key="mon.node.id">
      <a :href="mon.node.path">
        <h4>{{ mon.node.name }}</h4>
        <img :src="mon.node.image_sm" :alt="mon.node.name" />
      </a>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>
