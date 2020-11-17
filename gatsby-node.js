const path = require(`path`)
const routes = require(`./src/routes`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      takeshape {
        products: getProductList {
          items {
            _id
            name
          }
        }
      }
    }
  `)

  data.takeshape.products.items.forEach(({ _id, name }) => {
    actions.createPage({
      path: routes.products(name),
      component: path.resolve(`./src/components/Product.js`),
      context: {
        productId: _id,
      },
    })
  })
}