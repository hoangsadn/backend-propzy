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

export const EmailTemplate = (props) => {
  const { user, coupon } = props;

  const prize = prizes.find((nPrize) => nPrize.key === coupon.category);

  const descriptions = prize.description.map((item) => `<li>${item}</li>`).join('');

  return (
    `<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
        <title>
          
        </title>
        <!--[if !mso]><!-- -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--<![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">
          #outlook a { padding:0; }
          .ReadMsgBody { width:100%; }
          .ExternalClass { width:100%; }
          .ExternalClass * { line-height:100%; }
          body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
          table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
          img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
          p { display:block;margin:13px 0; }
        </style>
        <!--[if !mso]><!-->
        <style type="text/css">
          @media only screen and (max-width:480px) {
            @-ms-viewport { width:320px; }
            @viewport { width:320px; }
          }
        </style>
        <!--<![endif]-->
        <!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        <!--[if lte mso 11]>
        <style type="text/css">
          .outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->
        
      <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=arial" rel="stylesheet" type="text/css">
        <style type="text/css">
          @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
@import url(https://fonts.googleapis.com/css?family=Cabin:400,700);
@import url(https://fonts.googleapis.com/css?family=arial);
        </style>
      <!--<![endif]-->

    
        
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
.mj-column-per-50 { width:50% !important; max-width: 50%; }
      }
    </style>
    
  
        <style type="text/css">
        
        

    @media only screen and (max-width:480px) {
      table.full-width-mobile { width: 100% !important; }
      td.full-width-mobile { width: auto !important; }
    }
  
        </style>
        <style type="text/css">.hide_on_mobile { display: none !important;} 
        @media only screen and (min-width: 480px) { .hide_on_mobile { display: block !important;} }
        .hide_section_on_mobile { display: none !important;} 
        @media only screen and (min-width: 480px) { .hide_section_on_mobile { display: table !important;} }
        .hide_on_desktop { display: block !important;} 
        @media only screen and (min-width: 480px) { .hide_on_desktop { display: none !important;} }
        .hide_section_on_desktop { display: table !important;} 
        @media only screen and (min-width: 480px) { .hide_section_on_desktop { display: none !important;} }
        [owa] .mj-column-per-100 {
            width: 100%!important;
          }
          [owa] .mj-column-per-50 {
            width: 50%!important;
          }
          [owa] .mj-column-per-33 {
            width: 33.333333333333336%!important;
          }
          p {
              margin: 0px;
          }
          @media only print and (min-width:480px) {
            .mj-column-per-100 { width:100%!important; }
            .mj-column-per-40 { width:40%!important; }
            .mj-column-per-60 { width:60%!important; }
            .mj-column-per-50 { width: 50%!important; }
            mj-column-per-33 { width: 33.333333333333336%!important; }
            }</style>
        
      </head>
      <body style="background-color:#155aa9;">
        
        
      <div style="background-color:#155aa9;">
        
      
      <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    
      
      <div style="Margin:0px auto;max-width:600px;">
        
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;vertical-align:top;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
            
      <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
        
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
        
            <tbody><tr>
              <td align="center" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
        <tbody>
          <tr>
            <td style="width:192px;">
              
      <img height="auto" src="https://www.upsieutoc.com/images/2021/02/05/logo6706471805fbc0d6.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="192">
    
            </td>
          </tr>
        </tbody>
      </table>
    
              </td>
            </tr>
          
            <tr>
              <td align="center" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
        <tbody>
          <tr>
            <td style="width:600px;">
              
      <img height="auto" src="https://www.upsieutoc.com/images/2021/02/05/Group-63.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="600">
    
            </td>
          </tr>
        </tbody>
      </table>
    
              </td>
            </tr>
          
            <tr>
              <td align="left" style="font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;">
                
      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:1.5;text-align:left;color:#000000;">
        <h1 style="font-family: &apos;Cabin&apos;, sans-serif; line-height: 100%;"><span style="color: #ecf0f1;">Xin ch&#xE0;o ${user.name},</span></h1>
<p><span style="color: #fbeeb8; font-size: 13px;">C&#x1EA3;m &#x1A1;n b&#x1EA1;n &#x111;&#xE3; tham gia ch&#x1B0;&#x1A1;ng tr&#xEC;nh <span style="color: #f17423;"><strong>C&#xD3; NH&#xC0; L&#xC0; C&#xD3; T&#x1EBE;T 2021</strong></span> c&#x1EE7;a Propzy &#x111;&#x1B0;&#x1EE3;c di&#x1EC5;n ra t&#x1EEB; ng&#xE0;y 25/01/2021 &#x111;&#x1EBF;n h&#x1EBF;t 28/02/2021.</span></p>
<p><span style="color: #fbeeb8; font-size: 13px;">Xin ch&#xFA;c m&#x1EEB;ng B&#x1EA1;n &#x111;&#xE3; h&#xE1;i th&#xE0;nh c&#xF4;ng L&#xEC; X&#xEC; &#x2013; Khai Xu&#xE2;n &#x110;&#xF3;n L&#x1ED9;c. Propzy xin g&#x1EED;i t&#x1EB7;ng B&#x1EA1;n ph&#x1EA7;n qu&#xE0; &#x111;&#x1EB7;c bi&#x1EC7;t m&#xE0; b&#x1EA1;n nh&#x1EAD;n &#x111;&#x1B0;&#x1EE3;c t&#x1EEB; ch&#x1B0;&#x1A1;ng tr&#xEC;nh, vui l&#xF2;ng xem th&#xEA;m b&#xEA;n d&#x1B0;&#x1EDB;i:</span></p>
<p>&#xA0;</p>
<p><span style="font-size: 14px; color: #f17423; font-family: arial, sans-serif;">${coupon.name}</span></p>
<p><span style="font-size: 13px; color: #ffffff; font-family: arial, sans-serif;">${prize.detail}</span></p>
<ul style="font-size: 13px; color: #ffffff; font-family: arial, sans-serif;">
${descriptions}
</ul>
<p><span style="font-size: 13px; color: #ffffff;">N&#x1EBF;u <span style="color: #f17423;">${user.name}</span> g&#x1EB7;p b&#x1EA5;t k&#x1EF3; kh&#xF3; kh&#x103;n n&#xE0;o khi s&#x1EED; d&#x1EE5;ng M&#xE3; &#x1B0;u &#x111;&#xE3;i, vui l&#xF2;ng tham kh&#x1EA3;o th&#xF4;ng tin d&#x1B0;&#x1EDB;i &#x111;&#xE2;y:</span></p>
<p><span style="font-size: 13px; color: #ffffff;">S&#x1EED; d&#x1EE5;ng &#x1AF;u &#x111;&#xE3;i c&#x1EE7;a Lalamove: G&#x1ECD;i 0866869175 ho&#x1EB7;c truy c&#x1EAD;p: <span style="color: #f17423;"><a style="color: #f17423;" title="Link" href="https://www.lalamove.com/vietnam/hcmc/vi/home?utm_source=propzy" target="_blank" rel="noopener">Link</a></span></span><br><span style="font-size: 13px; color: #ffffff;">S&#x1EED; d&#x1EE5;ng &#x1AF;u &#x111;&#xE3;i c&#x1EE7;a Vietnam Moving: G&#x1ECD;i 18007011 ho&#x1EB7;c truy c&#x1EAD;p: <span style="color: #f17423;"><a style="color: #f17423;" title="Link" href="https://vietnammoving.com/?utm_source=propzy" target="_blank" rel="noopener">Link</a></span></span><br><span style="font-size: 13px; color: #ffffff;">S&#x1EED; d&#x1EE5;ng &#x1AF;u &#x111;&#xE3;i c&#x1EE7;a Jupviec.vn: G&#x1ECD;i 19006082 ho&#x1EB7;c truy c&#x1EAD;p: <span style="color: #f17423;"><a style="color: #f17423;" title="Link" href="https://www.jupviec.vn/huong-dan-dat-dich-vu-tong-ve-sinh-tren-ung-dung-jupviec-d2018.html" target="_blank" rel="noopener">Link</a></span></span><br><span style="font-size: 13px; color: #ffffff;">S&#x1EED; d&#x1EE5;ng &#x1AF;u &#x111;&#xE3;i c&#x1EE7;a GoDee: G&#x1ECD;i 0888411455 ho&#x1EB7;c truy c&#x1EAD;p: <span style="color: #f17423;"><a style="color: #f17423;" title="Link" href="https://godee.vn/vn?utm_source=propzy" target="_blank" rel="noopener">Link</a></span></span><br><span style="font-size: 13px; color: #ffffff;">S&#x1EED; d&#x1EE5;ng &#x1AF;u &#x111;&#xE3;i c&#x1EE7;a HomeAZ: G&#x1ECD;i 090 173 2989 ho&#x1EB7;c truy c&#x1EAD;p: <span style="color: #f17423;"><a style="color: #f17423;" title="Link" href="https://homeaz.vn/?utm_source=propzy" target="_blank" rel="noopener">Link</a></span></span><br><span style="font-size: 13px; color: #ffffff;">Nh&#x1EAD;n ngay g&#xF3;i &#x1B0;u &#x111;&#xE3;i Propzy CARE tr&#x1ECB; gi&#xE1; 2.000.000 VN&#x110; t&#x1EEB; ng&#xE0;y 25/01 - 28/02/2021 v&#xE0; ph&#xE1;t sinh giao d&#x1ECB;ch tr&#x1B0;&#x1EDB;c ng&#xE0;y 30/03/2021.</span></p>
<p>&#xA0;</p>
<p><span style="font-size: 13px; color: #ffffff;">Propzy CARE &#x2013; G&#xF3;i d&#x1ECB;ch v&#x1EE5; ch&#x103;m s&#xF3;c kh&#xE1;ch h&#xE0;ng xuy&#xEA;n su&#x1ED1;t tr&#x1B0;&#x1EDB;c, trong v&#xE0; c&#x1EA3; sau khi giao d&#x1ECB;ch b&#x1EA5;t &#x111;&#x1ED9;ng s&#x1EA3;n t&#x1EA1;i Propzy. V&#x1EDB;i g&#xF3;i d&#x1ECB;ch v&#x1EE5; Propzy CARE, kh&#xE1;ch h&#xE0;ng <strong><span style="color: #f17423;">&#x111;&#x1B0;&#x1EE3;c ch&#x103;m s&#xF3;c v&#xE0; h&#x1B0;&#x1EDF;ng &#x111;&#x1EB7;c quy&#x1EC1;n &#x1B0;u &#x111;&#xE3;i mi&#x1EC5;n ph&#xED; </span></strong>nh&#x1B0; v&#x1EAD;n chuy&#x1EC3;n, d&#x1ECD;n nh&#xE0;, chuy&#x1EBF;n &#x111;i mi&#x1EC5;n ph&#xED; c&#xF9;ng nhi&#x1EC1;u g&#xF3;i d&#x1ECB;ch v&#x1EE5; c&#x1ED9;ng th&#xEA;m kh&#xE1;c t&#x1EEB; c&#xE1;c &#x111;&#x1ED1;i t&#xE1;c c&#x1EE7;a Propzy. Th&#x1EA3;nh th&#x1A1;i Chill T&#x1EBF;t - Propzy CARE h&#x1EBF;t! &#xA0;</span></p>
<p>&#xA0;</p>
<p>&#xA0;</p>
<p>&#xA0;</p>
      </div>
    
              </td>
            </tr>
          
      </tbody></table>
    
      </div>
    
          <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    
      
      <div style="Margin:0px auto;max-width:600px;">
        
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;vertical-align:top;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->
            
      <div class="mj-column-per-50 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
        
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
        
            <tbody><tr>
              <td align="center" style="font-size:0px;padding:10px 10px 10px 10px;word-break:break-word;">
                
      
     <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
      >
        <tr>
      
              <td>
            <![endif]-->
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                
      <tbody><tr>
        <td style="padding:4px;">
          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:transparent;border-radius:3px;width:35px;">
            <tbody><tr>
              <td style="font-size:0;height:35px;vertical-align:middle;width:35px;">
                <a href="https://www.facebook.com/propzyvietnam" target="_blank">
                    <img alt="facebook" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/rounded/facebook.png" style="border-radius:3px;display:block;" width="35">
                  </a>
                </td>
              </tr>
          </tbody></table>
        </td>
        
      </tr>
    
              </tbody></table>
            <!--[if mso | IE]>
              </td>
            
              <td>
            <![endif]-->
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                
      <tbody><tr>
        <td style="padding:4px;">
          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:transparent;border-radius:3px;width:35px;">
            <tbody><tr>
              <td style="font-size:0;height:35px;vertical-align:middle;width:35px;">
                <a href="https://propzy.vn/" target="_blank">
                    <img height="35" src="https://app.topol.io/img/editor/world.png" style="border-radius:3px;display:block;" width="35">
                  </a>
                </td>
              </tr>
          </tbody></table>
        </td>
        
      </tr>
    
              </tbody></table>
            <!--[if mso | IE]>
              </td>
            
              <td>
            <![endif]-->
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                
      <tbody><tr>
        <td style="padding:4px;">
          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:transparent;border-radius:3px;width:35px;">
            <tbody><tr>
              <td style="font-size:0;height:35px;vertical-align:middle;width:35px;">
                <a href="youtube" target="_blank">
                    <img height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/rounded/youtube.png" style="border-radius:3px;display:block;" width="35">
                  </a>
                </td>
              </tr>
          </tbody></table>
        </td>
        
      </tr>
    
              </tbody></table>
            <!--[if mso | IE]>
              </td>
            
          </tr>
        </table>
      <![endif]-->
    
    
              </td>
            </tr>
          
      </tbody></table>
    
      </div>
    
          <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->
            
      <div class="mj-column-per-50 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
        
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
        
            <tbody><tr>
              <td align="left" style="font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;">
                
      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:1.5;text-align:left;color:#000000;">
        <p><span style="font-size: 13px; color: #ffffff;"><strong><span style="color: #f17423;">Tr&#x1EE5; s&#x1EDF; ch&#xED;nh: </span></strong>T&#x1EA7;ng 4, to&#xE0; nh&#xE0; Flemington, 182 L&#xEA; &#x110;&#x1EA1;i H&#xE0;nh, P.15, Q.11, TP.HCM.</span></p>
<p><span style="font-size: 13px; color: #ffffff;"><strong><span style="color: #f17423;">30 Trung t&#xE2;m giao d&#x1ECB;ch: </span></strong><a style="color: #ffffff;" title="Xem Trung t&#xE2;m giao d&#x1ECB;ch g&#x1EA7;n b&#x1EA1;n" href="https://propzy.vn/diem-giao-dich" target="_blank" rel="noopener">Xem Trung t&#xE2;m giao d&#x1ECB;ch g&#x1EA7;n b&#x1EA1;n</a></span></p>
      </div>
    
              </td>
            </tr>
          
      </tbody></table>
    
      </div>
    
          <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
    
    
      </div>
    
      
    
  </body></html>`
  );
};
export const EmailTemplate3 = (props) => {
  const { user = {} } = props;

  return (
    `<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
   <title>
     
   </title>
   <!--[if !mso]><!-- -->
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <!--<![endif]-->
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <style type="text/css">
     #outlook a { padding:0; }
     .ReadMsgBody { width:100%; }
     .ExternalClass { width:100%; }
     .ExternalClass * { line-height:100%; }
     body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
     table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
     img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
     p { display:block;margin:13px 0; }
   </style>
   <!--[if !mso]><!-->
   <style type="text/css">
     @media only screen and (max-width:480px) {
       @-ms-viewport { width:320px; }
       @viewport { width:320px; }
     }
   </style>
   <!--<![endif]-->
   <!--[if mso]>
   <xml>
   <o:OfficeDocumentSettings>
     <o:AllowPNG/>
     <o:PixelsPerInch>96</o:PixelsPerInch>
   </o:OfficeDocumentSettings>
   </xml>
   <![endif]-->
   <!--[if lte mso 11]>
   <style type="text/css">
     .outlook-group-fix { width:100% !important; }
   </style>
   <![endif]-->
   
 <!--[if !mso]><!-->
   <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=arial" rel="stylesheet" type="text/css">
   <style type="text/css">
     @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
@import url(https://fonts.googleapis.com/css?family=Cabin:400,700);
@import url(https://fonts.googleapis.com/css?family=arial);
   </style>
 <!--<![endif]-->


   
<style type="text/css">
 @media only screen and (min-width:480px) {
   .mj-column-per-100 { width:100% !important; max-width: 100%; }
.mj-column-per-50 { width:50% !important; max-width: 50%; }
 }
</style>


   <style type="text/css">
   
   

@media only screen and (max-width:480px) {
 table.full-width-mobile { width: 100% !important; }
 td.full-width-mobile { width: auto !important; }
}

   </style>
   <style type="text/css">.hide_on_mobile { display: none !important;} 
   @media only screen and (min-width: 480px) { .hide_on_mobile { display: block !important;} }
   .hide_section_on_mobile { display: none !important;} 
   @media only screen and (min-width: 480px) { .hide_section_on_mobile { display: table !important;} }
   .hide_on_desktop { display: block !important;} 
   @media only screen and (min-width: 480px) { .hide_on_desktop { display: none !important;} }
   .hide_section_on_desktop { display: table !important;} 
   @media only screen and (min-width: 480px) { .hide_section_on_desktop { display: none !important;} }
   [owa] .mj-column-per-100 {
       width: 100%!important;
     }
     [owa] .mj-column-per-50 {
       width: 50%!important;
     }
     [owa] .mj-column-per-33 {
       width: 33.333333333333336%!important;
     }
     p {
         margin: 0px;
     }
     @media only print and (min-width:480px) {
       .mj-column-per-100 { width:100%!important; }
       .mj-column-per-40 { width:40%!important; }
       .mj-column-per-60 { width:60%!important; }
       .mj-column-per-50 { width: 50%!important; }
       mj-column-per-33 { width: 33.333333333333336%!important; }
       }</style>
   
 </head>
 <body style="background-color:#155aa9;">
   
   
 <div style="background-color:#155aa9;">
   
 
 <!--[if mso | IE]>
 <table
    align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
 >
   <tr>
     <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
 <![endif]-->

 
 <div style="Margin:0px auto;max-width:600px;">
   
   <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
     <tbody>
       <tr>
         <td style="direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;vertical-align:top;">
           <!--[if mso | IE]>
             <table role="presentation" border="0" cellpadding="0" cellspacing="0">
           
   <tr>
 
       <td
          class="" style="vertical-align:top;width:600px;"
       >
     <![endif]-->
       
 <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
   
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
   
       <tbody><tr>
         <td align="center" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
           
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
   <tbody>
     <tr>
       <td style="width:192px;">
         
 <img height="auto" src="https://www.upsieutoc.com/images/2021/02/05/logo6706471805fbc0d6.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="192">

       </td>
     </tr>
   </tbody>
 </table>

         </td>
       </tr>
     
       <tr>
         <td align="center" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
           
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
   <tbody>
     <tr>
       <td style="width:600px;">
         
 <img height="auto" src="https://www.upsieutoc.com/images/2021/02/05/Group-63.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="600">

       </td>
     </tr>
   </tbody>
 </table>

         </td>
       </tr>
     
       <tr>
         <td align="left" style="font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;">
           
 <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:1.5;text-align:left;color:#000000;">
   <h1 style="font-family: &apos;Cabin&apos;, sans-serif; line-height: 100%;"><span style="color: #ecf0f1;">Xin ch&#xE0;o ${user.name},</span></h1>
<p><span style="font-size: 13px; color: #ecf0f1;">C&#x1EA3;m &#x1A1;n b&#x1EA1;n &#x111;&#xE3; ho&#xE0;n t&#x1EA5;t qu&#xE1; tr&#xEC;nh &#x111;&#x103;ng k&#xFD; t&#x1B0; v&#x1EA5;n thu&#xEA; nh&#xE0; t&#x1EA1;i Propzy. Ch&#xFA;c b&#x1EA1;n v&#xE0; ng&#x1B0;&#x1EDD;i th&#xE2;n s&#x1EBD; t&#x1EAD;n h&#x1B0;&#x1EDF;ng th&#xEA;m th&#x1EAD;t nhi&#x1EC1;u kho&#x1EA3;nh kh&#x1EAF;c vui v&#x1EBB; v&#xE0; h&#x1EA1;nh ph&#xFA;c trong n&#x103;m m&#x1EDB;i.</span></p>
<p><span style="font-size: 13px; color: #ecf0f1;">*L&#x1B0;u &#xFD;: Khi ph&#xE1;t sinh giao d&#x1ECB;ch tr&#x1B0;&#x1EDB;c ng&#xE0;y 30/03/2021. B&#x1EA1;n s&#x1EBD; nh&#x1EAD;n &#x111;&#x1B0;&#x1EE3;c tr&#x1ECD;n g&#xF3;i &#x1B0;u &#x111;&#xE3;i Propzy CARE tr&#x1ECB; gi&#xE1; 2.000.000 VN&#x110;</span></p>
<p>&#xA0;</p>
<p><span style="color: #f17423;"><strong><span style="font-size: 15px;">PROPZY CARE - &#x110;&#x1EB6;C QUY&#x1EC0;N &#x1AF;U &#x110;&#xC3;I D&#xC0;NH RI&#xCA;NG CHO KH&#xC1;CH H&#xC0;NG PROPZY</span></strong></span></p>
<p>&#xA0;</p>
<ul>
<li><span style="font-size: 13px; color: #ffffff; font-family: arial, sans-serif;">Vietnam Moving - Gi&#x1EA3;m 500.000VN&#x110; cho kh&#xE1;ch &#x111;&#x1EB7;t d&#x1ECB;ch v&#x1EE5; chuy&#x1EC3;n nh&#xE0; tr&#xEA;n website: vietnammoving.com</span></li>
<li><span style="font-size: 13px; color: #ffffff; font-family: arial, sans-serif;">HomeAZ - Gi&#x1EA3;m 600.000VN&#x110; d&#xE0;nh cho kh&#xE1;ch h&#xE0;ng mua n&#x1EC7;m t&#x1EA1;i website homeaz.vn</span></li>
<li><span style="font-size: 13px; color: #ffffff; font-family: arial, sans-serif;">GoDee - Qu&#xE0; t&#x1EB7;ng l&#xEA;n &#x111;&#x1EBF;n 1.000.000VN&#x110;, mi&#x1EC5;n ph&#xED; 5 chuy&#x1EBF;n &#x111;i cho t&#x1EA5;t c&#x1EA3; kh&#xE1;ch h&#xE0;ng PROPZY v&#xE0; 20 chuy&#x1EBF;n &#x111;i cho kh&#xE1;ch h&#xE0;ng l&#x1EA7;n &#x111;&#x1EA7;u s&#x1EED; d&#x1EE5;ng GoDee (t&#x1ED1;i &#x111;a 40.000VN&#x110;/chuy&#x1EBF;n)</span></li>
<li><span style="font-size: 13px; color: #ffffff; font-family: arial, sans-serif;">Lalamove - Gi&#x1EA3;m 75.000VN&#x110; cho kh&#xE1;ch &#x111;&#x1EB7;t d&#x1ECB;ch v&#x1EE5; chuy&#x1EC3;n nh&#xE0; b&#x1EB1;ng xe t&#x1EA3;i tr&#xEA;n app Lalamove</span></li>
<li><span style="font-size: 13px; color: #ffffff; font-family: arial, sans-serif;">JupViec.vn - Gi&#x1EA3;m 100.000VN&#x110; cho d&#x1ECB;ch v&#x1EE5; t&#x1ED5;ng v&#x1EC7; sinh tr&#xEA;n app JupViec.vn &#xA0; &#xA0;</span></li>
</ul>
<p><span style="font-size: 13px; color: #ffffff;">Propzy CARE &#x2013; G&#xF3;i d&#x1ECB;ch v&#x1EE5; ch&#x103;m s&#xF3;c kh&#xE1;ch h&#xE0;ng xuy&#xEA;n su&#x1ED1;t tr&#x1B0;&#x1EDB;c, trong v&#xE0; c&#x1EA3; sau khi giao d&#x1ECB;ch b&#x1EA5;t &#x111;&#x1ED9;ng s&#x1EA3;n t&#x1EA1;i Propzy. V&#x1EDB;i g&#xF3;i d&#x1ECB;ch v&#x1EE5; Propzy CARE, kh&#xE1;ch h&#xE0;ng <strong><span style="color: #f17423;">&#x111;&#x1B0;&#x1EE3;c ch&#x103;m s&#xF3;c v&#xE0; h&#x1B0;&#x1EDF;ng &#x111;&#x1EB7;c quy&#x1EC1;n &#x1B0;u &#x111;&#xE3;i mi&#x1EC5;n ph&#xED; </span></strong>nh&#x1B0; v&#x1EAD;n chuy&#x1EC3;n, d&#x1ECD;n nh&#xE0;, chuy&#x1EBF;n &#x111;i mi&#x1EC5;n ph&#xED; c&#xF9;ng nhi&#x1EC1;u g&#xF3;i d&#x1ECB;ch v&#x1EE5; c&#x1ED9;ng th&#xEA;m kh&#xE1;c t&#x1EEB; c&#xE1;c &#x111;&#x1ED1;i t&#xE1;c c&#x1EE7;a Propzy. Th&#x1EA3;nh th&#x1A1;i Chill T&#x1EBF;t - Propzy CARE h&#x1EBF;t! &#xA0;</span></p>
<p>&#xA0;</p>
<p>&#xA0;</p>
<p>&#xA0;</p>
 </div>

         </td>
       </tr>
     
 </tbody></table>

 </div>

     <!--[if mso | IE]>
       </td>
     
   </tr>
 
             </table>
           <![endif]-->
         </td>
       </tr>
     </tbody>
   </table>
   
 </div>

 
 <!--[if mso | IE]>
     </td>
   </tr>
 </table>
 
 <table
    align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
 >
   <tr>
     <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
 <![endif]-->

 
 <div style="Margin:0px auto;max-width:600px;">
   
   <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
     <tbody>
       <tr>
         <td style="direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;vertical-align:top;">
           <!--[if mso | IE]>
             <table role="presentation" border="0" cellpadding="0" cellspacing="0">
           
   <tr>
 
       <td
          class="" style="vertical-align:top;width:300px;"
       >
     <![endif]-->
       
 <div class="mj-column-per-50 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
   
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
   
       <tbody><tr>
         <td align="center" style="font-size:0px;padding:10px 10px 10px 10px;word-break:break-word;">
           
 
<!--[if mso | IE]>
 <table
    align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
 >
   <tr>
 
         <td>
       <![endif]-->
         <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
           
 <tbody><tr>
   <td style="padding:4px;">
     <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:transparent;border-radius:3px;width:35px;">
       <tbody><tr>
         <td style="font-size:0;height:35px;vertical-align:middle;width:35px;">
           <a href="https://www.facebook.com/propzyvietnam" target="_blank">
               <img alt="facebook" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/rounded/facebook.png" style="border-radius:3px;display:block;" width="35">
             </a>
           </td>
         </tr>
     </tbody></table>
   </td>
   
 </tr>

         </tbody></table>
       <!--[if mso | IE]>
         </td>
       
         <td>
       <![endif]-->
         <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
           
 <tbody><tr>
   <td style="padding:4px;">
     <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:transparent;border-radius:3px;width:35px;">
       <tbody><tr>
         <td style="font-size:0;height:35px;vertical-align:middle;width:35px;">
           <a href="https://propzy.vn/" target="_blank">
               <img height="35" src="https://app.topol.io/img/editor/world.png" style="border-radius:3px;display:block;" width="35">
             </a>
           </td>
         </tr>
     </tbody></table>
   </td>
   
 </tr>

         </tbody></table>
       <!--[if mso | IE]>
         </td>
       
         <td>
       <![endif]-->
         <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
           
 <tbody><tr>
   <td style="padding:4px;">
     <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:transparent;border-radius:3px;width:35px;">
       <tbody><tr>
         <td style="font-size:0;height:35px;vertical-align:middle;width:35px;">
           <a href="youtube" target="_blank">
               <img height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/rounded/youtube.png" style="border-radius:3px;display:block;" width="35">
             </a>
           </td>
         </tr>
     </tbody></table>
   </td>
   
 </tr>

         </tbody></table>
       <!--[if mso | IE]>
         </td>
       
     </tr>
   </table>
 <![endif]-->


         </td>
       </tr>
     
 </tbody></table>

 </div>

     <!--[if mso | IE]>
       </td>
     
       <td
          class="" style="vertical-align:top;width:300px;"
       >
     <![endif]-->
       
 <div class="mj-column-per-50 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
   
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
   
       <tbody><tr>
         <td align="left" style="font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;">
           
 <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:1.5;text-align:left;color:#000000;">
   <p><span style="font-size: 13px; color: #ffffff;"><strong><span style="color: #f17423;">Tr&#x1EE5; s&#x1EDF; ch&#xED;nh: </span></strong>T&#x1EA7;ng 4, to&#xE0; nh&#xE0; Flemington, 182 L&#xEA; &#x110;&#x1EA1;i H&#xE0;nh, P.15, Q.11, TP.HCM.</span></p>
<p><span style="font-size: 13px; color: #ffffff;"><strong><span style="color: #f17423;">30 Trung t&#xE2;m giao d&#x1ECB;ch: </span></strong><a style="color: #ffffff;" title="Xem Trung t&#xE2;m giao d&#x1ECB;ch g&#x1EA7;n b&#x1EA1;n" href="https://propzy.vn/diem-giao-dich" target="_blank" rel="noopener">Xem Trung t&#xE2;m giao d&#x1ECB;ch g&#x1EA7;n b&#x1EA1;n</a></span></p>
 </div>

         </td>
       </tr>
     
 </tbody></table>

 </div>

     <!--[if mso | IE]>
       </td>
     
   </tr>
 
             </table>
           <![endif]-->
         </td>
       </tr>
     </tbody>
   </table>
   
 </div>

 
 <!--[if mso | IE]>
     </td>
   </tr>
 </table>
 <![endif]-->


 </div>

 

</body></html>`
  );
};
export const EmailTemplate2 = (props) => {
  const { user = {}, coupons = [] } = props;

  const parseCounpons = coupons.map((coupon) => {
    const prize = prizes.find((sprize) => sprize.key === coupon.category);

    const descriptions = prize.description.map((item) => `<li>${item}</li>`).join('');

    const string = ` <li style="font-size: 14px; color: #fff; font-family: arial, sans-serif;">
                <div style="color:#f17423;">${coupon.category}: ${coupon.name}</div>
                <div>${prize.detail}</div>
                <ul>
                    ${descriptions}
                </ul> 
            </li>`;

    return string;
  }).join('<br/>');

  return (
    `<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
        <title>
          
        </title>
        <!--[if !mso]><!-- -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--<![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">
          #outlook a { padding:0; }
          .ReadMsgBody { width:100%; }
          .ExternalClass { width:100%; }
          .ExternalClass * { line-height:100%; }
          body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
          table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
          img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
          p { display:block;margin:13px 0; }
        </style>
        <!--[if !mso]><!-->
        <style type="text/css">
          @media only screen and (max-width:480px) {
            @-ms-viewport { width:320px; }
            @viewport { width:320px; }
          }
        </style>
        <!--<![endif]-->
        <!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        <!--[if lte mso 11]>
        <style type="text/css">
          .outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->
        
      <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=arial" rel="stylesheet" type="text/css">
        <style type="text/css">
          @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
@import url(https://fonts.googleapis.com/css?family=Cabin:400,700);
@import url(https://fonts.googleapis.com/css?family=arial);
        </style>
      <!--<![endif]-->

    
        
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
.mj-column-per-50 { width:50% !important; max-width: 50%; }
      }
    </style>
    
  
        <style type="text/css">
        
        

    @media only screen and (max-width:480px) {
      table.full-width-mobile { width: 100% !important; }
      td.full-width-mobile { width: auto !important; }
    }
  
        </style>
        <style type="text/css">.hide_on_mobile { display: none !important;} 
        @media only screen and (min-width: 480px) { .hide_on_mobile { display: block !important;} }
        .hide_section_on_mobile { display: none !important;} 
        @media only screen and (min-width: 480px) { .hide_section_on_mobile { display: table !important;} }
        .hide_on_desktop { display: block !important;} 
        @media only screen and (min-width: 480px) { .hide_on_desktop { display: none !important;} }
        .hide_section_on_desktop { display: table !important;} 
        @media only screen and (min-width: 480px) { .hide_section_on_desktop { display: none !important;} }
        [owa] .mj-column-per-100 {
            width: 100%!important;
          }
          [owa] .mj-column-per-50 {
            width: 50%!important;
          }
          [owa] .mj-column-per-33 {
            width: 33.333333333333336%!important;
          }
          p {
              margin: 0px;
          }
          @media only print and (min-width:480px) {
            .mj-column-per-100 { width:100%!important; }
            .mj-column-per-40 { width:40%!important; }
            .mj-column-per-60 { width:60%!important; }
            .mj-column-per-50 { width: 50%!important; }
            mj-column-per-33 { width: 33.333333333333336%!important; }
            }</style>
        
      </head>
      <body style="background-color:#155aa9;">
        
        
      <div style="background-color:#155aa9;">
        
      
      <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    
      
      <div style="Margin:0px auto;max-width:600px;">
        
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;vertical-align:top;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
            
      <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
        
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
        
            <tbody><tr>
              <td align="center" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
        <tbody>
          <tr>
            <td style="width:192px;">
              
      <img height="auto" src="https://www.upsieutoc.com/images/2021/02/05/logo6706471805fbc0d6.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="192">
    
            </td>
          </tr>
        </tbody>
      </table>
    
              </td>
            </tr>
          
            <tr>
              <td align="center" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
        <tbody>
          <tr>
            <td style="width:600px;">
              
      <img height="auto" src="https://www.upsieutoc.com/images/2021/02/05/Group-63.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="600">
    
            </td>
          </tr>
        </tbody>
      </table>
    
              </td>
            </tr>
          
            <tr>
              <td align="left" style="font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;">
                
      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:1.5;text-align:left;color:#000000;">
        <h1 style="font-family: &apos;Cabin&apos;, sans-serif; line-height: 100%;"><span style="color: #ecf0f1;">Xin ch&#xE0;o ${user.name},</span></h1>
<p><span style="color: #fbeeb8; font-size: 13px;">C&#x1EA3;m &#x1A1;n b&#x1EA1;n &#x111;&#xE3; tham gia ch&#x1B0;&#x1A1;ng tr&#xEC;nh <span style="color: #f17423;"><strong>C&#xD3; NH&#xC0; L&#xC0; C&#xD3; T&#x1EBE;T 2021</strong></span> c&#x1EE7;a Propzy &#x111;&#x1B0;&#x1EE3;c di&#x1EC5;n ra t&#x1EEB; ng&#xE0;y 25/01/2021 &#x111;&#x1EBF;n h&#x1EBF;t 28/02/2021.</span></p>
<p><span style="color: #fbeeb8; font-size: 13px;">Xin ch&#xFA;c m&#x1EEB;ng B&#x1EA1;n &#x111;&#xE3; h&#xE1;i th&#xE0;nh c&#xF4;ng L&#xEC; X&#xEC; &#x2013; Khai Xu&#xE2;n &#x110;&#xF3;n L&#x1ED9;c. Propzy xin g&#x1EED;i t&#x1EB7;ng B&#x1EA1;n ph&#x1EA7;n qu&#xE0; &#x111;&#x1EB7;c bi&#x1EC7;t m&#xE0; b&#x1EA1;n nh&#x1EAD;n &#x111;&#x1B0;&#x1EE3;c t&#x1EEB; ch&#x1B0;&#x1A1;ng tr&#xEC;nh, vui l&#xF2;ng xem th&#xEA;m b&#xEA;n d&#x1B0;&#x1EDB;i:</span></p>
<p>&#xA0;</p>
${parseCounpons}
<p><span style="font-size: 13px; color: #ffffff;">N&#x1EBF;u <span style="color: #f17423;">${user.name}</span> g&#x1EB7;p b&#x1EA5;t k&#x1EF3; kh&#xF3; kh&#x103;n n&#xE0;o khi s&#x1EED; d&#x1EE5;ng M&#xE3; &#x1B0;u &#x111;&#xE3;i, vui l&#xF2;ng tham kh&#x1EA3;o th&#xF4;ng tin d&#x1B0;&#x1EDB;i &#x111;&#xE2;y:</span></p>
<p><span style="font-size: 13px; color: #ffffff;">S&#x1EED; d&#x1EE5;ng &#x1AF;u &#x111;&#xE3;i c&#x1EE7;a Lalamove: G&#x1ECD;i 0866869175 ho&#x1EB7;c truy c&#x1EAD;p: <span style="color: #f17423;"><a style="color: #f17423;" title="Link" href="https://www.lalamove.com/vietnam/hcmc/vi/home?utm_source=propzy" target="_blank" rel="noopener">Link</a></span></span><br><span style="font-size: 13px; color: #ffffff;">S&#x1EED; d&#x1EE5;ng &#x1AF;u &#x111;&#xE3;i c&#x1EE7;a Vietnam Moving: G&#x1ECD;i 18007011 ho&#x1EB7;c truy c&#x1EAD;p: <span style="color: #f17423;"><a style="color: #f17423;" title="Link" href="https://vietnammoving.com/?utm_source=propzy" target="_blank" rel="noopener">Link</a></span></span><br><span style="font-size: 13px; color: #ffffff;">S&#x1EED; d&#x1EE5;ng &#x1AF;u &#x111;&#xE3;i c&#x1EE7;a Jupviec.vn: G&#x1ECD;i 19006082 ho&#x1EB7;c truy c&#x1EAD;p: <span style="color: #f17423;"><a style="color: #f17423;" title="Link" href="https://www.jupviec.vn/huong-dan-dat-dich-vu-tong-ve-sinh-tren-ung-dung-jupviec-d2018.html" target="_blank" rel="noopener">Link</a></span></span><br><span style="font-size: 13px; color: #ffffff;">S&#x1EED; d&#x1EE5;ng &#x1AF;u &#x111;&#xE3;i c&#x1EE7;a GoDee: G&#x1ECD;i 0888411455 ho&#x1EB7;c truy c&#x1EAD;p: <span style="color: #f17423;"><a style="color: #f17423;" title="Link" href="https://godee.vn/vn?utm_source=propzy" target="_blank" rel="noopener">Link</a></span></span><br><span style="font-size: 13px; color: #ffffff;">S&#x1EED; d&#x1EE5;ng &#x1AF;u &#x111;&#xE3;i c&#x1EE7;a HomeAZ: G&#x1ECD;i 090 173 2989 ho&#x1EB7;c truy c&#x1EAD;p: <span style="color: #f17423;"><a style="color: #f17423;" title="Link" href="https://homeaz.vn/?utm_source=propzy" target="_blank" rel="noopener">Link</a></span></span><br><span style="font-size: 13px; color: #ffffff;">Nh&#x1EAD;n ngay g&#xF3;i &#x1B0;u &#x111;&#xE3;i Propzy CARE tr&#x1ECB; gi&#xE1; 2.000.000 VN&#x110; t&#x1EEB; ng&#xE0;y 25/01 - 28/02/2021 v&#xE0; ph&#xE1;t sinh giao d&#x1ECB;ch tr&#x1B0;&#x1EDB;c ng&#xE0;y 30/03/2021.</span></p>
<p>&#xA0;</p>
<p><span style="font-size: 13px; color: #ffffff;">Propzy CARE &#x2013; G&#xF3;i d&#x1ECB;ch v&#x1EE5; ch&#x103;m s&#xF3;c kh&#xE1;ch h&#xE0;ng xuy&#xEA;n su&#x1ED1;t tr&#x1B0;&#x1EDB;c, trong v&#xE0; c&#x1EA3; sau khi giao d&#x1ECB;ch b&#x1EA5;t &#x111;&#x1ED9;ng s&#x1EA3;n t&#x1EA1;i Propzy. V&#x1EDB;i g&#xF3;i d&#x1ECB;ch v&#x1EE5; Propzy CARE, kh&#xE1;ch h&#xE0;ng <strong><span style="color: #f17423;">&#x111;&#x1B0;&#x1EE3;c ch&#x103;m s&#xF3;c v&#xE0; h&#x1B0;&#x1EDF;ng &#x111;&#x1EB7;c quy&#x1EC1;n &#x1B0;u &#x111;&#xE3;i mi&#x1EC5;n ph&#xED; </span></strong>nh&#x1B0; v&#x1EAD;n chuy&#x1EC3;n, d&#x1ECD;n nh&#xE0;, chuy&#x1EBF;n &#x111;i mi&#x1EC5;n ph&#xED; c&#xF9;ng nhi&#x1EC1;u g&#xF3;i d&#x1ECB;ch v&#x1EE5; c&#x1ED9;ng th&#xEA;m kh&#xE1;c t&#x1EEB; c&#xE1;c &#x111;&#x1ED1;i t&#xE1;c c&#x1EE7;a Propzy. Th&#x1EA3;nh th&#x1A1;i Chill T&#x1EBF;t - Propzy CARE h&#x1EBF;t! &#xA0;</span></p>
<p>&#xA0;</p>
<p>&#xA0;</p>
<p>&#xA0;</p>
      </div>
    
              </td>
            </tr>
          
      </tbody></table>
    
      </div>
    
          <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    
      
      <div style="Margin:0px auto;max-width:600px;">
        
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;vertical-align:top;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->
            
      <div class="mj-column-per-50 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
        
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
        
            <tbody><tr>
              <td align="center" style="font-size:0px;padding:10px 10px 10px 10px;word-break:break-word;">
                
      
     <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
      >
        <tr>
      
              <td>
            <![endif]-->
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                
      <tbody><tr>
        <td style="padding:4px;">
          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:transparent;border-radius:3px;width:35px;">
            <tbody><tr>
              <td style="font-size:0;height:35px;vertical-align:middle;width:35px;">
                <a href="https://www.facebook.com/propzyvietnam" target="_blank">
                    <img alt="facebook" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/rounded/facebook.png" style="border-radius:3px;display:block;" width="35">
                  </a>
                </td>
              </tr>
          </tbody></table>
        </td>
        
      </tr>
    
              </tbody></table>
            <!--[if mso | IE]>
              </td>
            
              <td>
            <![endif]-->
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                
      <tbody><tr>
        <td style="padding:4px;">
          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:transparent;border-radius:3px;width:35px;">
            <tbody><tr>
              <td style="font-size:0;height:35px;vertical-align:middle;width:35px;">
                <a href="https://propzy.vn/" target="_blank">
                    <img height="35" src="https://app.topol.io/img/editor/world.png" style="border-radius:3px;display:block;" width="35">
                  </a>
                </td>
              </tr>
          </tbody></table>
        </td>
        
      </tr>
    
              </tbody></table>
            <!--[if mso | IE]>
              </td>
            
              <td>
            <![endif]-->
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                
      <tbody><tr>
        <td style="padding:4px;">
          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:transparent;border-radius:3px;width:35px;">
            <tbody><tr>
              <td style="font-size:0;height:35px;vertical-align:middle;width:35px;">
                <a href="youtube" target="_blank">
                    <img height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/rounded/youtube.png" style="border-radius:3px;display:block;" width="35">
                  </a>
                </td>
              </tr>
          </tbody></table>
        </td>
        
      </tr>
    
              </tbody></table>
            <!--[if mso | IE]>
              </td>
            
          </tr>
        </table>
      <![endif]-->
    
    
              </td>
            </tr>
          
      </tbody></table>
    
      </div>
    
          <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->
            
      <div class="mj-column-per-50 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
        
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
        
            <tbody><tr>
              <td align="left" style="font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;">
                
      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:1.5;text-align:left;color:#000000;">
        <p><span style="font-size: 13px; color: #ffffff;"><strong><span style="color: #f17423;">Tr&#x1EE5; s&#x1EDF; ch&#xED;nh: </span></strong>T&#x1EA7;ng 4, to&#xE0; nh&#xE0; Flemington, 182 L&#xEA; &#x110;&#x1EA1;i H&#xE0;nh, P.15, Q.11, TP.HCM.</span></p>
<p><span style="font-size: 13px; color: #ffffff;"><strong><span style="color: #f17423;">30 Trung t&#xE2;m giao d&#x1ECB;ch: </span></strong><a style="color: #ffffff;" title="Xem Trung t&#xE2;m giao d&#x1ECB;ch g&#x1EA7;n b&#x1EA1;n" href="https://propzy.vn/diem-giao-dich" target="_blank" rel="noopener">Xem Trung t&#xE2;m giao d&#x1ECB;ch g&#x1EA7;n b&#x1EA1;n</a></span></p>
      </div>
    
              </td>
            </tr>
          
      </tbody></table>
    
      </div>
    
          <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
    
    
      </div>
    
      
    
  </body></html>`
  );
};
