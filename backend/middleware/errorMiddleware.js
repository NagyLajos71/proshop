//nofFound Fn will be called when no other middleware could handle the request
const notFound =(re,res,next )=>{
    const error = new error(`Not Found - ${req.originalUrl}`);
    //original url from request object
    res.status(404);
    next(error);
};
//to overwrite the default express error handler we use this Fn
const errorHandler =(err, req, res, next) =>{
    //terniary expression
    //if 200 I want to change to> 500
    //if anything else: res.statusCode (so it will stay the same)
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    //check for (Mongoose) bad object ID
    if(err.name==="CastError" && err.kind ==="ObjectId"){
        message=`Resource not found`;
        statusCode= 404;
    }
    //final response
    res.status(statusCode).json({
        message: message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,//stack trace for developers durning development only
      });
    
};

export {notFound, errorHandler};// we use in server.js