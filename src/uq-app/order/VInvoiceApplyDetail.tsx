import React from "react";
import { observer } from "mobx-react";
import { autoHideTips } from "tonva-react";
import classNames from 'classnames';
import { VCommonA } from "./VCommonA";
import { STDInvioceInfo, STDInvioceSkuInfo } from './JsonContent';

export class VInvoiceApplyDetail extends VCommonA {
    headerTitle: string = "发票申请";


    init(param: any) {
        this.dataInfo = param;
    }

    footer() {
        return React.createElement(observer(() => {
            if (!this.dataInfo) return <></>;
            return <>
                {autoHideTips(this.successTip, () => <div className="alert alert-warning mb-1" >{this.successTip.get()}</div>)}
                <div className="d-flex justify-content-around">
                    <button onClick={() => { this.auditInvoiceApply(2) }} className="w-25 btn btn-secondary">驳回</button>
                    <button onClick={() => { this.auditInvoiceApply(1) }} className="w-25 btn btn-success">接收</button>
                </div>
            </>
        }));
    }

    content() {

        return React.createElement(observer(() => {
            return <div>
                {/* <div className="p-2">{this.searchInputUI({ placeholder: "请输入发票编号" })}</div> */}
                {this.renderInvoiceInfo()}
                <div className={classNames("px-2 bg-white", this.dataInfo ? "d-block" : "d-none")}>
                    <div className="py-2">驳回原因（可填,驳回时必填）</div>
                    {this.reasonTxaUI({ placeholder: "请输入驳回原因" })}
                </div>
            </div>
        }));
    }

    renderInvoiceInfo = () => {
        if (!this.dataInfo) return null;
        let { content, jsonContInvioce } = this.dataInfo;
        if (!content || !jsonContInvioce || !jsonContInvioce?.data || !jsonContInvioce?.data?.length)
            return <div className="p-2 bg-white text-danger">没有发票信息</div>;
        let { data } = jsonContInvioce;
        let { stdBody } = data[0];
        let obj: any = {};
        let arr: any[] = Object.keys(STDInvioceInfo).map((el: any) => {
            let value: any = (stdBody[el] !== undefined || stdBody[el] !== "") ? stdBody[el] : obj[el];
            if (el === "invoiceSkuInfo") {
                value = value.map((o: any, j: number) => {
                    return Object.keys(STDInvioceSkuInfo).map((v: any, i: number) => {
                        let val = o[v];
                        return <div key={i} className="row mx-0 px-0 py-2 rounded mb-1"
                            style={{ background: j % 2 === 1 ? "#e6e6e6" : "#f5f5f5" }}>
                            <strong className="col-4 small font-weight-bolder" >{STDInvioceSkuInfo[v]}</strong>
                            <span className="col-8 small" >{val}</span>
                        </div>;
                    });
                });
            };
            return { title: STDInvioceInfo[el], value: value };
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
        let { getInvoiceApply, /* loadPlatform */ } = this.controller;
        this.dataInfo = await getInvoiceApply(Number(value?.trim()));
        if(!this.dataInfo) {
            this.searchTip.set("未查询到该发票号申请"); return;
        };
        // let { platform, content } = this.dataInfo;
        // let getPlatform = await loadPlatform(platform);
        // let getJSONContent = formatJSONContent(getPlatform?.name);
        // this.dataInfo.jsonContInvioce = getJSONContent.jsonContInvioce(content);
    }

    auditInvoiceApply = async (invoiceStatus: number) => {
        if (invoiceStatus === 2 && !this.reasonVal) {
            this.reasonTip.set("请填写驳回理由"); return;
        };
        if (!this.dataInfo || !this.dataInfo?.content) return;
        let { auditInvoiceApply, invoiceApplyNotice } = this.controller;
        let { jsonContInvioce } = this.dataInfo;
        let { data } = jsonContInvioce;
        if (!data) {
            this.successTip.set("没有相关数据,不可以操作"); return;
        };
        let { stdBody } = data[0];
        let param = {
            "invoiceRequestId": stdBody["orderInvoiceId"] || Number(this.searchVal?.trim()),
            "purchaseCompanyId": stdBody['purchaseCompanyId'],
            "invoiceStatus": invoiceStatus,
            "cancelReason": this.reasonVal,
        };
        let result = await invoiceApplyNotice(param);
        if (result && !result.success) {
            this.successTip.set(result?.message); return;
        };
        await auditInvoiceApply({ ...this.dataInfo, invoiceStatus: invoiceStatus, cancelReason: this.reasonVal, pendingid: this.dataInfo.id });
        this.controller.invoiceApplys = this.controller.invoiceApplys.filter((el: any) => el.id !== this.dataInfo.id);
        this.closePage();
    }
}



