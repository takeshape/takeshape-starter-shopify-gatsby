import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Banner from "./Banner"
import * as styles from "../styles/layout.module.css"

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Helmet>
          <meta charSet="utf-8" />
          <title>TakeShape Shopify Lookbook</title>
          <style>{`
            body {
              margin: 0;
            }
          `}</style>
      </Helmet>
      <Banner />
      <header className={styles.header}>
        <Link className={styles.appName} to="/">Lookbook</Link>
      </header>
      {children}
    </div>
  )
}