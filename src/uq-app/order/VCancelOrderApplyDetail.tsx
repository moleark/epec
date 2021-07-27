import React from "react";
import { observer } from "mobx-react";
import { autoHideTips, FA, LMR } from "tonva-react";
import classNames from "classnames";
import { VCommonA } from "./VCommonA";
import { STDCancelOrderInfo } from "./JsonContent";

export class VCancelOrderApply extends VCommonA {
    headerTitle: string = "取消订单申请";

    init(param: any) {
        this.dataInfo = param;
    }

    footer() {
        return React.createElement(observer(() => {
            if (!this.dataInfo) return <></>;
            return <>
                {autoHideTips(this.successTip, () => <div className="alert alert-warning mb-1" >{this.successTip.get()}</div>)}
                <div className="d-flex justify-content-around">
                    <button onClick={() => { this.auditCancelOrderApply(2) }} className="w-25 btn btn-secondary">驳回</button>
                    <button onClick={() => { this.auditCancelOrderApply(1) }} className="w-25 btn btn-success">同意</button>
                </div>
            </>
        }));
    }

	content() {
    
        return React.createElement(observer(() => {
            return <div>
                {/* <div className="p-2">{this.searchInputUI({placeholder:"请输入订单编号"})}</div> */}
                {this.renderCancelOrderInfo()}
                <div className={classNames("px-2 bg-white", this.dataInfo ? "d-block" : "d-none")}>
                    <div className="py-2">驳回原因（可填,驳回时必填）</div>
                    {this.reasonTxaUI({ placeholder: "请输入驳回原因" })}
                </div>
            </div>
        }));
    }

    renderCancelOrderInfo = () => {
        if (!this.dataInfo) return null;
        let { openOrderDetail } = this.controller;
        let { content, jsonContCancelorder, /* platform */ } = this.dataInfo;
        if (!content || !jsonContCancelorder || !jsonContCancelorder?.data || !jsonContCancelorder?.data?.length)
            return <div className="p-2 bg-white text-danger">没有订单信息</div>;
        let { data } = jsonContCancelorder;
        let { stdBody } = data[0];
        let obj: any = {
            // "platform": <>{tv(platform, (v) => v?.name)}</>,
        };
        let arr: any[] = Object.keys(STDCancelOrderInfo).map((el: any) => {
            let values: any = (stdBody[el] !== undefined || stdBody[el] !== "") ? stdBody[el] : obj[el];
            let value: any = values;
            if (el === "orderNo") {
                value = <LMR onClick={() => { openOrderDetail(values) }}
                    right={<FA name="chevron-right" className="align-self-center" />} >
                    {values}
                </LMR>;
            };
            return { title: STDCancelOrderInfo[el], value: value };
        });
        return <div className="p-2">
            {arr.map((el: any) => {
                let { value, title } = el;
                if (value === undefined) return null;
                return <div key={title} className="row mx-0 px-0 py-2 bg-white rounded mb-1">
                    <strong className="col-12 col-lg-3 col-sm-4" >{title}</strong>
                    <hr className="col-12 d-block d-sm-none px-0 mx-2 my-1" style={{ flex: "auto" }} />
                    <span className="col-12 col-lg-9 col-sm-8" >{value}</span>
                </div>
            })}
        </div>
    }

    searchData2 = async () => {
        let value = this.searchVal;
        let { getCancelOrderApply } = this.controller;
        this.dataInfo = await getCancelOrderApply(value);
        if(!this.dataInfo) {
            this.searchTip.set("未查询到订单申请"); return;
        };
    }

    auditCancelOrderApply = async (confirmStatus: number) => {
        if (confirmStatus === 2 && !this.reasonVal ) {
            this.reasonTip.set("请填写驳回理由"); return;
        };
        if (!this.dataInfo) return;
        let { auditCancelOrderApply, cancelOrderApplyNotice } = this.controller;
        let { jsonContCancelorder } = this.dataInfo;
        let { data } = jsonContCancelorder;
        if (!data) {
            this.successTip.set("没有相关数据,不可以操作"); return;
        };
        let { stdBody } = data[0];
        let param = {
            "orderId": stdBody["orderId"],
            "purchaseCompanyId": stdBody['purchaseCompanyId'],
            "erporderno": stdBody["orderNo"],
            "confirmStatus": confirmStatus,
            "refuleReason": confirmStatus === 1 ? "同意取消订单" : this.reasonVal
        };
        let result = await cancelOrderApplyNotice(param);
        if (result && !result.success) {
            this.successTip.set(result?.message); return;
        };
        await auditCancelOrderApply({ ...this.dataInfo, confirmStatus: confirmStatus, refuseReason: this.reasonVal, pendingid: this.dataInfo.id });
        this.controller.cancelOrderApplys = this.controller.cancelOrderApplys.filter((el: any) => el.id !== this.dataInfo.id);
        this.closePage();
    }
}
