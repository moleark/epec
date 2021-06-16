//=== UqApp builder created on Wed Jun 16 2021 17:44:33 GMT+0800 (中国标准时间) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqAction, UqQuery, UqMap, UqHistory, UqID } from "tonva-react";


//===============================
//======= UQ 百灵威系统工程部/product ========
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

export interface TuidChemical {
	CAS: string;
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
}

export interface TuidLanguage {
	no: string;
	description: string;
}

export interface TuidBrand {
	name: string;
	no: string;
}

export interface TuidStuff {
	name: string;
	packType: number;
}

export interface TuidProductX {
	brand: number;
	origin: string;
	description: string;
	descriptionC: string;
	imageUrl: string;
	no: string;
	isValid: number;
}

export interface TuidProductCategory {
	no: number;
	parent: number;
	isLeaf: number;
	orderWithinParent: number;
}

export interface TuidLot {
	lotnumber: string;
	product: number;
}

export interface TuidPackSalesLevel {
	name: string;
	no: string;
}

export interface ParamCountProductCategoryInclusion {
}
interface ResultCountProductCategoryInclusion {
}

export interface ParamGetRootCategory {
	salesRegion: number;
	language: number;
}
interface ReturnGetRootCategoryFirst {
	productCategory: number;
	name: string;
	total: number;
}
interface ReturnGetRootCategorySecend {
	productCategory: number;
	parent: number;
	name: string;
	total: number;
}
interface ReturnGetRootCategoryThird {
	productCategory: number;
	parent: number;
	name: string;
	total: number;
}
interface ResultGetRootCategory {
	first: ReturnGetRootCategoryFirst[];
	secend: ReturnGetRootCategorySecend[];
	third: ReturnGetRootCategoryThird[];
}

export interface ParamGetChildrenCategory {
	parent: number;
	salesRegion: number;
	language: number;
}
interface ReturnGetChildrenCategoryFirst {
	productCategory: number;
	parent: number;
	name: string;
	total: number;
}
interface ReturnGetChildrenCategorySecend {
	productCategory: number;
	parent: number;
	name: string;
	total: number;
}
interface ResultGetChildrenCategory {
	first: ReturnGetChildrenCategoryFirst[];
	secend: ReturnGetChildrenCategorySecend[];
}

export interface ParamSearchProductByCategory {
	productCategory: number;
	salesRegion: number;
	language: number;
}
interface ReturnSearchProductByCategory$page {
	seq: number;
	id: number;
	no: string;
	brand: number;
	origin: string;
	description: string;
	descriptionC: string;
	imageUrl: string;
	chemical: number;
	CAS: string;
	purity: string;
	molecularFomula: string;
	molecularWeight: string;
}
interface ResultSearchProductByCategory {
	$page: ReturnSearchProductByCategory$page[];
}

export interface ParamGetFutureDeliveryTime {
	product: number;
	salesRegion: number;
}
interface ReturnGetFutureDeliveryTimeRet {
	minValue: number;
	maxValue: number;
	unit: string;
	deliveryTimeDescription: string;
}
interface ResultGetFutureDeliveryTime {
	ret: ReturnGetFutureDeliveryTimeRet[];
}

export interface ParamSearchProduct {
	keyWord: string;
	salesRegion: number;
}
interface ReturnSearchProduct$page {
	seq: number;
	id: number;
	no: string;
	brand: number;
	origin: string;
	description: string;
	descriptionC: string;
	imageUrl: string;
	chemical: number;
	CAS: string;
	purity: string;
	molecularFomula: string;
	molecularWeight: string;
}
interface ResultSearchProduct {
	$page: ReturnSearchProduct$page[];
}

export interface ParamGetRootCategories {
	salesRegion: number;
	language: number;
}
interface ReturnGetRootCategoriesRet {
	productCategory: number;
	name: string;
	total: number;
}
interface ResultGetRootCategories {
	ret: ReturnGetRootCategoriesRet[];
}

export interface ParamGetPack {
	brandName: string;
	origin: string;
	radiox: number;
	radioy: number;
	unit: string;
}
interface ReturnGetPackRet {
	product: number;
	pack: number;
	jkcat: string;
}
interface ResultGetPack {
	ret: ReturnGetPackRet[];
}

export interface Param$poked {
}
interface Return$pokedRet {
	poke: number;
}
interface Result$poked {
	ret: Return$pokedRet[];
}

export interface ParamSearchPointProduct {
	keyWord: string;
	salesRegion: number;
}
interface ReturnSearchPointProduct$page {
	seq: number;
	id: number;
	product: number;
	origin: string;
	description: string;
	descriptionC: string;
	imageUrl: string;
	radiox: number;
	radioy: number;
	unit: string;
	retail: number;
}
interface ResultSearchPointProduct {
	$page: ReturnSearchPointProduct$page[];
}

export interface ParamGetProductByOrigin {
	origin: string;
	salesRegion: number;
}
interface ReturnGetProductByOriginRet {
	id: number;
}
interface ResultGetProductByOrigin {
	ret: ReturnGetProductByOriginRet[];
}

export interface ParamGetPointProductMoreBySource {
	pack: number;
	salesRegion: number;
}
interface ReturnGetPointProductMoreBySourceRet {
	id: number;
	product: number;
	origin: string;
	description: string;
	descriptionC: string;
	imageUrl: string;
	radiox: number;
	radioy: number;
	unit: string;
	retail: number;
}
interface ResultGetPointProductMoreBySource {
	ret: ReturnGetPointProductMoreBySourceRet[];
}

export interface ParamGetLotByLotnumber {
	lotnumber: string;
	origin: string;
}
interface ReturnGetLotByLotnumberRet {
	id: number;
	product: number;
}
interface ResultGetLotByLotnumber {
	ret: ReturnGetLotByLotnumberRet[];
}

export interface ParamGetAvailableProductById {
	product: number;
	salesRegion: number;
}
interface ReturnGetAvailableProductByIdRet {
	id: number;
	brand: number;
	origin: string;
	description: string;
	descriptionC: string;
	imageUrl: string;
	no: string;
	isValid: number;
}
interface ResultGetAvailableProductById {
	ret: ReturnGetAvailableProductByIdRet[];
}

export interface ParamGetProductPackByOrigin {
	origin: string;
	salesRegion: number;
}
interface ReturnGetProductPackByOriginRet {
	product: number;
	pack: number;
}
interface ResultGetProductPackByOrigin {
	ret: ReturnGetProductPackByOriginRet[];
}

export interface ParamGetProductPrices {
	product: number;
	salesRegion: number;
}
interface ReturnGetProductPricesRet {
	product: number;
	pack: number;
	salesRegion: number;
	retail: number;
	expireDate: any;
	discountinued: number;
	salesLevel: number;
}
interface ResultGetProductPrices {
	ret: ReturnGetProductPricesRet[];
}

export interface ParamProductSearchHistory {
	webUser: number;
	salesRegion: number;
	keyword: string;
}
interface ReturnProductSearchHistory$page {
	date: any;
	webUser: number;
	salesRegion: number;
	keyword: string;
}
interface ResultProductSearchHistory {
	$page: ReturnProductSearchHistory$page[];
}

export interface $PiecewiseDetail {
	id?: number;
	main: number;
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
	Chemical: UqTuid<TuidChemical>;
	SalesRegion: UqTuid<TuidSalesRegion>;
	Currency: UqTuid<TuidCurrency>;
	PackType: UqTuid<TuidPackType>;
	Language: UqTuid<TuidLanguage>;
	Brand: UqTuid<TuidBrand>;
	Stuff: UqTuid<TuidStuff>;
	ProductX: UqTuid<TuidProductX>;
	ProductCategory: UqTuid<TuidProductCategory>;
	Lot: UqTuid<TuidLot>;
	PackSalesLevel: UqTuid<TuidPackSalesLevel>;
	CountProductCategoryInclusion: UqAction<ParamCountProductCategoryInclusion, ResultCountProductCategoryInclusion>;
	GetRootCategory: UqQuery<ParamGetRootCategory, ResultGetRootCategory>;
	GetChildrenCategory: UqQuery<ParamGetChildrenCategory, ResultGetChildrenCategory>;
	SearchProductByCategory: UqQuery<ParamSearchProductByCategory, ResultSearchProductByCategory>;
	GetFutureDeliveryTime: UqQuery<ParamGetFutureDeliveryTime, ResultGetFutureDeliveryTime>;
	SearchProduct: UqQuery<ParamSearchProduct, ResultSearchProduct>;
	GetRootCategories: UqQuery<ParamGetRootCategories, ResultGetRootCategories>;
	GetPack: UqQuery<ParamGetPack, ResultGetPack>;
	$poked: UqQuery<Param$poked, Result$poked>;
	SearchPointProduct: UqQuery<ParamSearchPointProduct, ResultSearchPointProduct>;
	GetProductByOrigin: UqQuery<ParamGetProductByOrigin, ResultGetProductByOrigin>;
	GetPointProductMoreBySource: UqQuery<ParamGetPointProductMoreBySource, ResultGetPointProductMoreBySource>;
	GetLotByLotnumber: UqQuery<ParamGetLotByLotnumber, ResultGetLotByLotnumber>;
	GetAvailableProductById: UqQuery<ParamGetAvailableProductById, ResultGetAvailableProductById>;
	GetProductPackByOrigin: UqQuery<ParamGetProductPackByOrigin, ResultGetProductPackByOrigin>;
	GetProductPrices: UqQuery<ParamGetProductPrices, ResultGetProductPrices>;
	AgentPrice: UqMap;
	BrandSalesRegion: UqMap;
	BrandDeliveryTime: UqMap;
	ProductStuff: UqMap;
	PriceX: UqMap;
	ProductChemical: UqMap;
	ProductSalesRegion: UqMap;
	ProductLegallyProhibited: UqMap;
	ProductCache: UqMap;
	ProductProductCategory: UqMap;
	ProductCategoryInclusion: UqMap;
	ProductProductCategoryCache: UqMap;
	ProductMSDSFile: UqMap;
	ProductSpecFile: UqMap;
	ProductSalesRank: UqMap;
	ProductCategoryLeafCache: UqMap;
	COA: UqMap;
	ProductExtention: UqMap;
	ProductDeliveryTime: UqMap;
	ProductEmbargo: UqMap;
	ProductSearchHistory: UqHistory<ParamProductSearchHistory, ResultProductSearchHistory>;
	$PiecewiseDetail: UqID<any>;
	$Piecewise: UqID<any>;
}
