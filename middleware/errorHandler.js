const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
   const statusCode =  res.statusCode ? res.statusCode : 500;
   res.json({message:err.message , stackTrace : err.stack}); 
   switch(statusCode) {
    case constants.VALIDATION_ERROR: {
        res.json({
            title:"Validation Error",
            err:err.message,
            stackTrace:err.stack
        })
        break;
    }
    case constants.NOT_FOUND: {
        res.json({
            title:"Not Found",
            err:err.message,
            stackTrace:err.stack
        })
        break;
    }
    case constants.FORBIDDEN: {
        res.json({
            title:"Forbidden Error",
            err:err.message,
            stackTrace:err.stack
        })
        break;
    }
    case constants.UNAUTHORIZED: {
        res.json({
            title:"Unauthorized Error",
            err:err.message,
            stackTrace:err.stack
        })
        break;
    }
    case constants.SERVER_ERROR: {
        res.json({
            title:"Server Error",
            err:err.message,
            stackTrace:err.stack
        })
        break;
    }
    default :
        console.log("no error all good !"); 
        break;
   }
}

module.exports = errorHandler;