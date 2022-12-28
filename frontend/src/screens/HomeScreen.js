import React, {useState, useEffect} from 'react'
//import data from '../data'
import { Link } from 'react-router-dom'
import axios from 'axios'

function HomeScreen() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      const result = await axios.get("/api/products")
      setProducts(result.data)
      
    }
    fetchData()
  })

  return (
    <div>
        <h1>Featured Product</h1>
        <div className="products">
        {
          products.map((product) =>
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