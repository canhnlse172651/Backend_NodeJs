
require('dotenv').config() 
const express = require('express');
const connection = require('./config/database')
const configViewEngine = require('./config/viewEngine')

const webRoutes = require('./routes/web')

const app = express();
const port = process.env.PORT || 8888;
const hotname = process.env.HOST_NAME;

// config red.body
app.use(express.json()) //for json
app.use(express.urlencoded({extended : true})) // for form data

// declare routes

app.use('/',webRoutes)



// config tempate engine view and static file

configViewEngine(app);


app.listen(port,hotname, () => console.log(`Example app is listening on port ${port}`));