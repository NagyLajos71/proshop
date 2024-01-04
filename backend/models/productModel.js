import mongoose from 'mongoose';

//two schemas: review and product
const reviewSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User",
    },
    name: {
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
},{
    timestamps:true, //addig createdAt timestamp automatically
});

const productSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User",
    },
    name: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    brand:{
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews: [reviewSchema],//this is an other schema, created above
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    numreviews: {
        type: Number,
        required: true,
        default: 0,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    countInStock:{
        type: Number,
        required: true,
        default: 0,
    },
},{
    timestamps:true, //addig createdAt timestamp automatically
});

//Product is the model we are creating with the productSchema
const Product = mongoose.model("Product", productSchema);

export default Product;