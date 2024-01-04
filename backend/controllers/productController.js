import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';


//@desc: fetches all products
//@route: GET /api/products
//@access: Public
const getProducts = asyncHandler (async (req,res) =>{//gets all products
        const products= await Product.find({});//we want all, so we pass empty object.
        res.json(products);//sending json response with products
});

//@desc: fetches 1 product by id
//@route: GET /api/products/:id
//@access: Public
const getProductsById = asyncHandler (async (req,res) =>{//get one product by Id
        const productById=await Product.findById(req.params.id);
        //if there is no product, we want to deal with error
        if(productById){//if product exists
            return res.json(productById);//sending json response for single product
        }
        else{
           res.status(404);
           throw new Error('Resource not found');
        }
});

export {getProducts, getProductsById};