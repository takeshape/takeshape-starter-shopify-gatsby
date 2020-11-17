const slugify = require(`slugify`)

exports.products = function (name) {
  const slug = slugify(name.toLowerCase())
  return `/products/${slug}/`
}