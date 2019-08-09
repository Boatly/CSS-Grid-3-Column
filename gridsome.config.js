// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'PokéTable',
  siteUrl: '',
  plugins: [
    {
      use: '~/src/sources/pokemon',
      options: {
        apiKey: 'key8Gg8ivFTQ0Ji4N',
        base: 'appZe1cLGkbnfFUYb',
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
       tailwindConfig: './tailwind.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
      }
    }
  ]
}
