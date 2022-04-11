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
    console.log('creating folder');
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
    console.log('creating file');
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
    console.log('getting all documents at root level');
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
    console.log('getting all files within folder');
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
    console.log('executing method: moveFiletoAnotherFolder');
    return new Promise((resolve,reject)=>{
        client.moveFile(data, (err,file)=>{
            if(err) reject(err);
            else resolve(file);
        })
    });  
}   
function deleteFile(data){
    console.log('executing method: deleteFile');
    return new Promise((resolve,reject)=>{
        client.deleteFile(data, (err,allFiles)=>{
            if(err) reject(err);
            else resolve(allFiles);
        })
    });  
}

function createUser(data){
    console.log('executing method: reateUser');
    return new Promise((resolve,reject)=>{
        client.createUser(data,(err,user)=>{
            if(err) reject(err);
            else resolve(user);
        })
    })
}
function getUser(data){
    console.log('executing method: getUser');
    return new Promise((resolve,reject)=>{
        client.getUser(data,(err,user)=>{
            if(err) reject(err);
            else resolve(user);
        })
    })
}    
function getFolder(data){
    console.log('executing method: getFolder');
    return new Promise((resolve,reject)=>{
        client.getFolder(data,(err,folder)=>{
            if(err) reject(err);
            else resolve(folder);
        })
    })
}        
function deleteFolder(data){
    console.log('executing method: deleteFolder');
    return new Promise((resolve,reject)=>{
        client.deleteFolder(data,(err,folder)=>{
            if(err) reject(err);
            else resolve(folder);
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
    createUser,
    getUser,
    getFolder,
    deleteFolder,
}    