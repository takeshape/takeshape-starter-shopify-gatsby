import React, { useState } from "react";
import logo from './TakeShape.png'
import styles from "../styles/banner.module.css";

const ComingSoon = () => <span className={styles.comingSoon}>Coming soon</span>;

const Banner = () => {
  const [visible, setVisible] = useState(true);
  return (
    <aside className={`${styles.container} ${!visible ? styles.hidden : ""}`}>
      <div className={styles.inner}>
        <div className={styles.logos}>
          <img
            className={styles.logo}
            width={64}
            height={64}
            src={logo}
            alt="TakeShape logo"
          />
        </div>
        <div className={styles.text}>
          <p>
            <span role="img" aria-label="Waving hand emoji">👋</span> &nbsp; Hey there! <a href='https://takeshape.io'>TakeShape</a>{" "}
            here.
          </p>
          <p>
            We built this sample project to show off TakeShape's experimental
            new Shopify integration. <span role="img" aria-label="Shopping bag emoji">🛍</span> &nbsp; Now you can use TakeShape to
            create rich e-commerce experiences on the Jamstack with the services
            you're already using. This project is built with{" "}
            <a href='https://gatsbyjs.org'>Gatsby</a> and deployed to{" "}
            <a href='https://netlify.com'>Netlify</a>.
          </p>
          <p></p>
          <p>Interested in building something like this?</p>
          <ol>
            <li>
              <a href='mailto:contact@takeshape.io?subject=Mesh%20Beta%20Request'>
                Request early access to the TakeShape Mesh beta
              </a>
            </li>
            <li>
              <ComingSoon /> Explore the repository in GitHub
            </li>
            <li>
              <ComingSoon /> Deploy this project to{" "}
              <a href='https://takeshape.io'>
                TakeShape
              </a>{" "}
              and to{" "}
              <a href='https://netlify.com'>
                Netlify
              </a>
            </li>
            <li>
              <ComingSoon /> Follow our walkthrough article to build this
              yourself
            </li>
          </ol>
        </div>
      </div>
      <button className={styles.button} onClick={() => setVisible(false)}>
        Hide
      </button>
    </aside>
  );
};

export default Banner;
