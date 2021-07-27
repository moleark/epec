import { env } from 'tonva-react';

interface Global {
	EPEC: {
		REGISTER: string;
		INTERFACEUSERINFO: string;
	},
	ORDERS: {
		FIXDELIVERY: string;
		INVOICENOTICE: string;
		CANCELORDER: string;
	},
};

// 生产配置
const GLOABLE_PRODUCTION: Global = {
	EPEC: {
		REGISTER: "https://joint.jkchemical.com/epec/register",
		INTERFACEUSERINFO: "https://joint.jkchemical.com/epec/getInterfaceUserInfo"
	},
	ORDERS: {
		FIXDELIVERY: "https://joint.jkchemical.com/epec/epecShipping",
		INVOICENOTICE: "https://joint.jkchemical.com/epec/commitInvoice",
		CANCELORDER: "https://joint.jkchemical.com/epec/backOrder"
	}
}

// 测试环境配置
const GLOABLE_TEST: Global = {
	EPEC: {
		REGISTER: "https://test.jkchemical.com/joint/epec/register",
		INTERFACEUSERINFO: "https://test.jkchemical.com/joint/epec/getInterfaceUserInfo"
	},
	ORDERS: {
		FIXDELIVERY: "https://test.jkchemical.com/joint/epec/epecShipping",
		INVOICENOTICE: "https://test.jkchemical.com/joint/epec/commitInvoice",
		CANCELORDER: "https://test.jkchemical.com/joint/epec/backOrder",
	}
}

export const GLOABLE = env.testing === true ? GLOABLE_TEST : GLOABLE_PRODUCTION;