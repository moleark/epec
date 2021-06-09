import { UqExt as Uq } from './JkCustomer';
import * as $Piecewise from './$Piecewise.ui';
import * as $PiecewiseDetail from './$PiecewiseDetail.ui';

export function setUI(uq: Uq) {
	Object.assign(uq.$Piecewise, $Piecewise);
	Object.assign(uq.$PiecewiseDetail, $PiecewiseDetail);
}
export * from './JkCustomer';
