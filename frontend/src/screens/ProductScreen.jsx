//the id is getting from the URL with hook called useParams
import {useParams} from 'react-router-dom';
// fake temporary data
import products from '../products';
//for back link (Go back button)
import {Link} from 'react-router-dom';
import {Row,Col,Image,ListGroup,Card, Button, ListGroupItem} from 'react-bootstrap';
import Rating from '../components/Rating'; //Rating component with stars

function ProductScreen() {
    //getting the ID from URL and rename it to productId
    const {id : productId}=useParams();
    //fining the right product in an array
    //where thr product's ID is the same as the ID in the URL
    const product =products.find(
        (p)=>p._id === productId
    );
    
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