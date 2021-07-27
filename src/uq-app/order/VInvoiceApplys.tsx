import * as React from 'react';
import { FA, List, LMR, VPage } from "tonva-react";
import { COrder } from "./COrder";
import { ReturnSearchInvoiceApplys$page } from "uq-app/uqs/JkPlatformjoint";
import { observer } from 'mobx-react';

export class VInvoiceApplys extends VPage<COrder> {

    header() { return "开票申请列表" }

    content() {
        let { openInvoiceApplyDetail } = this.controller;
        return React.createElement(observer(() => {
            return <List items={this.controller.invoiceApplys} item={{ render: this.renderInvoiceItem, onClick: openInvoiceApplyDetail }} ></List>;
        }));
    }

    renderInvoiceItem = (item: ReturnSearchInvoiceApplys$page) => {
        let { invoiceRequestId } = item;
        return <div className="p-2 d-block bg-white">
			<LMR right={<FA name="chevron-right" className="align-self-center" />} >
				{invoiceRequestId}
			</LMR>
		</div>
    }
}