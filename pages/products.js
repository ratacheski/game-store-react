import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import ProductsFilter from '../components/ProductsFilter';
import styles from '../styles/Products.module.css';

export default function Products({ products }) {
  return (
    <Container className={styles.productsGrid}>
      <Row>
        <ProductsFilter />
      </Row>
      <Row className="mt-3">
        {products.map((product) => {
          return (
            <Col md="4" lg="3" className="pb-3" fluid="sm">
              <ProductCard product={product} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:8080/products');
  const products = await res.json();
  console.log(products);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products,
    },
  };
}
