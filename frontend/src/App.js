import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {Navbar, Container, NavbarBrand, Nav, Badge} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';

function App() {
  const {state} = useContext(Store)
  const {cart} = state
  return (
    <div className="App">
      <header>
        <Navbar bg="light" variant='light' >
          <Container>
            <LinkContainer to='/'>
              <NavbarBrand>Tech Store</NavbarBrand>
            </LinkContainer>
            <Nav className='me-auto'>
              <Link to='/cart' className='nav-link'> 
                Cart
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a,c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
            </Nav>
          </Container>
        </Navbar>

      </header>
      <main>
        <Routes>
          <Route path='/product/:slug' element={<ProductScreen />} />
          <Route path='/' element={<HomeScreen />} />
          <Route path='/cart' element={<CartScreen />} />
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
