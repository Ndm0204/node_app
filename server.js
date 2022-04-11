const express = require('./utils/express');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 5000;

// support parsing of application/json type post data
app.use(express.json());
app.use(errorHandler);
app.use('/DMS/api/v1', require('./routes/unsecuredEndpoints/api_v1'));
app.use('/DMS/api/v1',require('./routes/securedEndpoints/userService'));
app.use('/DMS/api/v1',require('./routes/securedEndpoints/folderService'));

app.listen(port, async () =>{
    console.log(`App is running on port: ${port}`);
})