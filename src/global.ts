import { env } from 'tonva-react';

interface Global {
	EPEC: {
		REGISTER: string;
		INTERFACEUSERINFO: string;
	},
};

// 生产配置
const GLOABLE_PRODUCTION: Global = {
	EPEC: {
		REGISTER: "https://joint.jkchemical.com/epec/register",
		INTERFACEUSERINFO: "https://joint.jkchemical.com/epec/getInterfaceUserInfo"
	},
}

// 测试环境配置
const GLOABLE_TEST: Global = {
	EPEC: {
		REGISTER: "https://test.jkchemical.com/joint/epec/register",
		INTERFACEUSERINFO: "https://test.jkchemical.com/joint/epec/getInterfaceUserInfo"
	}
}

export const GLOABLE = env.testing === true ? GLOABLE_TEST : GLOABLE_PRODUCTION;