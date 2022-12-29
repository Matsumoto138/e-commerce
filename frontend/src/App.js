import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {Navbar, Container, NavbarBrand} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="light" variant='light' >
          <Container>
            <LinkContainer to='/'>
              <NavbarBrand>Tech Store</NavbarBrand>
            </LinkContainer>
          </Container>
        </Navbar>

      </header>
      <main>
        <Routes>
          <Route path='/product/:slug' element={<ProductScreen />} />
          <Route path='/' element={<HomeScreen />} />
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
