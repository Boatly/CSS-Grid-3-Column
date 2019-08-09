<template>
  <div>
    <ul>
      <li v-for="mon in $page.pokemon.edges" :key="mon.node.id" :class="addTypeClass(mon)" class="w-full flex justify-center">
        <g-link :to="mon.node.path">
          <img :src="mon.node.image_sm" :alt="mon.node.name" class="h-16" />
          <h4>{{ mon.node.name }}</h4>
        </g-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    addTypeClass(mon) {
      var monType = mon.node.type_1.toLowerCase();
      var typeClass = "bg-" + monType;

      return typeClass;
    }
  }
};
</script>
