import React from "react"
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import styles from '../styles/index.module.css'
import routes from '../routes'

export const query = graphql`
  fragment image on TS_Asset {
    title
    description
    path
  }

  fragment product on TS_Product {
    _id
    name
    image {
      ...image
      fluid(maxWidth: 400, maxHeight: 400) {
        ...GatsbyTakeShapeImageFluid
      }
    }
    shopifyProductId: takeshapeIoShopId
    shopifyProduct: takeshapeIoShop {
      title
      variants(first: 1) {
        edges {
          node {
            price
          }
        }
      }
    }
  }

  query HomepageQuery {
    takeshape {
      looks: getLookList {
        items {
          _id
          name
          text
          photo {
            ...image
            fluid(maxWidth: 900, maxHeight: 1200) {
              ...GatsbyTakeShapeImageFluid
            }
          }
          products {
            ...product
          }
        }
      }
    }
  }
`

export function getProductPrice(product) {
  const { variants } = product;
  const firstNode = variants?.edges[0]?.node;
  const price = firstNode?.price;
  return price;
}

const Product = ({ _id, name, image, shopifyProductId, shopifyProduct }) => {
  const { title } = shopifyProduct;
  const price = getProductPrice(shopifyProduct);
  return (
    <div className={styles.product}>
      {image && (
        <Link className={styles.productImage} to={routes.products(name)}>
          <Img fluid={image.fluid} />
        </Link>
      )}
      <div className={styles.productLabel}>
        <p className={styles.productTitle}><Link to={routes.products(name)}>{title}</Link></p>
        {price && <p className={styles.productPrice}>${price}</p>}
      </div>
    </div>
  );
};

const Look = ({ photo, text, products }) => {
  return (
    <div className={styles.look}>
      <div className={styles.photo}>
        <Img fluid={photo.fluid} />
      </div>
      <div className={styles.details}>
        <p className={styles.text}>{text}</p>
        <div>
          {products.map((product) => (
            <Product {...product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

const IndexPage = ({data}) => (
  <Layout>
    <div className={styles.container}>
      {data.takeshape.looks.items.map((look) => (
        <Look key={look._id} {...look} />
      ))}
    </div>
  </Layout>
)

export default IndexPage
