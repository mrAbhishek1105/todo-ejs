import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import dbconnect from "./db/dbconnect.js";
import homeroute from './routes/homeroute.js'

const app = express();
const PORT = 3000;
const url = "mongodb://localhost:27017/newtodo";

dbconnect(url);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}))


app.use('/', homeroute);

app.listen(PORT,()=>{
    console.log(`Server is Running at PORT : ${PORT}`);
})