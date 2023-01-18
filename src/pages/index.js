import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import testpage from './test-page';
import {Container, Col, Row, } from "react-bootstrap"


import styles from './index.module.css';

function HomepageHeader() {

  return (
          <section>
            <Container className= ".home-section">
            <Container className= ".homeHeader">
              <Row className= ".homeHeader">
              <span></span>
                <span></span>
                <span></span>
                  <h1> Laurel Public Schools 

                  </h1>
                  </Row>
            </Container>
            </Container>
            </section>
            
  )
}



export default function Home() {
  //const {siteConfig} = useDocusaurusContext();
  return (

      <HomepageHeader />

  );
}
