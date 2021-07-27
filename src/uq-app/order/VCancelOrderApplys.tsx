import * as React from 'react';
import { FA, List, LMR, VPage } from "tonva-react";
import { COrder } from "./COrder";
import { ReturnSearchCancelOrderApplys$page } from 'uq-app/uqs/JkPlatformjoint';
import { observer } from 'mobx-react';

export class VCancelOrderApplys extends VPage<COrder> {

    header() { return "取消订单申请列表" }

    content() {
        let { openCancelOrderApplyDetail } = this.controller;
        return React.createElement(observer(() => {
            return <List items={this.controller.cancelOrderApplys} item={{ render: this.renderInvoiceItem, onClick: openCancelOrderApplyDetail }} ></List>;
        }));
    }

    renderInvoiceItem = (item: ReturnSearchCancelOrderApplys$page) => {
        let { orderNos } = this.controller;
        let { order } = item;
        let findOrderNo = orderNos.find((el: any) => order === el.order);
        return <div className="p-2 d-block bg-white">
			<LMR right={<FA name="chevron-right" className="align-self-center" />} >
				{findOrderNo?.orderNo}
			</LMR>
		</div>
    }
}