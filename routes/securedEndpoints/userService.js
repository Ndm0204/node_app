const express = require('../../utils/express');

const router = express.Router();
const validator = require('../../middlewares/validationHandler');
const {
    createFile,createFolder,createUser,getAllAtRootLevel    
} = require('../../gRPCClient/serverCall');

// router.use('/user',validator.validateUserCreateRequest());
router.post('/user', async (req,res)=>{
    console.log('user creation started!');
    const data = req.body;
    const user = await createUser(data);
    res.status(201).json(user); 
});
router.get('/getPosts', async (req,res) =>{
    const maxlimit = req.query.maxlimit;
    const offset = parseInt(req.query.offset)||0;
    const timestamp = req.query.timestamp;
    const response = {};
    response.data =  await getData(maxlimit,offset,timestamp);
    response.timestamp = timestamp || new Date().toISOString();
    res.status(200).json(response);
});

module.exports = router;