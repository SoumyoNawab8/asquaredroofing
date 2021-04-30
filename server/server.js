require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const nodemailer = require('nodemailer');

app.use(express.json());

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

app.post('/send', (req, res) => {
    let mailOptions = {
        from: 'baiterxrs@gmail.com',
        to: 'baiterxrs@gmail.com',
        subject: 'Testing',
        text: req.body.message
    }
   
    transporter.sendMail(mailOptions, function(err, data) {
        if(err)
            res.send('Message failed to send.');
        else
            res.status(200).send('Message sent.');
    });
    
});

app.listen(port, () => console.log(`listening on port ${port}`));