import express from 'express';
import dotenv from 'dotenv';
dotenv.config();//we need to config before use!
import { notFound, errorHandler } from './middleware/errorMiddleware.js';//error handling
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
const port =process.env.PORT || 5000;//fallback value if sg goes wrong

connectDB();//connect to MongoDB
const app=express();
//basic route
app.get('/', (req, res)=>{
    res.send("API is running")
});

app.use('/api/products', productRoutes);
//two error handlers:
app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=>{console.log(`server running on port ${port}`)})