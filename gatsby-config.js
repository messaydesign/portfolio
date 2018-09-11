module.exports = {
  siteMetadata: {
    title: 'Messay\' Portfolio',
    siteUrl: `https://www.messay.design`,
    description: `Online portfolio for Messay F. Denbel`,
    author: 'MessayDenbel',
    image: './images/meta-hero.jpg',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-101394601-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "messay.design",
      },
    },
  ],

}


  