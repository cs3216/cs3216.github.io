import clsx from 'clsx';
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout description={siteConfig.tagline}>
      <header className={styles.heroBanner}>
        <div className="container">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <img
                alt="CS3216 logo"
                className={clsx(styles.logo, 'margin-bottom--lg')}
                src={useBaseUrl('/img/cs3216-logo.png')}
              />
              <h1 className={styles.heading}>{siteConfig.tagline}</h1>
              <div className={clsx(styles.buttons, 'margin-top--lg')}>
                <Link
                  className="button button--secondary button--lg"
                  to="/coursework/">
                  View Coursework&nbsp;&nbsp;→
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Layout>
  );
}
