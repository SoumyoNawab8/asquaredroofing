const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

router.post('/send', (req, res) => {
    // let mailOptions = {
    //     from: 'baiterxrs@gmail.com',
    //     to: 'baiterxrs@gmail.com',
    //     subject: 'Testing',
    //     text: req.body.message
    // }
   
    // transporter.sendMail(mailOptions, function(err, data) {
    //     if(err)
    //         res.send('Message failed to send.');
    //     else
    //         res.status(200).send('Message sent.');
    // });
    res.send("received");
});


module.exports = router;