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
//get all data for user
router.get('/user/:userid/data', async (req,res) =>{
    const query = {
        owner: req.params.userid
    }
    const allData = await getAllAtRootLevel(query);
    res.status(200).json(allData);

});

module.exports = router;