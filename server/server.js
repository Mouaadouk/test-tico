const express = require('express');
const app = express();
const mongoose = require('mongoose');
const api = require('./api')
var cors = require("cors");

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use("/api",api)



const db = 'mongodb://localhost/StageDb';



mongoose.connect(db,{ useNewUrlParser: true });

mongoose.connection.once("open",()=> console.log('mongodb is connected'))
.on("error",()=> console.log('error..! mongodb is not connected.'))

const port  = process.env.PORT || 5000
app.listen(port, ()=> console.log("server listing on port 5000") )