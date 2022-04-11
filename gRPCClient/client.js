const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDef =  protoLoader.loadSync('DMS.proto', {});
const grpcObject =  grpc.loadPackageDefinition(packageDef);
const DMSPackage = grpcObject.DMSPackage;

let client = null;
function getClient(){
    try{
        if(client) return client;
        client = new DMSPackage.DMSService('localhost:40000', grpc.credentials.createInsecure());
        return client;
    }catch(err){
        console.log(err);
        throw new Error('Server Connection failed');
    }
}
module.exports = {
    getClient,
}