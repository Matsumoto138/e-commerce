import './App.css';
import data from './data'

function App() {
  return (
    <div className="App">
      <header>
        <a href="/">Tech Store</a>
      </header>
      <main>
        <h1>Featured Product</h1>
        <div className="products">
        {
          data.products.map((product) =>
            (<div key={product.slug} className="product">
              <a href={`/product/${product.slug}`}>
              <img style={{maxWidth:'300px'}} src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
              <a href={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </a>
                <p><strong>{product.price}₺</strong></p>
              </div>
            </div>)
          )
        }
        </div>
      </main>
    </div>
  );
}

export default App;
