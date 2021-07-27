//=== UqApp builder created on Tue Jul 27 2021 15:50:52 GMT+0800 (中国标准时间) ===//
import * as BzHelloTonva from './BzHelloTonva';
import * as JkCommon from './JkCommon';
import * as JkCustomer from './JkCustomer';
import * as JkOrder from './JkOrder';
import * as JkProduct from './JkProduct';
import * as JkWebuser from './JkWebuser';
import * as JkPlatformjoint from './JkPlatformjoint';

export interface UQs {
	BzHelloTonva: BzHelloTonva.UqExt;
	JkCommon: JkCommon.UqExt;
	JkCustomer: JkCustomer.UqExt;
	JkOrder: JkOrder.UqExt;
	JkProduct: JkProduct.UqExt;
	JkWebuser: JkWebuser.UqExt;
	JkPlatformjoint: JkPlatformjoint.UqExt;
}

export * as BzHelloTonva from './BzHelloTonva';
export * as JkCommon from './JkCommon';
export * as JkCustomer from './JkCustomer';
export * as JkOrder from './JkOrder';
export * as JkProduct from './JkProduct';
export * as JkWebuser from './JkWebuser';
export * as JkPlatformjoint from './JkPlatformjoint';

export function setUI(uqs:UQs) {
	BzHelloTonva.setUI(uqs.BzHelloTonva);
	JkCommon.setUI(uqs.JkCommon);
	JkCustomer.setUI(uqs.JkCustomer);
	JkOrder.setUI(uqs.JkOrder);
	JkProduct.setUI(uqs.JkProduct);
	JkWebuser.setUI(uqs.JkWebuser);
	JkPlatformjoint.setUI(uqs.JkPlatformjoint);
}
