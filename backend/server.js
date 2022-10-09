const express = require("express");
const mongoose = require('mongoose');
const routeUrls = require("./routes/route")
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const OrderSchema = require('./models/cartModel')

mongoose.connect("mongodb://localhost:27017/amazonDB");

app.use('/api',routeUrls);

app.listen(4000,()=> console.log("server is up and running"))