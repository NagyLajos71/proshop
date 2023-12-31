import {Row, Col} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {

    const [products, setProducts]= useState([]);//initialize state

    useEffect(()=>{
        const fetchProducts= async ()=>{
            const {data} = await axios.get('/api/products');//hence we did set up proxy we dont need the full url path
            setProducts(data);//set state
        };
        fetchProducts();
    },[])//we waant to run only once when the page loads

  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {products.map(
                (product)=>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>//nbr of columns on different screen sizes
                )
            )}
        </Row>
    </>
  )
}

export default HomeScreen;