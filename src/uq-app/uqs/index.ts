//=== UqApp builder created on Wed Jun 16 2021 17:44:33 GMT+0800 (中国标准时间) ===//
import * as BzHelloTonva from './BzHelloTonva';
import * as JkCommon from './JkCommon';
import * as JkCustomer from './JkCustomer';
import * as JkWebuser from './JkWebuser';
import * as JkWarehouse from './JkWarehouse';
import * as JkHr from './JkHr';
import * as JkProduct from './JkProduct';
import * as JkVipcardtype from './JkVipcardtype';
import * as JkChemical from './JkChemical';
import * as JkChemicalsecurity from './JkChemicalsecurity';
import * as JkPlatformjoint from './JkPlatformjoint';

export interface UQs {
	BzHelloTonva: BzHelloTonva.UqExt;
	JkCommon: JkCommon.UqExt;
	JkCustomer: JkCustomer.UqExt;
	JkWebuser: JkWebuser.UqExt;
	JkWarehouse: JkWarehouse.UqExt;
	JkHr: JkHr.UqExt;
	JkProduct: JkProduct.UqExt;
	JkVipcardtype: JkVipcardtype.UqExt;
	JkChemical: JkChemical.UqExt;
	JkChemicalsecurity: JkChemicalsecurity.UqExt;
	JkPlatformjoint: JkPlatformjoint.UqExt;
}

export * as BzHelloTonva from './BzHelloTonva';
export * as JkCommon from './JkCommon';
export * as JkCustomer from './JkCustomer';
export * as JkWebuser from './JkWebuser';
export * as JkWarehouse from './JkWarehouse';
export * as JkHr from './JkHr';
export * as JkProduct from './JkProduct';
export * as JkVipcardtype from './JkVipcardtype';
export * as JkChemical from './JkChemical';
export * as JkChemicalsecurity from './JkChemicalsecurity';
export * as JkPlatformjoint from './JkPlatformjoint';

export function setUI(uqs:UQs) {
	BzHelloTonva.setUI(uqs.BzHelloTonva);
	JkCommon.setUI(uqs.JkCommon);
	JkCustomer.setUI(uqs.JkCustomer);
	JkWebuser.setUI(uqs.JkWebuser);
	JkWarehouse.setUI(uqs.JkWarehouse);
	JkHr.setUI(uqs.JkHr);
	JkProduct.setUI(uqs.JkProduct);
	JkVipcardtype.setUI(uqs.JkVipcardtype);
	JkChemical.setUI(uqs.JkChemical);
	JkChemicalsecurity.setUI(uqs.JkChemicalsecurity);
	JkPlatformjoint.setUI(uqs.JkPlatformjoint);
}
