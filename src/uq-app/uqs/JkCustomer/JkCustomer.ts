//=== UqApp builder created on Tue Jun 15 2021 17:12:09 GMT+0800 (China Standard Time) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqQuery, UqMap, UqID } from "tonva-react";


//===============================
//======= UQ 百灵威系统工程部/customer ========
//===============================

export interface TuidCurrency {
	name: string;
	suffix: string;
}

export interface TuidContact {
	name: string;
	organizationName: string;
	mobile: string;
	telephone: string;
	email: string;
	addressString: string;
	address: number;
}

export interface TuidCustomer {
	name: string;
	firstName: string;
	lastName: string;
	xyz: string;
	no: string;
	gender: string;
	salutation: string;
	birthDay: any;
	createTime: any;
	isValid: number;
}

export interface TuidInvoiceType {
	description: string;
}

export interface TuidResearch {
	name: string;
	no: string;
	createTime: any;
}

export interface Tuid$sheet {
	no: string;
	user: number;
	date: any;
	sheet: number;
	version: number;
	flow: number;
	app: number;
	state: number;
	discription: string;
	data: string;
	processing: number;
}

export interface Tuid$user {
	name: string;
	nick: string;
	icon: string;
	assigned: string;
	poke: number;
}

export interface TuidProvince {
	country: number;
	englishName: string;
	chineseName: string;
	no: string;
}

export interface TuidDepartment {
	name: string;
	organization: number;
	no: string;
	createTime: any;
}

export interface TuidBuyerAccount {
	description: string;
	organization: number;
	xyz: string;
	no: string;
	createTime: any;
	isValid: number;
}

export interface TuidOrganization {
	name: string;
	no: string;
	createTime: any;
}

export interface TuidCountry {
	code: string;
	englishName: string;
	chineseName: string;
	no: string;
}

export interface TuidInvoiceInfo {
	title: string;
	taxNo: string;
	address: string;
	telephone: string;
	bank: string;
	accountNo: string;
	invoiceType: string;
}

export interface TuidCity {
	province: number;
	englishName: string;
	chineseName: string;
	no: string;
}

export interface TuidPost {
	name: string;
	no: string;
	createTime: any;
}

export interface TuidCounty {
	city: number;
	englishName: string;
	chineseName: string;
	no: string;
}

export interface TuidSalesRegion {
	name: string;
	currency: number;
	no: string;
}

export interface TuidEmployee {
	no: string;
	name: string;
	firstName: string;
	lastName: string;
	title: string;
	Status: string;
	CreateTime: any;
}

export interface TuidAddress {
	country: number;
	province: number;
	city: number;
	county: number;
	zip: string;
	description: string;
}

export interface TuidDomain {
	name: string;
	parent: number;
	no: string;
	createTime: any;
}

export interface TuidProductX {
	brand: number;
	origin: string;
	description: string;
	descriptionC: string;
}

export interface TuidBrand {
	name: string;
}

export interface ParamSearchCustomer {
	key: string;
}
interface ReturnSearchCustomer$page {
	id: number;
	no: string;
	name: string;
	firstName: string;
	lastName: string;
	gender: string;
	salutation: string;
}
interface ResultSearchCustomer {
	$page: ReturnSearchCustomer$page[];
}

export interface ParamGetBuyerAccountByNo {
	buyAccountNo: string;
}
interface ReturnGetBuyerAccountByNoRet {
	buyerAccount: number;
	organization: number;
	description: string;
	xyz: string;
	no: string;
	createTime: any;
	isValid: number;
}
interface ResultGetBuyerAccountByNo {
	ret: ReturnGetBuyerAccountByNoRet[];
}

export interface ParamGetCustomerByNo {
	customerNo: string;
}
interface ReturnGetCustomerByNoRet {
	customer: number;
}
interface ResultGetCustomerByNo {
	ret: ReturnGetCustomerByNoRet[];
}

export interface ParamGetCustomerOrganization {
	customerId: number;
}
interface ReturnGetCustomerOrganizationRet {
	organization: number;
	customer: number;
}
interface ResultGetCustomerOrganization {
	ret: ReturnGetCustomerOrganizationRet[];
}

export interface ParamGetCustomerByKey {
	key: string;
}
interface ReturnGetCustomerByKeyRet {
	customer: number;
}
interface ResultGetCustomerByKey {
	ret: ReturnGetCustomerByKeyRet[];
}

export interface ParamSearchDomain {
	_parent: number;
}
interface ReturnSearchDomain$page {
	id: number;
	name: string;
	counts: number;
}
interface ResultSearchDomain {
	$page: ReturnSearchDomain$page[];
}

export interface Param$poked {
}
interface Return$pokedRet {
	poke: number;
}
interface Result$poked {
	ret: Return$pokedRet[];
}

export interface $Piecewise {
	id?: number;
	name: string;
	mul: number;
	div: number;
	offset: number;
	asc: number;
}

export interface $PiecewiseDetail {
	id?: number;
	parent: number;
	row?: number;
	sec: number;
	value: number;
}

export interface ParamActs {
	$Piecewise?: $Piecewise[];
	$PiecewiseDetail?: $PiecewiseDetail[];
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	Currency: UqTuid<TuidCurrency>;
	Contact: UqTuid<TuidContact>;
	Customer: UqTuid<TuidCustomer>;
	InvoiceType: UqTuid<TuidInvoiceType>;
	Research: UqTuid<TuidResearch>;
	$sheet: UqTuid<Tuid$sheet>;
	$user: UqTuid<Tuid$user>;
	Province: UqTuid<TuidProvince>;
	Department: UqTuid<TuidDepartment>;
	BuyerAccount: UqTuid<TuidBuyerAccount>;
	Organization: UqTuid<TuidOrganization>;
	Country: UqTuid<TuidCountry>;
	InvoiceInfo: UqTuid<TuidInvoiceInfo>;
	City: UqTuid<TuidCity>;
	Post: UqTuid<TuidPost>;
	County: UqTuid<TuidCounty>;
	SalesRegion: UqTuid<TuidSalesRegion>;
	Employee: UqTuid<TuidEmployee>;
	Address: UqTuid<TuidAddress>;
	Domain: UqTuid<TuidDomain>;
	ProductX: UqTuid<TuidProductX>;
	Brand: UqTuid<TuidBrand>;
	SearchCustomer: UqQuery<ParamSearchCustomer, ResultSearchCustomer>;
	GetBuyerAccountByNo: UqQuery<ParamGetBuyerAccountByNo, ResultGetBuyerAccountByNo>;
	GetCustomerByNo: UqQuery<ParamGetCustomerByNo, ResultGetCustomerByNo>;
	GetCustomerOrganization: UqQuery<ParamGetCustomerOrganization, ResultGetCustomerOrganization>;
	GetCustomerByKey: UqQuery<ParamGetCustomerByKey, ResultGetCustomerByKey>;
	SearchDomain: UqQuery<ParamSearchDomain, ResultSearchDomain>;
	$poked: UqQuery<Param$poked, Result$poked>;
	CustomerDepartment: UqMap;
	CustomerSetting: UqMap;
	CustomerContractor: UqMap;
	CustomerHandler: UqMap;
	CustomerResearch: UqMap;
	CustomerBuyerAccount: UqMap;
	OrganizationCustomer: UqMap;
	PostRelation: UqMap;
	CustomerContacts: UqMap;
	CustomerPost: UqMap;
	CustomerDomain: UqMap;
	CustomerRelatedProducts: UqMap;
	ResearchDomain: UqMap;
	$Piecewise: UqID<any>;
	$PiecewiseDetail: UqID<any>;
}
