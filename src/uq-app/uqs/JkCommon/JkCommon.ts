//=== UqApp builder created on Wed Jun 16 2021 17:44:33 GMT+0800 (中国标准时间) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqQuery, UqMap, UqID } from "tonva-react";


//===============================
//======= UQ 百灵威系统工程部/common ========
//===============================

export interface Tuid$user {
	name: string;
	nick: string;
	icon: string;
	assigned: string;
	poke: number;
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

export interface TuidCountry {
	code: string;
	englishName: string;
	chineseName: string;
	no: string;
	isValid: number;
	order: number;
}

export interface TuidProvince {
	country: number;
	englishName: string;
	chineseName: string;
	no: string;
	isValid: number;
	order: number;
}

export interface TuidCity {
	province: number;
	englishName: string;
	chineseName: string;
	no: string;
	isValid: number;
	order: number;
}

export interface TuidCounty {
	city: number;
	englishName: string;
	chineseName: string;
	no: string;
	isValid: number;
	order: number;
}

export interface TuidAddress {
	country: number;
	province: number;
	city: number;
	county: number;
	zipCode: string;
	description: string;
}

export interface TuidSalesRegion {
	name: string;
	currency: number;
	no: string;
}

export interface TuidCurrency {
	name: string;
	suffix: string;
}

export interface TuidPackType {
	name: string;
	description: string;
	no: number;
}

export interface TuidPackTypeStandard {
	name: string;
	no: number;
	description: string;
	class: string;
}

export interface TuidLanguage {
	no: string;
	description: string;
}

export interface TuidInvoiceType {
	description: string;
}

export interface ParamGetCountryProvinces {
	country: number;
}
interface ReturnGetCountryProvincesRet {
	province: number;
	$id: number;
}
interface ResultGetCountryProvinces {
	ret: ReturnGetCountryProvincesRet[];
}

export interface ParamGetProvinceCities {
	province: number;
}
interface ReturnGetProvinceCitiesRet {
	city: number;
	$id: number;
}
interface ResultGetProvinceCities {
	ret: ReturnGetProvinceCitiesRet[];
}

export interface ParamGetCityCounties {
	city: number;
}
interface ReturnGetCityCountiesRet {
	county: number;
	$id: number;
}
interface ResultGetCityCounties {
	ret: ReturnGetCityCountiesRet[];
}

export interface ParamGetProvinceByName {
	country: number;
	provinceName: string;
}
interface ReturnGetProvinceByNameRet {
	province: number;
	$id: number;
}
interface ResultGetProvinceByName {
	ret: ReturnGetProvinceByNameRet[];
}

export interface ParamGetCountyByName {
	city: number;
	countyName: string;
}
interface ReturnGetCountyByNameRet {
	county: number;
	$id: number;
}
interface ResultGetCountyByName {
	ret: ReturnGetCountyByNameRet[];
}

export interface ParamGetCityByName {
	province: number;
	cityName: string;
}
interface ReturnGetCityByNameRet {
	city: number;
	$id: number;
}
interface ResultGetCityByName {
	ret: ReturnGetCityByNameRet[];
}

export interface ParamSearchPackType {
}
interface ReturnSearchPackTypeRet {
	id: number;
	name: string;
	$id: number;
}
interface ResultSearchPackType {
	ret: ReturnSearchPackTypeRet[];
}

export interface Param$poked {
}
interface Return$pokedRet {
	poke: number;
	$id: number;
}
interface Result$poked {
	ret: Return$pokedRet[];
}

export interface $PiecewiseDetail {
	id?: number;
	parent: number;
	row?: number;
	sec: number;
	value: number;
}

export interface $Piecewise {
	id?: number;
	name: string;
	ratio: number;
	offset: number;
	asc: number;
}

export interface ParamActs {
	$PiecewiseDetail?: $PiecewiseDetail[];
	$Piecewise?: $Piecewise[];
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	$user: UqTuid<Tuid$user>;
	$sheet: UqTuid<Tuid$sheet>;
	Country: UqTuid<TuidCountry>;
	Province: UqTuid<TuidProvince>;
	City: UqTuid<TuidCity>;
	County: UqTuid<TuidCounty>;
	Address: UqTuid<TuidAddress>;
	SalesRegion: UqTuid<TuidSalesRegion>;
	Currency: UqTuid<TuidCurrency>;
	PackType: UqTuid<TuidPackType>;
	PackTypeStandard: UqTuid<TuidPackTypeStandard>;
	Language: UqTuid<TuidLanguage>;
	InvoiceType: UqTuid<TuidInvoiceType>;
	GetCountryProvinces: UqQuery<ParamGetCountryProvinces, ResultGetCountryProvinces>;
	GetProvinceCities: UqQuery<ParamGetProvinceCities, ResultGetProvinceCities>;
	GetCityCounties: UqQuery<ParamGetCityCounties, ResultGetCityCounties>;
	GetProvinceByName: UqQuery<ParamGetProvinceByName, ResultGetProvinceByName>;
	GetCountyByName: UqQuery<ParamGetCountyByName, ResultGetCountyByName>;
	GetCityByName: UqQuery<ParamGetCityByName, ResultGetCityByName>;
	SearchPackType: UqQuery<ParamSearchPackType, ResultSearchPackType>;
	$poked: UqQuery<Param$poked, Result$poked>;
	PackTypeMapToStandard: UqMap;
	CurrencyExchangeRate: UqMap;
	$PiecewiseDetail: UqID<any>;
	$Piecewise: UqID<any>;
}
