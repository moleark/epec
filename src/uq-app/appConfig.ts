//=== UqApp builder created on Tue Jan 12 2021 23:14:51 GMT-0500 (GMT-05:00) ===//
import { AppConfig, DevConfig } from "tonva-react";
import { tvs } from "./tvs";

const bz: DevConfig = {
	name: 'bizdev',
	alias: 'bz',
}
const jk: DevConfig = {
	name: '百灵威系统工程部',
	alias: 'jk',
}

export const appConfig: AppConfig = {
	version: '0.1.0',
	app: undefined,
	uqs: [
		{
			dev: bz,
			name: 'hello-tonva',
			alias: 'HelloTonva',
		},
		{
			dev: jk,
			name: 'common',
			version: '0.1.0',
		},
		{
			dev: jk,
			name: 'customer',
			version: '0.1.0',
		},
		{
			dev: jk,
			name: 'order',
			version: '0.1.0',
		},
		{
			dev: jk,
			name: 'product',
			version: '0.1.0',
		},
		{
			dev: jk,
			name: 'webuser',
			version: '0.1.0',
		},
		{
			dev: jk,
			name: 'platformjoint',
			version: '0.1.0',
		},
	],
	noUnit: true,
	tvs: tvs || {},
	oem: undefined,
	htmlTitle: '第三方客户管理系统',
};
