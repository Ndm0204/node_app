const express = require('../../utils/express');

const router = express.Router();
const validator = require('../../middlewares/validationHandler');
const {
    createFile,createFolder,createUser,getAllAtRootLevel,moveFiletoAnotherFolder,getUser, deleteFile
} = require('../../gRPCClient/serverCall');
const req = require('express/lib/request');

async function createDocument(body,owner){
    console.log('executing method: createDocument');
    body.parent = '';
    body.owner = owner;
    console.log(body);
    if(body.content){
        //file creation at root level
        const file = await createFile(body);
        return file;
    }
    //folder creation
    const folder = await createFolder(body);
    return folder;
}
// router.use('/user',validator.validateUserCreateRequest());
router.post('/user', async (req,res)=>{
    console.log('user creation started!');
    const data = req.body;
    const user = await createUser(data);
    res.status(201).json(user); 
});
router.get('/user/:username',async (req,res)=>{
    const query = {
        username: req.params.username
    };
    const user = await getUser(query);
    res.status(200).json(user); 
})
//get all data for user
router.get('/user/:userid/data', async (req,res) =>{
    console.log('fetching all documents!');
    const query = {
        owner: req.params.userid
    }
    const allData = await getAllAtRootLevel(query);
    res.status(200).json(allData);

});

router.post('/user/:userid',async (req,res)=>{
    console.log('creating document');
    const document = await createDocument(req.body,req.params.userid);
    res.status(201).json(document);
})

router.patch('/user/:userid/file/:fileid', async(req,res)=>{
    console.log('moving file to another folder');
    const data = {
        _id: req.params.fileid,
        parent: req.body.folderId
    }
    await moveFiletoAnotherFolder(data);
    res.status(204).json();
})

router.delete('/user/:userid/file/:fileid', async(req,res)=>{
    console.log('deleting file');
    const data = {
        _id: req.params.fileid,
    }
    await deleteFile(data);
    res.status(204).json();
})
module.exports = router;