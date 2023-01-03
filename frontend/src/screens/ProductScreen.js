import React, { useContext, useEffect, useReducer } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import logger from "use-reducer-logger";
import { Row, Col, ListGroup, ListGroupItem, Container, Card, Badge, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { Store } from "../Store";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  const navigate = useNavigate()
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(logger(reducer), {
    product: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [slug]);
  
  const {state, dispatch: ctxDispatch} = useContext(Store)
  const {cart} = state
  const addToCartHandler = async () =>{
    const existItem = cart.cartItems.find((x) => x._id === product._id )
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const {data} = await axios.get(`/api/products/${product._id}`)
    if (data.countInStock < quantity) {
      window.alert = ('Sorry. Product is out of stock')
      return
    }
    ctxDispatch({type:'CART_ADD_ITEM', payload: {...product, quantity}})
    navigate('/cart')
  }

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant='danger'>{error}</MessageBox>
  ) : (
    <Container className="mt-3">
      <Row>
        <Col md={6}>
          <img className="w-50" src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h1>{product.name}</h1>
            </ListGroupItem>
            <ListGroupItem>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </ListGroupItem>
            <ListGroupItem>
              Price: {product.price}₺
            </ListGroupItem>
            <ListGroupItem>
              Description: {product.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>{product.price}₺</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Stock:</Col>
                  <Col>{product.countInStock>0?
                    
                    <Badge bg="success">{product.countInStock}</Badge>
                    :<Badge bg="danger">Unavailable</Badge>
                  }</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                {product.countInStock > 0 && (
                  <ListGroupItem>
                    <div className="d-grid">
                      <Button onClick={addToCartHandler} variant="dark">
                        Add to Cart
                      </Button>
                    </div>
                  </ListGroupItem>
                )}
              </ListGroupItem>
            </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductScreen;
