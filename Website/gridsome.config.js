// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'CodeGarden2021 Headless Unicore',
  siteUrl: 'http://localhost:8080',
  plugins: [{
    use: '@gridsome/source-graphql',
    options: {
      url: process.env.GRIDSOME_API_BACKEND_URL + '/umbraco/graphql',
      fieldName: 'cms',
      typeName: ''
    }
  }]
}
