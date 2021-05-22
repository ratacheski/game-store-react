import React from 'react'
import { Container } from 'react-bootstrap'
import styles from '../styles/Products.module.css'

export default function products() {
    return (
        <Container className={styles.main}>
            <h1 className={styles.title}>
                Products
            </h1>    
        </Container>
    )
}
