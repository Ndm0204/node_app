
const {
    REQUEST_METHOD_TYPE_POST,
    REQUEST_METHOD_TYPE_GET
} = require('../utils/constants');

function validatePayload(req){
    let bValue = !req.body || !req.body.title || !req.body.content;
    return bValue;
}
function validateURLParams(req){
    let bValue = true;
    //we can add here additional checks on params
    return bValue;
}
function validateRequest(){
    return (req, res, next) => {
        if(req.method === REQUEST_METHOD_TYPE_GET && validateURLParams(req) ){
            console.log('payload validation successfull for GET call');
            next();
        }
        else if(req.method === REQUEST_METHOD_TYPE_POST && !validatePayload(req) ){
            console.log('payload validation successfull for POST call');
            next();
        }
        else{
            console.log(`Validation failed for the ${req.method}`);
            res.status(400).json( { message:'Bad Request' } );
        }

    }
}

module.exports={
    validateRequest
}