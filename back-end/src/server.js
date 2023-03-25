const express = require ('express');
const app = express ();
require('dotenv').config();

const hostname = process.env.HOST_NAME || 8888;
const port = process.env.PORT || 8888;

// for View
// const configViewEngine = require('./config/viewEngine.js');
// configViewEngine(app);

// routes
const webRoutes = require('./routes/web')
app.use('/',webRoutes);



app.get('/',(req, res) =>{
    res.send("Hello World");
})
app.listen(port,hostname, () => {
    console.log(`Example app listening on port http://${hostname}:${port}/`)
})