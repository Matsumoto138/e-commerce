import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <div className="App">
      <header>
        <a href="/">Tech Store</a>
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
