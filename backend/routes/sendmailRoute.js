import express from 'express';

const router = express.Router();

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'propzycamp@gmail.com',
        pass: 'Admin@123456'
    }
});


router.post('/', (req, res) => {
    const { email, name } = req.body;
    console.log("🚀 ~ file: sendmailRoute.js ~ line 18 ~ router.post ~  email, name", email, name)

    let mailOptions = {
        from: 'propzycamp@gmail.com',
        to: 'nguyenthanhtrungltv@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    mailOptions.text = name;
    mailOptions.to = email;

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
    res.send({ "a": 'sss' });
})

export default router;