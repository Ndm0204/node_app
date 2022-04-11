const express = require('../../utils/express');

const router = express.Router();
const validator = require('../../middlewares/validationHandler');
// router.use(validator.validateRequest());

router.get('/getPosts', async (req,res) =>{
    const maxlimit = req.query.maxlimit;
    const offset = parseInt(req.query.offset)||0;
    const timestamp = req.query.timestamp;
    const response = {};
    response.data =  await getData(maxlimit,offset,timestamp);
    response.timestamp = timestamp || new Date().toISOString();
    res.status(200).json(response);
});

router.post('/postService', async (req,res) =>{
    await insertData(req.body);
    res.status(201);
    res.send({message:'post inserted successfully'});
});

module.exports = router;