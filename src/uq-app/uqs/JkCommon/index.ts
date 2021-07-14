import { UqExt as Uq } from './JkCommon';
import * as Country from './Country.ui';
import * as Province from './Province.ui';
import * as City from './City.ui';
import * as County from './County.ui';
import * as Address from './Address.ui';
import * as SalesRegion from './SalesRegion.ui';
import * as Currency from './Currency.ui';
import * as PackType from './PackType.ui';
import * as PackTypeStandard from './PackTypeStandard.ui';
import * as Language from './Language.ui';
import * as InvoiceType from './InvoiceType.ui';

export function setUI(uq: Uq) {
	Object.assign(uq.Country, Country);
	Object.assign(uq.Province, Province);
	Object.assign(uq.City, City);
	Object.assign(uq.County, County);
	Object.assign(uq.Address, Address);
	Object.assign(uq.SalesRegion, SalesRegion);
	Object.assign(uq.Currency, Currency);
	Object.assign(uq.PackType, PackType);
	Object.assign(uq.PackTypeStandard, PackTypeStandard);
	Object.assign(uq.Language, Language);
	Object.assign(uq.InvoiceType, InvoiceType);
}
export * from './JkCommon';
