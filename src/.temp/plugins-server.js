import plugin_gridsome_plugin_tailwindcss_5 from "/home/kyle/Documents/Web-Portfolio/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_5,
    options: {"tailwindConfig":"./tailwind.js","purgeConfig":{"content":["./src/**/*.vue","./src/**/*.js","./src/**/*.jsx","./src/**/*.ts","./src/**/*.tsx","./src/**/*.html","./src/**/*.pug","./src/**/*.md","./src/**/*.svg"],"whitelist":["body","html","img","a","g-image","g-image--lazy","g-image--loaded"]},"presetEnvConfig":{"stage":0},"shouldPurge":true,"shouldImport":true,"shouldTimeTravel":true}
  }
]
