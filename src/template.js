// import logo from './true.jpg'
import { data } from './data'

export const genHTML = async (v1, v2, v3) => {

    let detail = data.detail
    let length = data.detail.length
    let tableDetail = ''
    let header = head

    for (let i = 0; i < length; i++) {

        if (i == length - 1) {
            tableDetail += `<tr style="border: 0;">
            <td class="border-left-bottom" style="height: 500px">${i + 1}</td>
            <td class="border-left-bottom" style="text-align: left;font-size: 12px">
                ${detail[i].installationAddress}</td>
            <td class="border-left-bottom"> ${detail[i].media}</td>
            <td class="border-left-bottom">${detail[i].Speed}</td>
            <td class="border-left-bottom">${detail[i].routerName}</td>
            <td class="border-left-bottom-price">${detail[i].price}</td>
        </tr>`
        }
        else {
            tableDetail += `<tr style="border: 0;">
            <td class="border-left-bottom">${i + 1}</td>
            <td class="border-left-bottom" style="text-align: left;font-size: 12px">
                ${detail[i].installationAddress}</td>
            <td class="border-left-bottom"> ${detail[i].media}</td>
            <td class="border-left-bottom">${detail[i].Speed}</td>
            <td class="border-left-bottom">${detail[i].routerName}</td>
            <td class="border-left-bottom-price">${detail[i].price}</td>
        </tr>`
        }

    }

    let template = `<html>
  ${header}
      <main>
          <div id="table-Quotation">
              Quotation
          </div>
  
          <table  style ="width: 100%;margin-top: 5px">
              <tr>
                  <td style="width: 49%;border: 1px solid #000;background: red;text-align: center;font-weight: bold;color: #FFFFFF" > Prepare for </td>
                  <td style="width: 1%;border-top: 0px"></td>
                  <td style="width: 49%;width: 49%;border: 1px solid #000;background: red;text-align: center;font-weight: bold;color: #FFFFFF">Sale Respresentative</td>
              </tr>
              <tr>
                  <td style="border: 1px solid #000;">
                      <table class="table-prepare" style="width: 100%">
                          <tr>
                              <td style="text-align: right">Quotation For :</td>
                              <td style="text-align: left">${data.prepareFor.quotationFor}</td>
                          </tr>
                          <tr>
                              <td style="text-align: right">Attention :</td>
                              <td style="text-align: left">${data.prepareFor.attention}</td>
                          </tr>
                          <tr>
                              <td style="text-align: right">Contact Number :</td>
                              <td style="text-align: left">${data.prepareFor.contactNumber}</td>
                          </tr>
                          <tr>
                              <td style="text-align: right">Email :</td>
                              <td style="text-align: left">${data.prepareFor.email}</td>
                          </tr>
                      </table>
                  </td>
                  <td></td>
                  <td style="border: 1px solid #000;">
                      <table class="table-prepare" style="width: 100%">
                          <tr>
                              <td style="text-align: right">&emsp;</td>
                              <td></td>
                          </tr>
                          <tr>
                              <td style="text-align: right">Sales Person :</td>
                              <td>${data.saleRespresentative.salesPerson}</td>
                          </tr>
                          <tr>
                              <td style="text-align: right">Contact Number : </td>
                              <td>${data.saleRespresentative.contactNumber}</td>
                          </tr>
                          <tr>
                              <td style="text-align: right">Email :</td>
                              <td>${data.saleRespresentative.email}</td>
                          </tr>
  
                      </table>
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
                         ${data.quotation.refNo}
                      </td>
                      <td style="text-align: center;border: 1px solid;">
                         ${data.quotation.termOfPayment}
                      </td>
                      <td style="text-align: center;border: 1px solid;">
                      ${data.quotation.valueAddedTax}
                      </td>
                      <td style="text-align: center;border: 1px solid;">
                      ${data.quotation.quoteDate}
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
                 ${tableDetail}
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
  
          <table style="text-align: center;width :100%;font-size: 13px;margin-top: 15px;border: 1px solid">
              <tr style="background: rgb(179, 179, 179) ;font-weight: bold;border: 1px solid">
                  <td colspan="2" style="border: 1px solid">True Internet Corporation Co., Ltd.</td>
                  <td >Customer's Acceptance</td>
              </tr>
              <tr style="background: rgb(214, 214, 214);font-weight: bold;border: 1px solid">
                  <td style="border: 1px solid">Quoted by </td>
                  <td style="border: 1px solid">Approved by</td>
                  <td>Please kindly sign to proceed with formal application</td>
              </tr>
              <tr>
                  <td style="border: 1px solid"><br /><br /><span>(&emsp;&emsp;${data.saleRespresentative.salesPerson}&emsp13;&emsp;)</span><br />Sales/Sr. Account Executive</td>
                  <td style="border: 1px solid"><br /><br /><span>(&emsp;&emsp;${data.prepareFor.quotationFor }&emsp13;&emsp;)</span><br /> Assistant Director</td>
                  <td><br /><br /><span>(&emsp;&emsp;P&emsp13;&emsp;)</span> <br /> Date ………/………/……… </td>
                  </td>
              </tr>
          </table>
         
  </body>
  
  </html>`

    return template;
}

const head = `<head>
<style>
    @font-face {
        font-family: SourceSansPro;
        src: url(SourceSansPro-Regular.ttf);
    }

    body {
        -webkit-print-color-adjust: exact !important;
    }

     .hhh {
        position: relative;
        width: 21cm;
        height: 29.7cm;
        margin: 0 auto;
        color: hsl(0, 0%, 0%);
        background: #FFFFFF;
        /* font-family: Arial, sans-serif; */
        /* font-size: 14px; */
        /* font-family: SourceSansPro; */
    }

    header {
        padding: 10px 0;
    }

    #logo {
        float: left;
        margin-top: 20px;
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
        margin-top: 20px;
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
        vertical-align: top;
    }

    td.border-left-bottom-price {
        border-left: solid 1px #000;
        border-right: solid 1px #000;
        font-size: 11px;
        vertical-align: top;
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
        <img src="./true.jpg">
    </div>
    <div id="company">
        <h2 class="name">True Internet Corporation Co., Ltd.</h2>
        <h2 class="name-th">บริษัท ทรูอินเทอรเน็ต คอร์ปอเรชั่น จำกัด</h2>
        
        <div id="address" style="margin-top : 10px">18 อาคาร ทรูทาวเวอร์ ถนนรัชดาภิเษก แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพมหานคร 10310</div>
        <div id="address">18 True Tower, Ratchadapisek road, Huai Kwang Bangkok 10310</div>

    </div>
    <div id="div-fax">
        <div id="fax">เลขที่ผู้เสียภาษี : 0105549025026 </div>
        <div id="fax">Telephone : (+66) 2643 1111 </div>
        <div id="fax">Fax : (+66) 2643 1651 </div>
    </div>

    </div>
</header>`