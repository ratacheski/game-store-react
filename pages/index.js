import { Container } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (    
    <Container className={styles.main}>
    <h1 className={styles.title}>
      Game Store
    </h1>    
    </Container>
  )
}
