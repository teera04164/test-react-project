import logo from './true.jpg'
export function genHTML(v1, v2, v3) {
  let h = `<html>

  <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
  
      <title>A simple, clean, and responsive HTML invoice template</title>
  
  
      <!-- Favicon -->
      <link rel="icon" href="/images/favicon.png" type="image/x-icon">
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  
      <!-- Invoice styling -->
      <style>
          @font-face {
              font-family: SourceSansPro;
              src: url(SourceSansPro-Regular.ttf);
          }
  
          body {
              -webkit-print-color-adjust: exact !important;
          }
  
          /* .clearfix:after {
              content: "";
              display: table;
              clear: both;
          } */
  
           .hhh {
              position: relative;
              width: 21cm;
              height: 29.7cm;
              margin: 0 auto;
              color: hsl(0, 0%, 0%);
              background: #FFFFFF;
              font-family: Arial, sans-serif;
              font-size: 14px;
              font-family: SourceSansPro;
          }
  
          header {
              padding: 10px 0;
              /* margin-bottom: 20px; */
              /* border-bottom: 1px solid #AAAAAA; */
          }
  
          #logo {
              float: left;
              margin-top: 25px;
          }
  
          #logo img {
              height: 40px;
          }
  
          #company {
              float: left;
              text-align: left;
              margin-left: 20px
          }
  
          #address {
              font-family: Arial, sans-serif;
              font-size: 12px;
              font-family: SourceSansPro;
              font-weight: inherit;
          }
  
  
          #details {
              margin-bottom: 50px;
          }
  
          #client {
              padding-left: 6px;
              border-left: 6px solid #0087C3;
              float: left;
          }
  
          #client .to {
              color: #777777;
          }
  
          h2.name {
              font-size: 1em;
              font-weight: bold;
              margin: 0;
          }
  
          h2.name-th {
              font-size: 0.8em;
              font-weight: bold;
              margin: 0;
          }
  
          /* #address {
              margin: 80px;
              font-size: 0.8em;
              font-weight:bold;
              margin: 0;
          } */
  
          #invoice {
              float: right;
              text-align: right;
          }
  
          #invoice h1 {
              color: #0087C3;
              font-size: 2.4em;
              line-height: 1em;
              font-weight: normal;
              margin: 0 0 10px 0;
          }
  
          #invoice .date {
              font-size: 1.1em;
              color: #777777;
          }
  
          /* table {
              width: 100%;
              border-collapse: collapse;
              border-spacing: 0;
              margin-bottom: 20px;
          }
  
          table th,
          table td {
              padding: 20px;
              background: #EEEEEE;
              text-align: center;
              border-bottom: 1px solid #FFFFFF;
          }
  
          table th {
              white-space: nowrap;
              font-weight: normal;
          }
  
          table td {
              text-align: right;
          }
  
          table td h3 {
              color: #57B223;
              font-size: 1.2em;
              font-weight: normal;
              margin: 0 0 0.2em 0;
          }
  
          table .no {
              color: #FFFFFF;
              font-size: 1.6em;
              background: #57B223;
          }
  
          table .desc {
              text-align: left;
          }
  
          table .unit {
              background: #DDDDDD;
          }
  
          table .qty {}
  
          table .total {
              background: #57B223;
              color: #FFFFFF;
          }
  
          table td.unit,
          table td.qty,
          table td.total {
              font-size: 1.2em;
          }
          
          table tbody tr:last-child td {
              border: none;
          }
  
          table tfoot td {
              padding: 10px 20px;
              background: #FFFFFF;
              border-bottom: none;
              font-size: 1.2em;
              white-space: nowrap;
              border-top: 1px solid #AAAAAA;
          }
  
          table tfoot tr:first-child td {
              border-top: none;
          }
  
          table tfoot tr:last-child td {
              color: #57B223;
              font-size: 1.4em;
              border-top: 1px solid #57B223;
  
          }
  
          table tfoot tr td:first-child {
              border: none;
          } */
  
          #thanks {
              font-size: 2em;
              margin-bottom: 50px;
          }
  
          #notices {
              padding-left: 6px;
              border-left: 6px solid #0087C3;
          }
  
          #notices .notice {
              font-size: 1.2em;
          }
  
          footer {
              color: #777777;
              width: 100%;
              height: 30px;
              position: absolute;
              bottom: 0;
              border-top: 1px solid #AAAAAA;
              padding: 8px 0;
              text-align: center;
          }
  
          #fax {
              font-size: 12px;
              font-weight: inherit;
              text-align: right !important;
          }
  
          #div-fax {
              margin-top: 33px;
          }
  
          #table-Quotation {
              border: 1px solid black;
              background: rgb(255, 0, 0);
              text-align: center;
              font-weight: bold;
              color: #FFFFFF
          }
  
          .table-prepare td {
              vertical-align: bottom
          }
  
          .table-ref table {
              border-collapse: collapse;
          }
  
          td.border-left-bottom {
              margin-top: 100px;
              border-left: solid 1px #000;
              font-size: 11px;
              /* border-right: solid 1px #000; */
              /* border-bottom: solid 1px #000; */
          }
  
          td.border-left-bottom-price {
              border-left: solid 1px #000;
              border-right: solid 1px #000;
              font-size: 11px;
          }
  
          tr.border-header {
              border: solid 1px #000;
              font-size: 11px;
          }
      </style>
  </head>
  
  <body class="hhh">
      <header class="clearfix">
          <div id="logo">
              <img src=${logo}>
          </div>
          <div id="company">
              <h2 class="name">True Internet Corporation Co., Ltd.</h2>
              <h2 class="name-th">บริษัท ทรูอินเทอรเน็ต คอร์ปอเรชั่น จำกัด</h2>
              <br />
              <div id="address">18 อาคาร ทรูทาวเวอร ์ถนนรัชดาภิเษก แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพมหานคร 10310</div>
              <div id="address">18 True Tower, Ratchadapisek road, Huai Kwang Bangkok 10310</div>
  
  
  
  
              <!-- <div><a href="mailto:company@example.com">company@example.com</a></div> -->
          </div>
          <div id="div-fax">
              <div id="fax">เลขที่ผู้เสียภาษี : 0105549025026 </div>
              <div id="fax">Telephone : (+66) 2643 1111 </div>
              <div id="fax">Fax : (+66) 2643 1651 </div>
          </div>
  
          </div>
      </header>
      <main>
  
  
  
  
          <div id="table-Quotation">
              Quotation
          </div>
  
  
          <table cellspacing="0" cellpadding="0" style="padding: 0;margin-top: 1%;width: 100%">
              <tr>
                  <td style="width: 500px;">
                      <div
                          style="background: red;border: 1px solid black;word-break: break-all;text-align: center;font-weight: bold;color: #FFFFFF">
                          Prepare for
                      </div>
                      <!-- <div style="border: 1px solid black;width: 50%;border-bottom-color: #FFFFFF;background: rgb(255, 0, 0);">ddddddddd</div>
                              <div style="border: 1px solid black;width: 50%;word-wrap: break-word;">dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div> -->
                  </td>
                  <td style="width: 1%"></td>
                  <td style="width: 50%;height: 100%">
                      <div
                          style="border: 1px solid black;background: red;word-break: break-all;text-align: center;font-weight: bold;color: #FFFFFF">
                          Sale Respresentative
                      </div>
                      <!-- <div style="border: 1px solid black;width: 50%;border-bottom: op ;background: rgb(255, 0, 0);">ddddddddd</div>
                              <div  style="border: 1px solid black;width: 50%; max-width: 450px;  word-wrap: break-word;">dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</> -->
                  </td>
              </tr>
              <tr>
                  <td style="width: 500px;">
                      <div
                          style="border: 1px solid black;word-break: break-all;text-align: center;color: rgb(0, 0, 0);min-height: 80px">
                          <table class="table-prepare" style="width: 100%">
                              <tr>
                                  <td style="text-align: right">Quotation For :</td>
                                  <td style="text-align: left">Private_VPN2</td>
                              </tr>
                              <tr>
                                  <td style="text-align: right">Attention :</td>
                                  <td style="text-align: left">P</td>
                              </tr>
                              <tr>
                                  <td style="text-align: right">Contact Number :</td>
                                  <td style="text-align: left">083013012</td>
                              </tr>
                              <tr>
                                  <td style="text-align: right">Email :</td>
                                  <td style="text-align: left"> Private@PrivateVPN.co.th</td>
                              </tr>
  
                          </table>
  
                      </div>
                      <!-- <div style="border: 1px solid black;width: 50%;border-bottom-color: #FFFFFF;background: rgb(255, 0, 0);">ddddddddd</div>
                              <div style="border: 1px solid black;width: 50%;word-wrap: break-word;">dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div> -->
                  </td>
                  <td style="width: 1%"></td>
                  <td style="width: 50%;height: 100%;vertical-align:top;min-height: 100px">
                      <div
                          style="border: 1px solid black;word-break: break-all;text-align: center;color: rgb(0, 0, 0);min-height: 80px">
                          <table class="table-prepare" style="width: 100%">
                              <tr>
                                  <td style="text-align: right">&emsp;</td>
                                  <td></td>
                              </tr>
                              <tr>
                                  <td style="text-align: right">Sales Person :</td>
                                  <td>sirirat</td>
                              </tr>
                              <tr>
                                  <td style="text-align: right">Contact Number : </td>
                                  <td>0838003012</td>
                              </tr>
                              <tr>
                                  <td style="text-align: right">Email :</td>
                                  <td> Private@PrivateVPN.co.th</td>
                              </tr>
  
                          </table>
  
                      </div>
                      <!-- <div style="border: 1px solid black;width: 50%;border-bottom: op ;background: rgb(255, 0, 0);">ddddddddd</div>
                              <div  style="border: 1px solid black;width: 50%; max-width: 450px;  word-wrap: break-word;">dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</> -->
                  </td>
              </tr>
          </table>
          <div class="table-ref">
              <table cellspacing="0" cellpadding="0" style="padding: 0;margin-top: 1%;border: 1px solid;width: 100%">
                  <tr style="border: 1px solid;background:rgb(179, 179, 179)">
                      <td style="width: 400px;text-align: center;border: 1px solid;font-weight: bold">
                          Quotation Ref. No.
                      </td>
                      <td style="width: 140px;text-align: center;border: 1px solid;font-weight: bold">
                          Term of payment
                      </td>
                      <td style="width: 200px;text-align: center;border: 1px solid;font-weight: bold;">
                          Value Added Tax
                      </td>
                      <td style="width: 150px;text-align: center;border: 1px solid;font-weight: bold;">
                          Quote Date
                      </td>
  
                  </tr>
                  <tr>
                      <td style="text-align: center;border: 1px solid;">
                          PDT-20180517-144759630
                      </td>
                      <td style="text-align: center;border: 1px solid;">
                          45
                      </td>
                      <td style="text-align: center;border: 1px solid;">
                          Excluded
                      </td>
                      <td style="text-align: center;border: 1px solid;">
                          17-May-18
                      </td>
                  </tr>
              </table>
  
          </div>
  
          <div class="table-detail">
              <table cellspacing="0" cellpadding="0" style="padding: 0;margin-top: 1%;width: 100%;text-align: center ">
                  <tr class="border-header" style="background: rgb(179, 179, 179);font-weight: bold">
                      <td class="border-left-bottom" style="width: 40px;" rowspan="2">
                          Item1
                      </td>
                      <td class="border-left-bottom" style="width: 288px;">
                          Description
                      </td>
                      <td class="border-left-bottom" style="width: 45px;" rowspan="2">
                          Media
                      </td>
                      <td class="border-left-bottom" style="width: 45px;" rowspan="2">
                          Speed
                          (Mbps.)
                      </td>
                      <td class="border-left-bottom" style="width: 150px;">
                          Router
                      </td>
                      <td class="border-left-bottom" style="width: 123px;">
                          Monthly Charge
                      </td>
                  </tr>
                  <tr class="border-header" style="background: rgb(214, 214, 214);font-weight: bold">
                      <td class="border-left-bottom">Installation Address</td>
                      <td class="border-left-bottom">Router Name</td>
                      <td class="border-left-bottom"> Price</td>
                  </tr>
                  <tr style="border: 0;">
                      <td class="border-left-bottom">1</td>
                      <td class="border-left-bottom" style="text-align: left;font-size: 12px">
                          เอ็มโพเรียม ทาวเวอร์
                          วงจร MPLS Private VPN
                          65 - คลองตัน คลองเตย กรุงเทพมหานคร</td>
                      <td class="border-left-bottom"> Fiber</td>
                      <td class="border-left-bottom">40</td>
                      <td class="border-left-bottom">Cisco 2821RF</td>
                      <td class="border-left-bottom-price">20,000</td>
                  </tr>
                  <tr style="border: 0;">
                      <td class="border-left-bottom">2</td>
                      <td class="border-left-bottom" style="text-align: left;font-size: 12px">
                          เอ็มโพเรียม ทาวเวอร์
                          วงจร MPLS Private VPN
                          65 - คลองตัน คลองเตย กรุงเทพมหานคร</td>
                      <td class="border-left-bottom"> Fiber</td>
                      <td class="border-left-bottom">40</td>
                      <td class="border-left-bottom">Cisco 2821RF</td>
                      <td class="border-left-bottom-price">20,000</td>
                  </tr>
                  <tr style="border: 0;">
                      <td class="border-left-bottom">3</td>
                      <td class="border-left-bottom" style="text-align: left;font-size: 12px">
                          เอ็มโพเรียม ทาวเวอร์
                          วงจร MPLS Private VPN
                          65 - คลองตัน คลองเตย กรุงเทพมหานคร</td>
                      <td class="border-left-bottom"> Fiber</td>
                      <td class="border-left-bottom">40</td>
                      <td class="border-left-bottom">Cisco 2821RF</td>
                      <td class="border-left-bottom-price">20,000</td>
                  </tr>
                  <tr style="border: 0;">
                      <td class="border-left-bottom">4</td>
                      <td class="border-left-bottom" style="text-align: left;font-size: 12px">
                          เอ็มโพเรียม ทาวเวอร์
                          วงจร MPLS Private VPN
                          65 - คลองตัน คลองเตย กรุงเทพมหานคร</td>
                      <td class="border-left-bottom"> Fiber</td>
                      <td class="border-left-bottom">40</td>
                      <td class="border-left-bottom">Cisco 2821RF</td>
                      <td class="border-left-bottom-price">20,000</td>
                  </tr>
                  <tr style="border: 0;">
                      <td valign="top" class="border-left-bottom" style="height: 400px">5</td>
                      <td valign="top" class="border-left-bottom" style="text-align: left;font-size: 12px">
                          เอ็มโพเรียม ทาวเวอร์
                          วงจร MPLS Private VPN
                          65 - คลองตัน คลองเตย กรุงเทพมหานคร</td>
                      <td valign="top" class="border-left-bottom"> Fiber</td>
                      <td valign="top" class="border-left-bottom">40</td>
                      <td valign="top" class="border-left-bottom">Cisco 2821RF</td>
                      <td valign="top" class="border-left-bottom-price">20,000</td>
                  </tr>
                  <tr style="border: solid 1px #000;background: rgb(187, 186, 186)">
                      <td colspan="5"> Total amount excluded VAT </td>
                      <td class="border-left-bottom-price">100000</td>
                  </tr>
  
              </table>
  
          </div>
  
          <span style="font-weight: bold;font-size: 13px;visibility: top;">
              Terms and Conditions
          </span>
          <table style="width: 100%;font-size: 12px">
              <tr>
                  <td style="width: 30px">1)</td>
                  <td>ระยะสัญญา 24 เดือน</td>
              </tr>
              <tr>
                  <td style="width: 30px">2)</td>
                  <td>ไม่รวมค่าดำเนินการภายในอาคาร/พื้นที่ ค่าสายภายในอาคาร/พื้นที่ ทุกกรณี</td>
              </tr>
              <tr>
                  <td style="width: 30px">3)</td>
                  <td>กำหนดราคาข้างต้น ไม่เกิน 30 วัน</td>
              </tr>
              <tr>
                  <td style="width: 30px;vertical-align: top">4)</td>
                  <td>ค่าบริการรายเดือน จะเริ่มเก็บนับตั้งแต่วันที่เปิดใช้บริการตามเอกสารในสัญญาใช้บริการ
  
                  </td>
              </tr>
              <tr>
                  <td style="width: 30px;vertical-align: top">5)</td>
                  <td>
                      ผู้ให้ บริการสงวนสทธิ์ในการแก้ไขเพิ่มเติม และเปลี่ยนแปลงข้อกำาหนดหรือเงื่อนไขในการให้บริการ
                      ตลอดจนอัตราค่าบริการและรวมถึงการเปลี่ยนแปลง
                      ไม่ว่ากรณีใดๆ ซึ่งกระทำตามคำสั่งที่ชอบด้วยกฏหมาย หรือคณะกรรมการกิจการโทรคมนาคมแห่งชาติ ("กสทช.")
                      หรือผู้ให้สิทธิ์ดำเนินการให้บริการแก่ผู้ให้บริการ
                  </td>
              </tr>
              <tr>
                  <td style="width: 30px">6)</td>
                  <td>
                      ผู้ให้บริการสงวนสทธิ์ในการปรับเปลี่ยนส่วนลด และระยะเวลาการให้ส่วนลด
                      หากการใช้งานของลูกค้าไม่เป็นไปตามข้อตกลงการใช้บริการ
  
                  </td>
              </tr>
              <tr>
                  <td style="width: 30px">7)</td>
                  <td>ราคานี้รวมยกเว้นค่าบริการ กรณีลูกค้าขอย้ายสถานที่ติดตั้ง</td>
              </tr>
              <tr>
                  <td style="width: 30px">8)</td>
                  <td>หากลูกค้ายกเลิกการใชบริการก่อนครบระยะสัญาดังกล่าวข้างต้น มีบทปรับ 100% ตามระยะสญญาที่เหลือ</td>
              </tr>
          </table>
  
          <table border="1" style="text-align: center;width :100%;font-size: 13px;margin-top: 15px">
              <tr style="background: rgb(179, 179, 179) ;font-weight: bold">
                  <td colspan="2">True Internet Corporation Co., Ltd.</td>
                  <td>Customer's Acceptance</td>
              </tr>
              <tr style="background: rgb(214, 214, 214);font-weight: bold">
                  <td>Quoted by </td>
                  <td>Approved by</td>
                  <td>Please kindly sign to proceed with formal application</td>
              </tr>
              <tr>
                  <td><br /><br /><span>(&emsp;&emsp;ddddddddd&emsp13;&emsp;)</span><br />Sales/Sr. Account Executive</td>
                  <td><br /><br /><span>(&emsp;&emsp;ddddddddd&emsp13;&emsp;)</span><br /> Assistant Director</td>
                  <td><br /><br /><span>(&emsp;&emsp;P&emsp13;&emsp;)</span> <br /> Date ………/………/……… </td>
                  </td>
              </tr>
          </table>
          <br />
  
  
  
  
          <!-- <div id="details" class="clearfix">
              <div id="client">
                  <div class="to">INVOICE TO:</div>
                  <h2 class="name">John Doe</h2>
                  <div class="address">796 Silver Harbour, TX 79273, US</div>
                  <div class="email"><a href="mailto:john@example.com">john@example.com</a></div>
              </div>
              <div id="invoice">
                  <h1>INVOICE 3-2-1</h1>
                  <div class="date">Date of Invoice: 01/06/2014</div>
                  <div class="date">Due Date: 30/06/2014</div>
              </div>
          </div>
          <table border="0" cellspacing="0" cellpadding="0">
              <thead>
                  <tr>
                      <th class="no">#</th>
                      <th class="desc">DESCRIPTION</th>
                      <th class="unit">UNIT PRICE</th>
                      <th class="qty">QUANTITY</th>
                      <th class="total">TOTAL</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td class="no">01</td>
                      <td class="desc">
                          <h3>Website Design</h3>Creating a recognizable design solution based on the company's existing
                          visual identity
                      </td>
                      <td class="unit">$40.00</td>
                      <td class="qty">30</td>
                      <td class="total">$1,200.00</td>
                  </tr>
                  <tr>
                      <td class="no">02</td>
                      <td class="desc">
                          <h3>Website Development</h3>Developing a Content Management System-based Website
                      </td>
                      <td class="unit">$40.00</td>
                      <td class="qty">80</td>
                      <td class="total">$3,200.00</td>
                  </tr>
                  <tr>
                      <td class="no">03</td>
                      <td class="desc">
                          <h3>Search Engines Optimization</h3>Optimize the site for search engines (SEO)
                      </td>
                      <td class="unit">$40.00</td>
                      <td class="qty">20</td>
                      <td class="total">$800.00</td>
                  </tr>
              </tbody>
              <tfoot>
                  <tr>
                      <td colspan="2"></td>
                      <td colspan="2">SUBTOTAL</td>
                      <td>$5,200.00</td>
                  </tr>
                  <tr>
                      <td colspan="2"></td>
                      <td colspan="2">TAX 25%</td>
                      <td>$1,300.00</td>
                  </tr>
                  <tr>
                      <td colspan="2"></td>
                      <td colspan="2">GRAND TOTAL</td>
                      <td>$6,500.00</td>
                  </tr>
                  <tr>
                      <td colspan="2"></td>
                      <td colspan="2">GRAND TOTAL</td>
                      <td>$6,500.00</td>
                  </tr>
                  <tr>
                      <td colspan="2"></td>
                      <td colspan="2">GRAND TOTAL</td>
                      <td>$6,500.00</td>
                  </tr>
                  <tr>
                      <td colspan="2"></td>
                      <td colspan="2">GRAND TOTAL</td>
                      <td>$6,500.00</td>
                  </tr>
                  <tr>
                      <td colspan="2"></td>
                      <td colspan="2">GRAND TOTAL</td>
                      <td>$6,500.00</td>
                  </tr>
                  <tr>
                      <td colspan="2"></td>
                      <td colspan="2">GRAND TOTAL</td>
                      <td>$6,500.00</td>
                  </tr>
                  <tr>
                      <td colspan="2"></td>
                      <td colspan="2">GRAND TOTAL</td>
                      <td>$6,500.00</td>
                  </tr>
                  <tr>
                      <td colspan="2"></td>
                      <td colspan="2">GRAND TOTAL</td>
                      <td>$6,500.00</td>
                  </tr>
                  <tr>
                      <td colspan="2"></td>
                      <td colspan="2">GRAND TOTAL</td>
                      <td>$6,500.00</td>
                  </tr>
                  <tr>
                      <td colspan="2"></td>
                      <td colspan="2">GRAND TOTAL</td>
                      <td>$6,500.00</td>
                  </tr>
                  <tr>
                      <td colspan="2"></td>
                      <td colspan="2">GRAND TOTAL</td>
                      <td>$6,500.00</td>
                  </tr>
              </tfoot>
          </table>
          <div id="thanks">Thank you!</div>
          <div id="notices">
              <div>NOTICE:</div>
              <div class="notice">A finance charge of 1.5% will be made on unpaid balances after 30 days.</div>
          </div>
      </main>
      <footer>
          Invoice was created on a computer and is valid without the signature and seal.
      </footer> -->
  </body>
  
  </html>`

   return h;
}