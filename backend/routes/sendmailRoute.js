import config from '../config.js';
import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

const configEmailUser = config.SYSTEM_EXTERNAL_EMAIL_USER;
const configEmailPassword = config.SYSTEM_EXTERNAL_EMAIL_PWD;
const configEmailFrom = config.SYSTEM_EXTERNAL_EMAIL_FROM;


const prizes = [
    { key: 'VN_Moving', description: ['Thời gian áp dụng: từ 25/01/2021 - 31/03/2021.'], name: 'VN Moving', area: 'HCM (City Wide)', detail: 'Vietnam Moving - Giảm 500.000VNĐ cho khách đặt dịch vụ chuyển nhà trên website: vietnammoving.com' },
    { key: 'HomeAZ', description: ['Thời gian áp dụng: hết ngày 30/06/2021.'], name: 'HomeAZ', area: 'HCM (City Wide)', detail: 'HomeAZ - Giảm 600.000VNĐ dành cho khách hàng mua nệm có giá từ 5 triệu trên website <a>https://homeaz.vn/</a>' },
    { key: 'GoDee', description: ['20 chuyến đi cho khách hàng lần đầu tải ứng dụng GoDee: sử dụng trong 2 tuần kể từ khi kích hoạt ứng dụng.', '05 chuyến đi cho tất cả khách hàng của Propzy: áp dụng từ 25/01/2021 - 25/04/2021.'], name: 'Godee', area: 'HCM (City Wide)', detail: 'GoDee - Quà tặng lên tới 1.000.000VNĐ: gồm 25 chuyến đi miễn phí (40.000VNĐ/chuyến)' },
    { key: 'Lalamove', description: ['Thời gian áp dụng: hết ngày 30/06/2021.'], name: 'Lalamove', area: 'HCM (City Wide)', detail: 'Lalamove - Giảm 75.000VNĐ cho khách đặt dịch vụ chuyển nhà bằng xe tải trên app Lalamove' },
    { key: 'Jupviec', description: ['Áp dụng tại TP Hồ Chí Minh, Hà Nội, Hải Phòng. Không áp dụng đồng thời với các chương trình khuyến mãi khác.', 'Thời gian áp dụng: Từ 25/01/2021 - 28/02/2021.'], name: 'JupViec.vn', area: 'HCM (City Wide)', detail: 'Giảm 75K cho khách đặt dọn nhà' },
    { key: 'Propzy_Care_Special', description: [], detail: 'Combo Propzy Care trị giá 2.000.000' },
    { key: 'posm-1', description: [], name: 'Combo Shopping bag + Helmet', detail: 'Gói quà số 1: Túi giữ nhiệt và Mũ bảo hiểm' },
    { key: 'posm-2', description: [], name: 'Combo Canvas bag + Tumbler', detail: 'Gói quà số 2: Túi vải canvas và Bình giữ nhiệt' },
    { key: 'posm-3', description: [], name: 'Combo Shopping bag + Raincoat', detail: 'Gói quà số 3: Túi giữ nhiệt và Áo mưa' },
    { key: 'posm-4', description: [], name: 'Combo Notebook + Umbrella', detail: 'Gói quà số 4: Sổ tay và Dù ' }
]

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

    const prize = prizes.find(prize => prize.key === coupon.category);

    let descriptions = prize.description.map(item => {
        return `<li>${item}</li>`
    }).join('')

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
            <h3>Xin chào ${user.name},</h3>
            <div>
            Cảm ơn bạn đã tham gia chương trình CÓ NHÀ LÀ CÓ TẾT 2021 của Propzy được diễn ra từ ngày 25/01/2021 đến hết 28/02/2021.
                <br/>
                <br/>
                Xin chúc mừng Bạn đã hái thành công Lì Xì – Khai Xuân Đón Lộc. Propzy xin gửi tặng Bạn phần quà đặc biệt mà bạn nhận được từ chương trình, vui lòng xem thêm bên dưới:
            </div>
            <div>
            <br />
               <font style="color:red;">${name}</font><br />
               <div>${prize.detail}</div>
               <ul>
                ${descriptions}
               </ul>
            </div>
            <div>
            </br/>
                Nếu <font style="color:red;">${user.name}</font> gặp bất kỳ khó khăn nào khi sử dụng Mã ưu đãi, vui lòng tham khảo thông tin dưới đây:
            </div>
            <ul>
                <li>Sử dụng Ưu đãi của Lalamove: Gọi 0866869175 hoặc truy cập: <a href="https://www.lalamove.com/vietnam/hcmc/vi/home?utm_source=propzy">Link</a></li>
                <li>Sử dụng Ưu đãi của Vietnam Moving: Gọi 18007011 hoặc truy cập: <a href="https://vietnammoving.com/?utm_source=propzy" >Link</a></li>
                <li>Sử dụng Ưu đãi của Jupviec.vn: Gọi 19006082 hoặc truy cập:  <a href="https://www.jupviec.vn/?utm_source=propzy">Link</a></li>
                <li>Sử dụng Ưu đãi của GoDee: Gọi 0888411455 hoặc truy cập:  <a href="https://godee.vn/vn?utm_source=propzy">Link</a></li>
                <li>Sử dụng Ưu đãi của HomeAZ: Gọi 090 173 2989 hoặc truy cập:  <a href="https://homeaz.vn/?utm_source=propzy">Link</a></li>
            </ul>
            <p>Propzy CARE – Gói dịch vụ chăm sóc khách hàng xuyên suốt trước, trong và cả sau khi giao dịch bất động sản tại Propzy. Với gói dịch vụ Propzy CARE, khách hàng <strong>được chăm sóc và hưởng đặc quyền ưu đãi miễn phí </strong> như vận chuyển, dọn nhà, cùng nhiều gói dịch vụ cộng thêm khác từ các đối tác của Propzy. Thảnh thơi Chill Tết - Propzy CARE hết!
            Nhận ngay gói ưu đãi Propzy CARE trị giá 2.000.000 VNĐ từ ngày 25/01 - 28/02/2021 và hoàn tất giao dịch trước ngày 30/03/2021.       
            </p>
            <div>
                Trụ sở chính: Tầng 4, toà nhà Flemington, 182 Lê Đại Hành, P.15, Q.11, TP.HCM.
                <br />30 Trung tâm giao dịch: <a href="https://propzy.vn/diem-giao-dich">Xem Trung tâm giao dịch gần bạn</a>
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
        let prize = prizes.find(sprize => sprize.key === coupon.category);


        let descriptions = prize.description.map(item => {
            return `<li>${item}</li>`
        }).join('')


        let string =
            ` <li>
                <div style="color:red;">${coupon.category}: ${coupon.name}</div>
                <div>${prize.detail}</div>
                <ul>
                    ${descriptions}
                </ul> 
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
            <h3>Xin chào ${user.name},</h3>
            <div>
            Cảm ơn bạn đã tham gia chương trình CÓ NHÀ LÀ CÓ TẾT 2021 của Propzy được diễn ra từ ngày 25/01/2021 đến hết 28/02/2021.
                <br/>
                <br/>
                Xin chúc mừng Bạn đã hái thành công Lì Xì – Khai Xuân Đón Lộc. Propzy xin gửi tặng Bạn phần quà đặc biệt mà bạn nhận được từ chương trình, vui lòng xem thêm bên dưới:
            </div>
            <div>
            <br />
                <ul>
               ${parseCounpons}
                </ul>
            </div>
            <div>
            </br/>
                Nếu <font style="color:red;">${user.name}</font> gặp bất kỳ khó khăn nào khi sử dụng Mã ưu đãi, vui lòng tham khảo thông tin dưới đây:
            </div>
            <ul>
                <li>Sử dụng Ưu đãi của Lalamove: Gọi 0866869175 hoặc truy cập: <a href="https://www.lalamove.com/vietnam/hcmc/vi/home?utm_source=propzy">Link</a></li>
                <li>Sử dụng Ưu đãi của Vietnam Moving: Gọi 18007011 hoặc truy cập: <a href="https://vietnammoving.com/?utm_source=propzy" >Link</a></li>
                <li>Sử dụng Ưu đãi của Jupviec.vn: Gọi 19006082 hoặc truy cập:  <a href="https://www.jupviec.vn/?utm_source=propzy">Link</a></li>
                <li>Sử dụng Ưu đãi của GoDee: Gọi 0888411455 hoặc truy cập:  <a href="https://godee.vn/vn?utm_source=propzy">Link</a></li>
                <li>Sử dụng Ưu đãi của HomeAZ: Gọi 090 173 2989 hoặc truy cập:  <a href="https://homeaz.vn/?utm_source=propzy">Link</a></li>
            </ul>
            <p>Propzy CARE – Gói dịch vụ chăm sóc khách hàng xuyên suốt trước, trong và cả sau khi giao dịch bất động sản tại Propzy. Với gói dịch vụ Propzy CARE, khách hàng <strong>được chăm sóc và hưởng đặc quyền ưu đãi miễn phí </strong> như vận chuyển, dọn nhà, cùng nhiều gói dịch vụ cộng thêm khác từ các đối tác của Propzy. Thảnh thơi Chill Tết - Propzy CARE hết!
            Nhận ngay gói ưu đãi Propzy CARE trị giá 2.000.000 VNĐ từ ngày 25/01 - 28/02/2021 và hoàn tất giao dịch trước ngày 30/03/2021.       
            </p>
            <div>
                Trụ sở chính: Tầng 4, toà nhà Flemington, 182 Lê Đại Hành, P.15, Q.11, TP.HCM.
                <br />30 Trung tâm giao dịch: <a href="https://propzy.vn/diem-giao-dich">Xem Trung tâm giao dịch gần bạn</a>
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
            <div> Xin chào ${user.name} <div>
            <br/>
            
            <div>
                Cảm ơn bạn đã hoàn tất quá trình đăng ký tư vấn thuê nhà tại Propzy. Chúc bạn và người thân sẽ tận hưởng thêm
                thật
                nhiều khoảnh khắc vui vẻ và hạnh phúc trong năm mới.
            </div>
            <div>
                *Lưu ý: Khi phát sinh giao dịch trước ngày 30/03/2021. Bạn sẽ nhận được gói ưu đãi Propzy CARE trị giá
                2.000.000
                VNĐ
            </div>
            <h4>
                PROPZY CARE - ĐẶC QUYỀN ƯU ĐÃI DÀNH RIÊNG CHO KHÁCH HÀNG PROPZY

            </h4>
            <ul>
                <li>Vietnam Moving - Giảm 500.000VNĐ cho khách đặt dịch vụ chuyển nhà trên website: vietnammoving.com
                </li>
                <li>HomeAZ - Giảm 600.000VNĐ dành cho khách hàng mua nệm tại website homeaz.vn
                </li>
                <li>Godee - Quà tặng lên tới 1.000.000VNĐ, gồm 25 chuyến đi miễn phí (40.000VNĐ/chuyến)
                </li>
                <li>Lalamove - Giảm 75.000VNĐ cho khách đặt dịch vụ chuyển nhà bằng xe tải trên app Lalamove  </li>
                <li>JupViec.vn - Giảm 100.000VNĐ cho dịch vụ tổng vệ sinh trên app JupViec.vn</li>
            </ul>

            <br/>
            <br/>
            <div>
            Propzy CARE – Gói dịch vụ chăm sóc khách hàng xuyên suốt trước, trong và cả sau khi giao dịch bất động sản tại Propzy. Với gói dịch vụ Propzy CARE, khách hàng 
            <b> được chăm sóc và hưởng đặc quyền ưu đãi miễn phí </b>
             như vận chuyển, dọn nhà, cùng nhiều gói dịch vụ cộng thêm khác từ các đối tác của Propzy. Thảnh thơi Chill Tết - Propzy CARE hết!
            Nhận ngay gói ưu đãi Propzy CARE trị giá 2.000.000 VNĐ từ ngày 25/01 - 28/02/2021 và hoàn tất giao dịch trước ngày 30/03/2021.   

            </div>

            <div>
                Trụ sở chính: Tầng 4, toà nhà Flemington, 182 Lê Đại Hành, P.15, Q.11, TP.HCM.
                <br />30 Trung tâm giao dịch: <a href="https://propzy.vn/diem-giao-dich">Xem Trung tâm giao dịch gần bạn</a> 
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