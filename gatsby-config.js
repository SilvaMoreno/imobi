module.exports = {
    siteMetadata: {
        title: "Imobi Moveis Planeados"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-postcss",
        {
            resolve: "gatsby-plugin-purgecss",
            options: {
                printRejected: true,
                tailwind: true
            }
        }
    ]
};
