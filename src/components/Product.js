import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from './Layout'
import styles from '../styles/product.module.css'
import {getProductPrice} from '../pages/index'

const Product = ({ image, product, productId }) => {
  const { title } = product;
  const price = getProductPrice(product);
  return (
    <div className={styles.container}>
      {image && (
        <div className={styles.image}>
          <Img fluid={image.fluid} />
        </div>
      )}
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>${price}</p>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
        />
      </div>
    </div>
  );
};

export default ({data}) => {
  const product = data.takeshape.product
  return (
    <Layout>
      <Product {...product} />
    </Layout>
  )
}

export const query = graphql`
  query($productId: ID!) {
    takeshape {
      product: getProduct(_id: $productId) {
        image {
          path
          title
          description
          fluid(maxWidth: 800, maxHeight: 1200) {
            ...GatsbyTakeShapeImageFluid
          }
        }
        productId: takeshapeIoShopId
        product: takeshapeIoShop {
          title
          descriptionHtml
          variants(first: 1) {
            edges {
              node {
                price
              }
            }
          }
        }
      }
    }
  }
`
