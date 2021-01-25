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
    const { email, name, user, coupon } = req.body;

    let mailOptions = {
        from: 'propzycamp@gmail.com',
        to: 'nguyenthanhtrungltv@gmail.com',
        subject: 'PROPZY COUPON',
        html: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
        
        </head>
        
        <body>
            <h3>Chào ${user.name},</h3>
            <div>
                Chúc mừng bạn đã hái thành công Lì Xì từ Propzy.
                <br/>
                <br/>
                Propzy xin gửi tặng ${user.name} phần quà đặc biệt mà bạn nhận được từ chương trình, vui lòng xem thêm bên dưới:
            </div>
            <div>
            <br />
               <div style="color:red;">${coupon.category}: ${name}</div> <br />
               <div style="color:blue;">${coupon.detail}</div>
            </div>
            <div>
            </br/>
                Nếu ${user.name} gặp bất kỳ khó khăn nào khi sử dụng Mã ưu đãi, vui lòng tham khảo thông tin dưới đây:
            </div>
            <ul>
                <li>Sử dụng Coupon của Lalamove: <a href="https://www.lalamove.com/vietnam/hcmc/vi/home?utm_source=propzy">Link</a></li>
                <li>Sử dụng Coupon của Vietnam Moving: <a href="https://vietnammoving.com/?utm_source=propzy" >Link</a></li>
                <li>Sử dụng Coupon của Jupviec.vn: <a href="https://www.jupviec.vn/?utm_source=propzy">Link</a></li>
                <li>Sử dụng Coupon của GoDee: <a href="https://godee.vn/vn?utm_source=propzy">Link</a></li>
                <li>Sử dụng Coupon của HomeAZ: <a href="https://homeaz.vn/?utm_source=propzy">Link</a></li>
            </ul>
            <div>
                Trụ sở chính: Tầng 4, toà nhà Flemington, 182 Lê Đại Hành, P.15, Q.11, TP.HCM.
                <br />30 Trung tâm giao dịch: Xem Trung tâm giao dịch gần bạn
                <br />Liên hệ trực tiếp hỗ trợ viên của bạn
                <br />CẦN HỖ TRỢ? GỌI NGAY:
            </div>
        </body>
        
        </html>`
    };
    console.log("🚀 ~ file: sendmailRoute.js ~ line 64 ~ router.post ~ mailOptions", mailOptions)

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

router.post('/type2', (req, res) => {
    const { email, name } = req.body;

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