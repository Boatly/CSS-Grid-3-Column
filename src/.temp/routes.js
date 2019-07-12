export default [
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/kyle/Documents/Web-Portfolio/src/pages/Index.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/kyle/Documents/Web-Portfolio/node_modules/gridsome/app/pages/404.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/poke-dex",
    component: () => import(/* webpackChunkName: "page--src--pages--poke-dex-vue" */ "/home/kyle/Documents/Web-Portfolio/src/pages/PokéDex.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/pokemon/:name",
    component: () => import(/* webpackChunkName: "page--src--templates--pokemon-entry-vue" */ "/home/kyle/Documents/Web-Portfolio/src/templates/PokemonEntry.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/kyle/Documents/Web-Portfolio/node_modules/gridsome/app/pages/404.vue"),
    meta: {
      data: true
    }
  }
]

