import { UqExt as Uq } from './JkChemical';
import * as $PiecewiseDetail from './$PiecewiseDetail.ui';
import * as $Piecewise from './$Piecewise.ui';

export function setUI(uq: Uq) {
	Object.assign(uq.$PiecewiseDetail, $PiecewiseDetail);
	Object.assign(uq.$Piecewise, $Piecewise);
}
export * from './JkChemical';
