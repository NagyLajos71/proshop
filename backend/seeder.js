//this file is completely different from the rest of the App
//we will not bring it in anywhere, but
//running from the command line

import mongoose from 'mongoose';
import dotenv from "dotenv";//because we need the mongo uri
import colors from "colors";//optional
import users from "./data/users.js";

import User from "./models/userModel.js";
import Product from "./models/productModel.js";
//we will ot create any orders, but provides the ability to clean the database clean
import Order from './models/orderModel.js';
//so we can connect to the DB
import connectDB from "./config/db.js";

//initialize .env
dotenv.config();
//connect to database
connectDB();
//creating two functions: importData and destroyData
const importData = async () => {
    try{
        //before creating anything we delete possible previous data
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        //create users
        const createdUsers= await User.insertMany(users);//users=data file
        //get the Admin user
        const adminUser=createdUsers[0]._id;
        //insert products-mapping thru the file
        const sampleProducts=products.map(
            (product)=>{
                //spread operator to add the data
                return {...product, user: adminUser};//return all the product data plus the admin as user
            }
        );
        //enter into database all data that are now stored in database
        await Product.insertMany(sampleProducts);
        console.log("Data imported!".green.inverse);//color package for better visibility
        process.exit();//we dont pass 1 in- because we dont want to kill it
    } catch(error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
 }
const destroytData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log("Data destroyed!".red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
 };

 //how to run these functions?
 if(process.argv[2]==="-d"){
    //we call...
    destroytData();
 }
 else {
    importData();
 }
 //in terminal 
// npm run data:import or npm run data:destroy