import config from '../config.js';
import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

const configEmailUser = config.SYSTEM_EXTERNAL_EMAIL_USER;
const configEmailPassword = config.SYSTEM_EXTERNAL_EMAIL_PWD;
const configEmailFrom = config.SYSTEM_EXTERNAL_EMAIL_FROM;


var transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: false, // use TLS
    auth: {
        user: configEmailUser,
        pass: configEmailPassword
    },
    tls: {
        rejectUnauthorized: false
    }
});

// verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});


router.post('/', (req, res) => {
    const { email, name, user, coupon } = req.body;

    let mailOptions = {
        from: configEmailFrom,
        to: email,
        envelope: {
            from: configEmailFrom,
            to: email,
        },
        subject: 'PROPZY COUPON',
        text: name,
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
                Propzy xin gửi tặng <font style="color:red;">bạn</font> phần quà đặc biệt mà bạn nhận được từ chương trình, vui lòng xem thêm bên dưới:
            </div>
            <div>
            <br />
               Mã <font style="color:red;">${coupon.category}</font>: ${name}<br />
               ${coupon.detail}<br />
            </div>
            <div>
            </br/>
                Nếu <font style="color:red;">bạn</font> gặp bất kỳ khó khăn nào khi sử dụng Mã ưu đãi, vui lòng tham khảo thông tin dưới đây:
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
                <br />CẦN HỖ TRỢ GỌI NGAY: <font style="color:red;">*4663</font>
            </div>
        </body>
        
        </html>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            res.send({ "message": 'success' });
        }
    })
})

router.post('/type2', (req, res) => {
    const { user, coupons = [] } = req.body;

    const parseCounpons = coupons.map(coupon => {
        let string =
            ` <li>
                <div style="color:red;">${coupon.category}: ${coupon.name}</div>
                <div style="color:blue;">${coupon.detail}</div> 
            </li>`

        return string
    }).join('')

    let mailOptions = {
        from: configEmailFrom,
        to: user.email,
        envelope: {
            from: configEmailFrom,
            to: user.email,
        },
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
            <ul>
            ${parseCounpons}
            </ul>
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
                <br />CẦN HỖ TRỢ GỌI NGAY: *4663
            </div>
        </body>
        
        </html>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            res.send({ "message": 'success' });
        }
    })
})
router.post('/type3', (req, res) => {
    const { user } = req.body;

    let mailOptions = {
        from: configEmailFrom,
        to: user.email,
        envelope: {
            from: configEmailFrom,
            to: user.email,
        },
        subject: 'PROPZY THƯ CẢM ƠN',
        html: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
        
        </head>
        
        <body>
            <div>
                Cảm ơn ${user.name} đã hoàn tất quá trình đăng ký tư vấn thuê nhà tại Propzy. Chúc bạn và người thân sẽ tận hưởng thêm
                thật
                nhiều khoảnh khắc vui vẻ và hạnh phúc trong năm mới.
            </div>
            <div>
                *Lưu ý: Khi phát sinh giao dịch trước ngày 30/03/2021. Bạn sẽ nhận được gói ưu đãi Propzy CARE trị giá
                2.000.000
                VNĐ
            </div>
            <h4>
                ƯU ĐÃI PROPZY CARE
            </h4>
            <ul>
                <li>Giảm 500K - VN Moving: dành cho khách đặt dịch vụ chuyển nhà trên app</li>
                <li>Giảm 600K - Home AZ: dành cho khách đặt mua nệm</li>
                <li>Tặng 750K - Godee: Tặng 25 chuyến xe miễn phí (30k/chuyến) cho khách hàng đặt xe</li>
                <li>Giảm 75K - Lalamove: dành cho khách đặt dịch vụ chuyển nhà</li>
                <li>Giảm 75K - Jupviec.vn: dành cho khách đặt dịch vụ dọn dẹp nhà</li>
            </ul>
            <div>
                Trụ sở chính: Tầng 4, toà nhà Flemington, 182 Lê Đại Hành, P.15, Q.11, TP.HCM.
                <br />30 Trung tâm giao dịch: Xem Trung tâm giao dịch gần bạn
                <br />Liên hệ trực tiếp hỗ trợ viên của bạn
                <br />CẦN HỖ TRỢ GỌI NGAY: *4663
            </div>
        </body>
        
        </html>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            res.send({ "message": 'success' });
        }
    })
})

export default router;