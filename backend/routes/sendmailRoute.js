import express from 'express';

import nodemailer from 'nodemailer';
import { EmailTemplate, EmailTemplate2, EmailTemplate3 } from '../../EmailTemplates/index.js';

const router = express.Router();

const prizes = [
  {
    key: 'VN_Moving', description: ['Thời gian áp dụng: từ 25/01/2021 - 31/03/2021.'], name: 'VN Moving', area: 'HCM (City Wide)', detail: 'Vietnam Moving - Giảm 500.000VNĐ cho khách đặt dịch vụ chuyển nhà trên website: vietnammoving.com',
  },
  {
    key: 'HomeAZ', description: ['Thời gian áp dụng: hết ngày 30/06/2021.'], name: 'HomeAZ', area: 'HCM (City Wide)', detail: 'HomeAZ - Giảm 600.000VNĐ dành cho khách hàng mua nệm có giá từ 5 triệu trên website <a>https://homeaz.vn/</a>',
  },
  {
    key: 'GoDee', description: ['20 chuyến đi cho khách hàng lần đầu tải ứng dụng GoDee: sử dụng trong 2 tuần kể từ khi kích hoạt ứng dụng.', '05 chuyến đi cho tất cả khách hàng của Propzy: áp dụng từ 25/01/2021 - 25/04/2021.'], name: 'Godee', area: 'HCM (City Wide)', detail: 'GoDee - Quà tặng lên tới 1.000.000VNĐ: gồm 25 chuyến đi miễn phí (40.000VNĐ/chuyến)',
  },
  {
    key: 'Lalamove', description: ['Thời gian áp dụng: từ 25/01/2021 - 15/03/2021.'], name: 'Lalamove', area: 'HCM (City Wide)', detail: 'Lalamove - Giảm 75.000VNĐ cho khách đặt dịch vụ chuyển nhà bằng xe tải trên app Lalamove',
  },
  {
    key: 'Jupviec', description: ['Áp dụng tại TP Hồ Chí Minh, Hà Nội, Hải Phòng. Không áp dụng đồng thời với các chương trình khuyến mãi khác.', 'Thời gian áp dụng: Từ 25/01/2021 - 28/02/2021.'], name: 'JupViec.vn', area: 'HCM (City Wide)', detail: 'Giảm 100.000VNĐ cho dịch vụ tổng vệ sinh trên app JupViec.vn',
  },
  { key: 'Propzy_Care_Special', description: [], detail: 'Combo Propzy Care trị giá 2.000.000' },
  {
    key: 'posm-1', description: [], name: 'Combo Shopping bag + Helmet', detail: 'Gói quà số 1: Túi giữ nhiệt và Mũ bảo hiểm',
  },
  {
    key: 'posm-2', description: [], name: 'Combo Canvas bag + Tumbler', detail: 'Gói quà số 2: Túi vải canvas và Bình giữ nhiệt',
  },
  {
    key: 'posm-3', description: [], name: 'Combo Shopping bag + Raincoat', detail: 'Gói quà số 3: Túi giữ nhiệt và Áo mưa',
  },
  {
    key: 'posm-4', description: [], name: 'Combo Notebook + Umbrella', detail: 'Gói quà số 4: Sổ tay và Dù ',
  },
];

// var transporter = nodemailer.createTransport({
//     host: "smtp.mailgun.org",
//     port: 587,
//     secure: false, // use TLS
//     auth: {
//         user: configEmailUser,
//         pass: configEmailPassword
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });

// // verify connection configuration
// transporter.verify(function (error, success) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Server is ready to take our messages");
//     }
// });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'nltruongvi@gmail.com',
    pass: 'kvezagksrsczoirx',
  },
});

router.post('/', (req, res) => {
  const {
    name, user, coupon,
  } = req.body;

  const mailOptions = {
    from: 'nltruongvi@gmail.com',
    to: user.email,
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
    from: 'nltruongvi@gmail.com',
    to: user.email,
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
    from: 'nltruongvi@gmail.com',
    to: user.email,
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
