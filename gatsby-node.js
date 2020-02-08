const path = require("path");

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const contadorTemplate = path.resolve("src/templates/contador.js");

    [1, 2, 3, 4, 5, 6].forEach(page => {
        createPage({
            path: "/contador-" + page,
            component: contadorTemplate,
            context: {
                page
            }
        });
    });
};
