module.exports = {
  pathPrefix: '/api-playground',
  siteMetadata: {
    title: 'Ethereum Custodian API',
    description: 'API for Ethereum Custodians',
    logoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0StI_jeguVNslskUuiqljELX9cAZMq9YIdftuAIfDpTtPCViYV3xiAkTYjKpNvAKHhno&usqp=CAU',
    primaryColor: '#3f51b5', // material-ui primary color
    secondaryColor: '#f50057', // material-ui secondary color
    author: '',
    menuLinks: [
      {
        name: 'home',
        link: '/',
        ignoreNextPrev: true,
      },
      {
        name: 'API Documentation',
        link: '/api-documentation',
      },
    ],
    footerLinks: [
      {
        name: 'OpenRPC',
        link: 'https://open-rpc.org',
      },
    ],
  },
  plugins: [
    '@xops.net/gatsby-openrpc-theme',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'pristine-site',
        short_name: 'pristine-site',
        start_url: '/',
        background_color: 'transparent',
        theme_color: '#3f51b5',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
