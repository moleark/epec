export const STDInvioceInfo: { [key: string]: string } = {
    "orderNo": "订单号",
    "companyName": "单位名称",
    "taxNo": "纳税人识别码",
    "registerAddress": "注册地址",
    "telephone": "注册电话",
    "invoiceTypeDesc": "发票类型",
    "invoiceTitle": "发票抬头",
    "bank": "开户银行",
    "bankAccount": "银行账号",
    "address": "发票寄送地址",
    "shipmentTotalAmount": "运费合计",
    "totalAmount": "金额合计",
    "invoiceMode": "开票方式",
    "modeOfSettlement": "结算方式",
    "orderType": "订单类型",
    "invoiceContent": "发票内容",
    "invoiceSkuInfo": "发票明细信息",

};

export const STDInvioceSkuInfo: { [key: string]: string } = {
    "erporderno": "订单编号",
    "productname": "商品名称",
    "displayskuoptions": "商品描述",
    "priceWithMarkup": "订单单价",
    "quantity": "订单数量",
    "subtotal": "订单金额",
    "salestaxrate": "税率",
    "settlementpriceTotal": "税额",
    "settlementprice": "结算单价",
    "settlementquantity": "结算数量",
    "settlementamount": "结算金额",
};

export const STDCancelOrderInfo: { [key: string]: string } = {
    "orderNo": "订单号",
    "orderCancelReason": "取消原因",
};

export interface IJSONContent {
    jsonContInvioce(content: string): any;
    jsonContCancalOrder(content: string): any;
}

export function formatJSONContent(platformName: string): IJSONContent {
    switch (platformName) {
        case "epec":
            return new JsonContentEpec();

        default:
            return new JsonContent();
    }
}

export class JsonContent {

    jsonContInvioce = (content: string) => { return; };
    jsonContCancalOrder = (content: string) => { return; };
}

export class JsonContentEpec extends JsonContent {
    jsonContInvioce = (content: string) => {
        let newCont: any;
        try {
            newCont = JSON.parse(content.replace(/\\\\/g, "\\\\\\"));
            newCont.data = JSON.parse(newCont.data);
            let InvoiceModes: { [mode: number]: string } = { 1: "否", 2: "立即开票", 3: "统一开票" };
            let ModeOfSettlements: { [mode: number]: string } = { 1: "自行结算", 2: "供应处结算" };
            let OrderTypes: { [type: number]: string } = { 1: "标准", 2: "寄售" };
            for (let i = 0; i < newCont.data.length; i++) {
                newCont.data[i].messageBody = JSON.parse(newCont.data[i].messageBody);
                let { bank, bankaccount, address, extordernos, companyname, invoicetypedesc, customer, invoicecontent,
                    identificationnumber, purchasecompanyid, orderinvoiceid, shipmenttotalamount, totalamount,
                    invoiceSkuInfo, invoicemode, registeraddress, telephone, modeofsettlement, ordertype
                } = newCont.data[i].messageBody;
                newCont.data[i].stdBody = {
                    "orderNo": extordernos,
                    "invoiceTypeDesc": invoicetypedesc,
                    "companyName": companyname,
                    "taxNo": identificationnumber,
                    "address": address,
                    "registerAddress": registeraddress,
                    "telephone": telephone,
                    "bank": bank,
                    "bankAccount": bankaccount,
                    "purchaseCompanyId": purchasecompanyid,
                    "orderInvoiceId": orderinvoiceid,
                    "invoiceTitle": customer,
                    "shipmentTotalAmount": shipmenttotalamount,
                    "totalAmount": totalamount,
                    "invoiceSkuInfo": invoiceSkuInfo,
                    "invoiceMode": InvoiceModes[invoicemode],
                    "modeOfSettlement": ModeOfSettlements[modeofsettlement],
                    "orderType": OrderTypes[ordertype],
                    "invoiceContent": invoicecontent,
                };
                /*
                messageBody={
                ·    发票寄送地址        address: "北京市 市辖区 房山区 凤凰亭路15号研究院  刘海明 13693143131 "
                ·    开户银行    bank: "工行北京燕山支行"
                ·    银行帐号    bankaccount: "0200001629200246762"
                ·    单位名称    companyname: "中国石油化工股份有限公司北京北化院燕山分院"
                ·    发票抬头    customer: "中国石油化工股份有限公司北京北化院燕山分院"
                // 拼写错误    集成企业订单Id    extorderids: "2663991"
                · // 拼写错误   集成企业订单编号    extordernos: "N20210513S183F"
                ·    纳税人识别号    identificationnumber: "91110304554831594Q"
                ·    发票明细信息    invoiceSkuInfo: Proxy
                ·    发票内容    invoicecontent: "商品明细"
                ·    开票方式    invoicemode: 1 //1：否  2：立即开票  3：统一开票
                --    发票类型    invoicetype: "102"
                ·    发票类型描述    invoicetypedesc: "增值税专用发票"
                会员编号    memberid: 105888
                会员登录号    membername: "liuhm04.bjhy"
                ·    结算方式    modeofsettlement: 2 //1、自行结算　2、供应处结算
                发票Id    orderinvoiceid: 10521933
                ·    订单类型    ordertype: 1 //1：标准  2：寄售
                采购商公司名称    purchasecompany: "中国石油化工股份有限公司北京北化院燕山分院"
                采购商公司编号    purchasecompanyid: 100730
                ·     注册地址    registeraddress: "北京市房山区燕山凤凰亭路15号"
                ·    运费合计    shipmenttotalamount: 0
                //供应商公司名称    suppliercompany: "北京百灵威科技有限公司"
                //供应商公司编号    suppliercompanyid: 131882
                ·    注册电话    telephone: "010-81349684"
                ·    金额合计   totalamount: 4387.5
                }
                invoiceSkuInfo =  [{
                    商品描述    displayskuoptions: "614752 - 500G"
                    集成企业订单编号    erporderno: "N20210513S183F"
                    订单编号    orderNo: "20210513000008015118"
                    订单单价    priceWithMarkup: 292.5
                    商品id    productid: 0
                    商品名称    productname: "偶氮二异丁腈"
                    货品ID    productskuid: 0
                    订单数量    quantity: 15
                    税率    salestaxrate: 0
                    结算金额    settlementamount: 4387.5
                    结算单价    settlementprice: 292.5
                    税额    settlementpriceTotal: 0
                    结算数量    settlementquantity: 15
                    订单金额    subtotal: 4387.5
                }]
                */
            };
        } catch (error) { }
        return newCont;
    };
    jsonContCancalOrder = (content: string) => {
        let newCont: any;
        try {
            newCont = JSON.parse(content.replace(/\\\\/g, "\\\\\\"));
            newCont.data = JSON.parse(newCont.data);
            for (let i = 0; i < newCont.data.length; i++) {
                newCont.data[i].messageBody = JSON.parse(newCont.data[i].messageBody);
                let { corpcode, erporderno, orderCancelReason, orderStatus, orderid, orderno, purcScoreStatus, purchaseCompanyId, updateTime } = newCont.data[i].messageBody;
                newCont.data[i].stdBody = {
                    "orderNo": erporderno,
                    "orderId": orderid,
                    "orderCancelReason": orderCancelReason,
                    "purchaseCompanyId": purchaseCompanyId,
                };
                /* 
                messageBody:{
                    公司代码    corpcode: "40807190"
                    集成企业订单编号    erporderno: "210608000103"
                    订单取消原因    orderCancelReason: "因该产品规划为易制毒品"
                    订单状态    orderStatus: 71
                    订单id    orderid: 10510713
                    订单编号    orderno: "20210608000008905019"
                        purcScoreStatus: 0
                    采购商id    purchaseCompanyId: 100638
                    修改状态时间    updateTime: "2021-07-01 10:36:53
                }
                */
            };
        } catch (error) { }
        return newCont;
    };
}