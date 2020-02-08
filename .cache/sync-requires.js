const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-contador-js": hot(preferDefault(require("/home/silva/Documents/projects/imobiliaria/src/templates/contador.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/silva/Documents/projects/imobiliaria/src/pages/index.js")))
}

