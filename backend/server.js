import express from 'express';
import dotenv from 'dotenv';
dotenv.config();//we need to config before use!
import products from './data/products.js';

const port =process.env.PORT || 5000;//fallback value if sg goes wrong

const app=express();
//basic route
app.get('/', (req, res)=>{
    res.send("API is running")
});
//serving all the products
app.get('/api/products', (req, res)=>{
    res.json(products);//sending json response with products
});
//serving a single product, :id is a placeholder 
app.get('/api/products/:id', (req, res)=>{
    const productById=products.find(
    (p)=>p._id === req.params.id
    );
    res.json(productById);//sending json response for single product
});

app.listen(port, ()=>{console.log(`server running on port ${port}`)})