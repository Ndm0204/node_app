const {
    getClient
} = require('./client');

const client = getClient();
// client.createFolder({
    //     name:'folder',
    //     parent:'',
    //     owner:'54f0d030-b8cc-11ec-a40b-2940da2a6b83'},(err,data)=>{
    //     if(err) throw err;
    //     console.log(data);
        
    // })
function createFolder(data){
    return new Promise((resolve,reject)=>{
        client.createFolder(data, (err,folder)=>{
            if(err) reject(err);
            else resolve(folder);
        })
    });   
}
// client.createFile({
    //     name:'file3',
    //     content:'Testing this application 2',
    //     parent:'',
    //     owner:'54f0d030-b8cc-11ec-a40b-2940da2a6b83'
    //     },(err,data)=>{
    //         if(err) throw err;
    //         console.log(data);}
    // )
function createFile(data){
    return new Promise((resolve,reject)=>{
        client.createFile(data, (err,file)=>{
            if(err) reject(err);
            else resolve(file);
        })
    });   
}
// client.getAll({
    //     owner:'54f0d030-b8cc-11ec-a40b-2940da2a6b83'
    // },(err,data)=>{
    //     if(err) throw err;
    //     console.log(data);
    // })
function getAllAtRootLevel(data){
    return new Promise((resolve,reject)=>{
        client.getAll(data, (err,allData)=>{
            if(err) reject(err);
            else resolve(allData);
        })
    });   
}
// client.getFiles({_id:'2cd6e9c0-b95a-11ec-87f4-6b3146739266'},
    // (err,data)=>{
    //     if(err) console.log(err);
    //     console.log(data);
    // })
function getAllFilesWithinFolder(data){
    return new Promise((resolve,reject)=>{
        client.getFiles(data, (err,allFiles)=>{
            if(err) reject(err);
            else resolve(allFiles);
        })
    });  
}
// client.moveFile({
    //     _id:'ab6b2110-b95b-11ec-92c9-b5abfc444e63',
    //     parent:'2cd6e9c0-b95a-11ec-87f4-6b3146739266'
    // },(err,data)=>{
    //     if(err) console.log('error while moving file');
    //     console.log(data);
    // })    
function moveFiletoAnotherFolder(data){
    return new Promise((resolve,reject)=>{
        client.moveFile(data, (err,file)=>{
            if(err) reject(err);
            else resolve(file);
        })
    });  
}   
function deleteFile(data){
    return new Promise((resolve,reject)=>{
        client.deleteFile(data, (err,allFiles)=>{
            if(err) reject(err);
            else resolve(allFiles);
        })
    });  
}

function createUser(data){
    return new Promise((resolve,reject)=>{
        client.createUser(data,(err,user)=>{
            if(err) reject(err);
            else resolve(user);
        })
    })
}
    
    
module.exports={
    createFolder,
    createFile,
    getAllAtRootLevel,
    getAllFilesWithinFolder,
    moveFiletoAnotherFolder,
    deleteFile,
    createUser
}    