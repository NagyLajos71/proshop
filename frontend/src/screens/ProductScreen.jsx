import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Row,Col,Image,ListGroup,Card, Button, ListGroupItem} from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios'; 


function ProductScreen () {
    const {id : productId}=useParams();
    const [product, setProduct]=useState({});//state

  
    useEffect(()=>{
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${productId}`);
            setProduct(data);
        }
        fetchProduct();
    },[productId])//if product Id changes, we want this to run
    
  return (
    <>
        {/*button */}
        <Link className='btn btn-light my-3' to="/">Go Back</Link>
        <Row>
            {/*3 columns on the details page */}
            <Col md={5}>
                {/*image fluid means it can get smaller */}
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={4}>
                <ListGroup variant='flush'>
                    {/*contains name, rating, price */}
                    <ListGroupItem>
                        <h3>{product.name}</h3>
                    </ListGroupItem>
                    <ListGroupItem>
                    <Rating
                    ratingValue={product.rating}
                    ratingText={`${product.numReviews} reviews`}
                  >
                  </Rating>
                    </ListGroupItem>
                    <ListGroupItem>
                        Pice: ${product.price}
                    </ListGroupItem>
                    <ListGroupItem>Description: {product.description}
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>{/*Card wraps price, status, description, add to cart button*/}
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <Row>
                                <Col>Price: </Col>
                                <Col><strong>${product.price}</strong></Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>Status: </Col>
                                {/*terniary expresion*/}
                                <Col><strong>{product.countInStock >0 ? 'In Stock': 'Out of Stock'}</strong></Col>
                            </Row>
                        </ListGroupItem>
                        {/*Add to cart button*/}
                        <ListGroupItem>
                            <Button className='btn-block'
                            type='button'
                            disabled ={product.countInStock === 0}>
                                Add To Cart
                            </Button>

                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
  )
}

export default ProductScreen