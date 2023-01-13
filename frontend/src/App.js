import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {Navbar, Container, NavbarBrand, Nav, Badge, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import ShippingAdressScreen from './screens/ShippingAdressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';

function App() {
  const {state, dispatch: ctxDispatch} = useContext(Store)
  const {cart, userInfo} = state

  const signoutHandler = () =>{
    ctxDispatch({type: 'USER_SIGNOUT'})
    localStorage.removeItem('userInfo')
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  }

  return (
    <div className="App">
      <header>
        <Navbar bg="light" variant='light' expand="lg" >
          <Container>
            <LinkContainer to='/'>
              <NavbarBrand>Tech Store</NavbarBrand>
            </LinkContainer>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto  w-100  justify-content-end">
                  <Link to="/cart" className="nav-link">
                    Cart
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                    </Link>
                    {userInfo ? (
                    <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </NavDropdown>
                  ) : (
                    <Link className="nav-link" to="/signin">
                      Sign In
                    </Link>
                  )}
                </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>

      </header>
      <main>
        <Routes>
          <Route path='/product/:slug' element={<ProductScreen />} />
          <Route path='/' element={<HomeScreen />} />
          <Route path='/cart' element={<CartScreen />} />
          <Route path='/signin' element={<SigninScreen />} />
          <Route path='/shipping' element={<ShippingAdressScreen />} />
          <Route path='/signup' element={<SignupScreen />} />
          <Route path="/payment" element={<PaymentMethodScreen />} />
          <Route path="/placeorder" element={<PlaceOrderScreen />} />
          <Route path="/order/:id" element={<OrderScreen />} />
          <Route path="/orderhistory" element={<OrderHistoryScreen />} />
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
