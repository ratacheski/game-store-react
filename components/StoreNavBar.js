import { Container, Navbar } from 'react-bootstrap';

const StoreNavBar = () => (
  <Navbar className="navbar-dark bg-dark">
    <Container className="container-fluid justify-content-start">
      <a className="navbar-brand" href="/">
        Game Store
      </a>
      <a className="navbar-brand" href="products">
        Products
      </a>
    </Container>
  </Navbar>
);

export default StoreNavBar;
