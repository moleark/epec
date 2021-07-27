import { List, VPage, tv, BoxId, EasyDate } from 'tonva-react';
import { COrder } from './COrder';
import { makeObservable, observable } from 'mobx';
import classNames from 'classnames';
import { observer } from 'mobx-react';
import React from 'react';

export class VOrderDetail extends VPage<COrder> {

    @observable order: any;

    constructor(res: any) {
        super(res);
        makeObservable(this, {
            order: observable,
        });
    }

    init(param:any) {
        this.order = param;
    }

    header() {
        let no = this.order ? this.order.brief.no : "";
        return `订单详情 ${no}`;
    }

    footer() {
        return <></>;
        /* let { fixDelivery } = this.controller;
        return React.createElement(observer(() => {
            if (!this.order) return <></>;
            let { brief } = this.order;
            let { no } = brief;
            return <div className="text-center">
                <button onClick={()=>{fixDelivery(no)}} className="btn btn-success w-50">确认发货</button>
            </div>
        })); */
    }

	content() {
        return <div className="p-2">
            {this.orderDetail()}
        </div>
    }

    render(param:any) {
        this.order = param;
        return this.orderDetail();
    }

    orderDetail = () => {
        if (!this.order) return <></>;
        let { brief, data } = this.order;
        let { date } = brief;
        let { orderItems, currency, shippingContact, invoiceContact, invoiceType, invoiceInfo, amount, comments, couponOffsetAmount, couponRemitted
            , freightFee, freightFeeRemitted } = data;
        let couponUI;
        if (couponOffsetAmount || couponRemitted) {
            let offsetUI, remittedUI;
            if (couponOffsetAmount) {
                offsetUI = <div className="d-flex flex-row justify-content-between">
                    <div className="text-muted">折扣:</div>
                    <div className="text-right text-danger"><small>¥</small>{couponOffsetAmount}</div>
                </div>
            }
            if (couponRemitted) {
                remittedUI = <div className="d-flex flex-row justify-content-between">
                    <div className="text-muted">抵扣:</div>
                    <div className="text-right text-danger"><small>¥</small>{couponRemitted}</div>
                </div>
            }
            couponUI = <div className="bg-white row no-gutters p-3 my-1">
                <div className="col-3 text-muted">优惠券:</div>
                <div className="col-9">
                    {offsetUI}
                    {remittedUI}
                </div>
            </div>
        }

        let freightFeeUI, freightFeeRemittedUI;
        if (freightFee) {
            freightFeeUI = <>
                <div className="text-right text-danger"><small>¥</small>{freightFee}</div>
            </>
            if (freightFeeRemitted) {
                freightFeeRemittedUI = <>
                    <div className="text-right text-danger"><small>¥</small>{freightFeeRemitted}(减免)</div>
                </>
            }
        }

        let commentsUI = comments ? <div className="bg-white row no-gutters p-3 my-1">
            <div className="col-3 text-muted">备注:</div>
            <div className="col-9">{comments}</div>
        </div> : null;

        return <>
            <List items={orderItems} item={{ render: this.renderOrderItem }} />
            <div className="bg-white row no-gutters p-3 my-1">
                <div className="col-3 text-muted">收货地址:</div>
                <div className="col-9">{tv(shippingContact)}</div>
            </div>
            <div className="bg-white row no-gutters p-3 my-1">
                <div className="col-3 text-muted">发票地址:</div>
                <div className="col-9">{tv(invoiceContact)}</div>
            </div>
            <div className="bg-white row no-gutters p-3 my-1">
                <div className="col-3 text-muted">发票信息:</div>
                <div className="col-9">{invoiceTemplate(invoiceType, invoiceInfo)}</div>
            </div>
            <div className="bg-white row no-gutters p-3 my-1">
                <div className="col-3 text-muted">运费:</div>
                <div className="col-9">{freightFeeUI}{freightFeeRemittedUI}</div>
            </div>
            {couponUI}
            <div className="bg-white row no-gutters p-3 my-1">
                <div className="col-3 text-muted">下单时间:</div>
                <div className="col-9 text-right"><EasyDate date={date} /></div>
            </div>
            {commentsUI}
            <div className="bg-white p-3 my-1 text-right">
                <span className="text-danger font-weight-bold">总金额: {amount}{tv(currency)}</span>
            </div>
        </>
    }

    private renderOrderItem = (orderItem: any, index: number) => {
        let { product, packs } = orderItem;
        let { packsRow } = this;
        return <div className="row my-1 w-100 mx-0">
            <div className="col-lg-6 pb-3">{this.controller.renderOrderItemProduct(product)}</div>
            <div className="col-lg-6">{
                packs.map((p:any, index:any) => {
                    return packsRow(p, index);
                })
            }</div>
        </div>
    }

    private packsRow = (item: any, index: number) => {
        let { pack, quantity, price, /* currency */ } = item;
        return <div key={index} className={classNames('px-2 py-2', index !== 0 ? 'border-top' : '')}>
            <div className="d-flex align-items-center">
                <div className="flex-grow-1"><b>{tv(pack)}</b></div>
                <div className="w-12c mr-4 text-right">
                    <span className="text-danger h5"><small>¥</small>{parseFloat((price * quantity).toFixed(2))}</span>
                    <small className="text-muted">(¥{parseFloat(price.toFixed(2))} × {quantity})</small>
                </div>
            </div>
        </div>;
    }
}

function invoiceTemplate(invoiceType: BoxId, invoiceInfo: BoxId): JSX.Element {
    return <>
        {tv(invoiceType, invoiceTypeUI, undefined, () => <></>)}<br />
        {tv(invoiceInfo, invoiceInfoUI, undefined, () => <></>)}
    </>
}

function invoiceTypeUI(values: any) {
    let { /* id, */ description } = values;
    return <>{description}</>;
}

function invoiceInfoUI(values: any) {
    let { /* id, */ title, /* taxNo, address, telephone, bank, accountNo */ } = values;
    return <>{title}</>;
}