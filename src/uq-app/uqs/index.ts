//=== UqApp builder created on Wed Jul 14 2021 11:24:56 GMT+0800 (中国标准时间) ===//
import * as BzHelloTonva from './BzHelloTonva';
import * as JkCommon from './JkCommon';
import * as JkCustomer from './JkCustomer';
import * as JkWebuser from './JkWebuser';
import * as JkPlatformjoint from './JkPlatformjoint';

export interface UQs {
	BzHelloTonva: BzHelloTonva.UqExt;
	JkCommon: JkCommon.UqExt;
	JkCustomer: JkCustomer.UqExt;
	JkWebuser: JkWebuser.UqExt;
	JkPlatformjoint: JkPlatformjoint.UqExt;
}

export * as BzHelloTonva from './BzHelloTonva';
export * as JkCommon from './JkCommon';
export * as JkCustomer from './JkCustomer';
export * as JkWebuser from './JkWebuser';
export * as JkPlatformjoint from './JkPlatformjoint';

export function setUI(uqs:UQs) {
	BzHelloTonva.setUI(uqs.BzHelloTonva);
	JkCommon.setUI(uqs.JkCommon);
	JkCustomer.setUI(uqs.JkCustomer);
	JkWebuser.setUI(uqs.JkWebuser);
	JkPlatformjoint.setUI(uqs.JkPlatformjoint);
}
