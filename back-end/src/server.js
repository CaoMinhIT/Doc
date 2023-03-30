const express = require ('express');
const app = express ();

require('dotenv').config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// config request.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

const hostname = process.env.HOST_NAME || 8888;
const port = process.env.PORT || 8888;

// for View
const configViewEngine = require('./config/viewEngine.js');
configViewEngine(app);

// routes
// const webRoutes = require('./routes/web')
// app.use('/',webRoutes);
const authRoutes = require('./routes/auth')
app.use('/v1/auth',authRoutes);



//connection
const connection = require ("../src/config/database");
connection();

app.listen(port,hostname, () => {
    console.log(`Example app listening on port http://${hostname}:${port}/`)
})