require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

require('./config/bootstrap')(app);


app.listen(port, ()=> {
    console.log('Application is running');
})

