//=== UqApp builder created on Tue Jul 27 2021 15:50:49 GMT+0800 (中国标准时间) ===//
import { CSub, CBase, CAppBase, IConstructor } from 'tonva-react';
import { UQs } from './uqs';
import { CApp } from './CApp';

export abstract class CUqBase extends CBase<CApp, UQs> {
}

export abstract class CUqSub<A extends CAppBase<U>, U, T extends CBase<A,U>> extends CSub<A, U, T> {
}

export abstract class CUqApp extends CAppBase<UQs> {
	protected newC<T extends CUqBase>(type: IConstructor<T>): T {
		let c = new type(this);
		c.init();
		return c;
	}
}
