const express = require('../../utils/express');

const router = express.Router();
const validator = require('../../middlewares/validationHandler');
const {
    createFile,getAllFilesWithinFolder,deleteFolder    
} = require('../../gRPCClient/serverCall');

// router.use('/user/:userid/folder/:folderId',)
router.get('/user/:userid/folder/:folderId', async(req,res)=>{
    console.log('getting All files from folder');
    const data = {
        _id: req.params.folderId,
    }
    const files = await getAllFilesWithinFolder(data);
    res.status(200).json(files);
});

router.post('/user/:userid/folder/:folderId', async (req,res)=>{
    req.body.owner = req.params.userid;
    req.body.parent = req.params.folderId;
    const file = await createFile(req.body);
    res.status(201).json(file); 
});

router.delete('/user/:userid/folder/:folderId', async(req,res)=>{
    console.log('Deleting folder');
    const data = {
        _id: req.params.folderId,
    }
    await deleteFolder(data);
    res.status(204).json();
});
module.exports = router;