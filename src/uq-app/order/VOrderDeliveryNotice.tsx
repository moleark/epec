import { observer } from 'mobx-react';
import React from 'react';
import { autoHideTips } from 'tonva-react';
import { VCommonA } from './VCommonA';

export class VOrderDeliveryNotice extends VCommonA {
    headerTitle: string = "订单发运通知";
    searchTitle: string = "确认发货";

    footer() {
        return <></>;
        /* return React.createElement(observer(() => {
            if (!this.dataInfo) return <></>;
            return <div className="text-center">
                <button onClick={()=>{this.fixDelivery()}} className="btn btn-success w-50">确认发货</button>
            </div>
        })); */
    }

	content() {
        /* let orderDetailUI: JSX.Element = React.createElement(observer(() => {
            if (!this.dataInfo) return <></>;
            return <>
                <div className="p-2 bg-white border-bottom">订单编号 <b>{this.dataInfo?.brief?.no}</b></div>
                {this.controller.renderOrderDetail(this.dataInfo)}
            </>
        })); */
        return <div>
            <div className="p-2">{this.searchInputUI({ placeholder: "请输入订单号" })}</div>
            {/* {orderDetailUI} */}
            {autoHideTips(this.successTip, () => <div className="alert alert-warning mb-1" >{this.successTip.get()}</div>)}
        </div>
    }

    searchData2 = async (val?:string) => {
        // let value = this.searchVal;
        let { /* getOrderDetail, */ fixDelivery } = this.controller;
        /* this.dataInfo = await getOrderDetail(value);
        if(!this.dataInfo) {
            this.searchTip.set("未查询到订单");
            return;
        }; */
        let vall = val?.trim();
        let result = await fixDelivery(vall);
        if (result && !result.success) {
            this.successTip.set(result?.message); return;
        };
        /* 有订单状态变化,后续处理 */
        this.closePage();
    }

    fixDelivery = async () => {
        let { fixDelivery } = this.controller;
        let { brief } = this.dataInfo;
        let { no } = brief;
        let result = await fixDelivery(no);
        if (result && !result.success) {
            this.successTip.set(result?.message); return;
        };
        /* 有订单状态变化,后续处理 */
        this.closePage();
    }
}