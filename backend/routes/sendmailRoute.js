import express from 'express';
import nodemailer from 'nodemailer';
import config from '../config.js';

import { EmailTemplate, EmailTemplate2, EmailTemplate3 } from '../../EmailTemplates/index.js';

const router = express.Router();

const configEmailUser = config.SYSTEM_EXTERNAL_EMAIL_USER;
const configEmailPassword = config.SYSTEM_EXTERNAL_EMAIL_PWD;
const configEmailFrom = config.SYSTEM_EXTERNAL_EMAIL_FROM;

const transporter = nodemailer.createTransport({
  host: 'smtp.mailgun.org',
  port: 587,
  secure: false, // use TLS
  auth: {
    user: configEmailUser,
    pass: configEmailPassword,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// verify connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

router.post('/', (req, res) => {
  const {
    name, user, coupon, email,
  } = req.body;

  const mailOptions = {
    from: configEmailFrom,
    to: email,
    envelope: {
      from: configEmailFrom,
      to: email,
    },
    subject: 'PROPZY COUPON',
    text: name,
    html: EmailTemplate({ user, coupon }),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.send({ message: 'success' });
    }
  });
});

router.post('/type2', (req, res) => {
  const { user, coupons = [] } = req.body;

  const mailOptions = {
    from: configEmailFrom,
    to: user.email,
    envelope: {
      from: configEmailFrom,
      to: user.email,
    },
    subject: 'PROPZY COUPON',
    html: EmailTemplate2({ user, coupons }),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.send({ message: 'success' });
    }
  });
});
router.post('/type3', (req, res) => {
  const { user } = req.body;

  const mailOptions = {
    from: configEmailFrom,
    to: user.email,
    envelope: {
      from: configEmailFrom,
      to: user.email,
    },
    subject: 'PROPZY THƯ CẢM ƠN',
    html: EmailTemplate3({ user }),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.send({ message: 'success' });
    }
  });
});

export default router;
