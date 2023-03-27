const express = require ('express');
const app = express ();
require('dotenv').config();

// config request.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

const hostname = process.env.HOST_NAME || 8888;
const port = process.env.PORT || 8888;

// for View
const configViewEngine = require('./config/viewEngine.js');
configViewEngine(app);

// routes
const webRoutes = require('./routes/web')
app.use('/',webRoutes);


//connection
const connection = require ("../src/config/database");
connection();



// app.get('/',(req, res) =>{
//     res.send("Hello World");
// })
app.listen(port,hostname, () => {
    console.log(`Example app listening on port http://${hostname}:${port}/`)
})