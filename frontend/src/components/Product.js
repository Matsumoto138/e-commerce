import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Rating from './Rating'

function Product(props) {
    const { product } = props
    return (

        <Card className="product">
            <Link to={`/product/${product.slug}`}>
                <img
                    style={{ maxWidth: "300px" }}
                    src={product.image}
                    className='card-img-top'
                    alt={product.name}
                />
            </Link>
                <Card.Body>
                    <Link to={`/product/${product.slug}`}>
                        <Card.Title>{product.name}</Card.Title>
                    </Link>
                    <Rating rating={product.rating} numReviews={product.numReviews} />
                    <Card.Text>
                        <strong>{product.price}₺</strong>
                    </Card.Text>
                    <Button className='btn btn-dark'>Sepete Ekle</Button>
                </Card.Body>
            
        </Card>
    )
}

export default Product