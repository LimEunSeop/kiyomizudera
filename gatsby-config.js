module.exports = {
  siteMetadata: {
    siteUrl: 'https://limeunseop.github.io/kiyomizudera',
    title: 'kiyomizudera',
  },
  pathPrefix: '/kiyomizudera',
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/images\/.*?\.svg/,
        },
      },
    },
  ],
}
