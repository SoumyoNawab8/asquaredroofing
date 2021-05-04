require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const path = require("path");
const sendRouter = require('./routes/send')


app.use(cors());
app.use(express.json());

if(process.env.NODE_ENV === "production")
    app.use(express.static("client/build"));

app.use('/', sendRouter);


app.listen(port, () => console.log(`listening on port ${port}`));