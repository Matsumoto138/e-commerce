import React from 'react'
import data from '../data'
import { Link } from 'react-router-dom'

function HomeScreen() {
  return (
    <div>
        <h1>Featured Product</h1>
        <div className="products">
        {
          data.products.map((product) =>
            (<div key={product.slug} className="product">
              <Link to={`/product/${product.slug}`}>
              <img style={{maxWidth:'300px'}} src={product.image} alt={product.name} />
              </Link>
              <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
                <p><strong>{product.price}₺</strong></p>
                <button>Sepete Ekle</button>
              </div>
            </div>)
          )
        }
        </div>
    </div>
  )
}

export default HomeScreen