import { makeObservable, observable } from "mobx";
import { CUqBase } from "../../uq-app";
import { GLOABLE } from "global";
import { VOrderDeliveryNotice } from './VOrderDeliveryNotice';
import { VInvoiceApplyDetail } from './VInvoiceApplyDetail';
import { VOrderDetail } from './VOrderDetail';
import { VCancelOrderApply } from './VCancelOrderApplyDetail';
import { groupByProduct } from "uq-app/tools/groupByProduct";
import { BoxId } from 'tonva-react';
import { VInvoiceApplys } from './VInvoiceApplys';
import { formatJSONContent } from "./JsonContent";
import { ReturnSearchCancelOrderApplys$page, ReturnSearchInvoiceApplys$page } from "uq-app/uqs/JkPlatformjoint";
import { VCancelOrderApplys } from './VCancelOrderApplys';

export class COrder extends CUqBase {

    @observable invoiceApplys: ReturnSearchInvoiceApplys$page[];
    @observable cancelOrderApplys: ReturnSearchCancelOrderApplys$page[];
    orderNos: any[] = [];

    constructor(res: any) {
        super(res);
        makeObservable(this, {
            invoiceApplys: observable,
            cancelOrderApplys: observable,
        });
    }

    protected async internalStart() { }

    /* 获取单位 */
    loadPlatform = async (platform: number | BoxId) => {
        return await this.uqs.JkPlatformjoint.Platform.load(platform);
    }

    /* 获取解析的JSON（platform为依据） */
    getJSONContent = async (platform: number | BoxId) => {
        let getPlatform = await this.loadPlatform(platform);
        return formatJSONContent(getPlatform?.name);
    }

    /* 查询订单(发运通知)页 */
    openOrderDeliveryNotice = async () => {
        this.openVPage(VOrderDeliveryNotice);
    }

    /* 发票申请列表页 */
    openInvoiceApplys = async () => {
        await this.getInvoiceApplys();
        this.openVPage(VInvoiceApplys);
    }

    /* 发票申请详情页 */
    openInvoiceApplyDetail = async (invoiceApply: ReturnSearchInvoiceApplys$page) => {
        let { platform, content } = invoiceApply;
        let invoiceApplyDetail: any = invoiceApply;
        let getJSONContent = await this.getJSONContent(platform);
        invoiceApplyDetail.jsonContInvioce = getJSONContent.jsonContInvioce(content);
        this.openVPage(VInvoiceApplyDetail, invoiceApplyDetail);
    }

    /* 获取发票申请列表 */
    getInvoiceApplys = async () => {
        this.invoiceApplys = await (await this.uqs.JkPlatformjoint.SearchInvoiceApplys.page({}, 0, 1000)).$page;
    }

    invoiceApplyNotice = async (param: any) => {
        try {
            let res: any = await fetch(GLOABLE.ORDERS.INVOICENOTICE, {
                method: "POST",
                mode: "cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(param)
            });
            let result: any = await res.json();
            return {
                success: res?.ok,
                message: result?.message
            };
        } catch (error) { };
        return { success: false, message: "操作失败,请重新尝试" };
    }

    /* 发票申请审核(接收/驳回) */
    auditInvoiceApply = async (param: any) => {
        await this.uqs.JkPlatformjoint.SaveInvoiceRequest.submit(param);
    }

    /* 取消订单列表页 */
    openCancelOrderApplys = async () => {
        await this.getCancelOrderApplys();
        let promise: Promise<any>[] = [];
        for (let key of this.cancelOrderApplys) {
            promise.push(this.getOrderNoById(key.order));
        };
        let result = await Promise.all(promise);
        this.orderNos = result.filter((el: any) => el);
        this.openVPage(VCancelOrderApplys,);
    }

    /* 取消订单申请详情页 */
    openCancelOrderApplyDetail = async (CancelOrderApply: ReturnSearchCancelOrderApplys$page) => {
        let { platform, content } = CancelOrderApply;
        let getJSONContent = await this.getJSONContent(platform);
        let CancelOrderApplyDetail: any = CancelOrderApply;
        CancelOrderApplyDetail.jsonContCancelorder = getJSONContent.jsonContCancalOrder(content);
        this.openVPage(VCancelOrderApply, CancelOrderApplyDetail);
    }

    /* 获取取消订单申请列表 */
    getCancelOrderApplys = async () => {
        this.cancelOrderApplys = await (await this.uqs.JkPlatformjoint.SearchCancelOrderApplys.page({}, 0, 1000)).$page;
    }

    /* 获取订单编号OrderNo */
    getOrderNoById = async (order: number) => {
        return await this.uqs.JkPlatformjoint.OrderIds.obj({ order: order });
    }

    /* 订单取消通知 */
    cancelOrderApplyNotice = async (param: any) => {
        try {
            let res: any = await fetch(GLOABLE.ORDERS.CANCELORDER, {
                method: "POST",
                mode: "cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(param)
            });
            let result: any = await res.json();
            return {
                success: res?.ok,
                message: result?.message
            };
        } catch (error) { };
        return { success: false, message: "操作失败,请重新尝试" };
    }

    /* 订单取消申请审核(同意/驳回) */
    auditCancelOrderApply = async (param: any) => {
        await this.uqs.JkPlatformjoint.SaveCancelOrder.submit(param);
    }


    renderOrderItemProduct = (product: any) => {
        let { cProduct } = this.cApp;
        return cProduct.renderCartProduct(product);
    }

    renderOrderDetail = (order: any) => {
        return this.renderView(VOrderDetail, order);
    }

    openOrderDetail = async (order: any) => {
        let orders = await this.getOrderDetail(order);
        this.openVPage(VOrderDetail, orders);
    };

    /* 获取订单sheet的id */
    getOrderIdByNo = async (orderNo: string) => {
        return await this.uqs.JkPlatformjoint.GetOrderIdByNo.obj({ orderNo: orderNo });
    }

    /* 获取订单 */
    getOrderDetail = async (orderNo: string) => {
        let getOrder = await this.getOrderIdByNo(orderNo);
        let orderD: any;
        if (getOrder) {
            let { orderId } = getOrder;
            orderD = await this.uqs.JkOrder.Order.getSheet(orderId);
            let { data } = orderD;
            let { orderItems } = data;
            let orderItemsGrouped = groupByProduct(orderItems);
            data.orderItems = orderItemsGrouped;
        };
        return orderD;
    }

    /* 确认发货 */
    fixDelivery = async (saleOrderId: string) => {
        try {
            let res: any = await fetch(GLOABLE.ORDERS.FIXDELIVERY, {
                method: "POST",
                mode: "cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ saleOrderId: saleOrderId })
            });
            let result: any = await res.json();
            return {
                success: res?.ok,
                message: result?.message
            };
        } catch (error) { };
        return { success: false, message: "操作失败,请重新尝试" };
    };

    /* 获取发票申请详情(查询时使用的,暂时弃用) */
    getInvoiceApply = async (invoiceRequestId: number) => {
        return await this.uqs.JkPlatformjoint.SearchInvoiceRequestPending.obj({ invoiceRequestId: invoiceRequestId });
    }

    /* 获取订单取消申请(查询时使用的,暂时弃用) */
    getCancelOrderApply = async (orderNo: string) => {
        let getOrderId = await this.getOrderIdByNo(orderNo);
        if (!getOrderId) return;
        let { orderId } = getOrderId;
        return await this.uqs.JkPlatformjoint.SearchCancelOrderPending.obj({ orderId: orderId });
    }
}