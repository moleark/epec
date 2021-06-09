//=== UqApp builder created on Wed Jun 09 2021 19:02:07 GMT+0800 (China Standard Time) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqAction, UqBook, UqQuery, UqMap, UqHistory, UqPending, UqID } from "tonva-react";


//===============================
//======= UQ 百灵威系统工程部/warehouse ========
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

export interface TuidSalesRegion {
	name: string;
	currency: number;
	no: string;
}

export interface TuidAddress {
	country: number;
	province: number;
	city: number;
	county: number;
	description: string;
}

export interface TuidCountry {
	code: string;
	englishName: string;
	chineseName: string;
	no: string;
}

export interface TuidProvince {
	country: number;
	englishName: string;
	chineseName: string;
	no: string;
}

export interface TuidCity {
	province: number;
	englishName: string;
	chineseName: string;
	no: string;
}

export interface TuidCounty {
	city: number;
	englishName: string;
	chineseName: string;
	no: string;
}

export interface TuidCurrency {
	name: string;
	suffix: string;
}

export interface TuidBrand {
	name: string;
	no: string;
}

export interface TuidProductX {
	brand: number;
}

export interface TuidShippingArea {
	name: string;
}

export interface TuidWarehouse {
	name: string;
	no: string;
	code: string;
	isValid: number;
}

export interface TuidWarehouseRoom {
	name: string;
	no: string;
	code: string;
	warehouse: number;
	isValid: number;
}

export interface TuidShelfLayer {
	name: string;
	no: string;
	code: string;
	shelf: number;
	isValid: number;
}

export interface TuidShelf {
	name: string;
	no: string;
	code: string;
	warehouseRoom: number;
	isValid: number;
}

export interface TuidShelfBlock {
	name: string;
	no: string;
	code: string;
	shelfLayer: number;
	isValid: number;
}

export interface TuidStorageCondition {
	name: string;
	no: string;
}

export interface TuidWarehouseStorageCondition {
	name: string;
	description: string;
}

export interface TuidExpressLogistics {
	name: string;
	no: string;
	isValid: number;
	salesRegion: number;
}

export interface TuidOutInBoundOrder {
	warehouse: number;
	createTime: any;
	confirmTime: any;
	type: number;
	state: number;
	operator: number;
	confirmer: number;
}

export interface TuidOutInBoundReason {
	name: string;
	no: string;
	note: string;
}

export interface TuidWebUser {
}

export interface ParamOutBoundCut {
	warehouse: number;
}
interface ReturnOutBoundCutRet {
	outBoundOrderId: number;
	$id: number;
}
interface ResultOutBoundCut {
	ret: ReturnOutBoundCutRet[];
}

export interface ParamGetInventoryAllocation {
	product: number;
	pack: number;
	salesRegion: number;
}
interface ReturnGetInventoryAllocationRet {
	product: number;
	pack: number;
	salesRegion: number;
	warehouse: number;
	quantity: number;
	minDeliveryDays: number;
	maxDeliveryDays: number;
	deliveryTimeDescription: string;
	$id: number;
}
interface ResultGetInventoryAllocation {
	ret: ReturnGetInventoryAllocationRet[];
}

export interface ParamGetShippingPlan {
	product: number;
	pack: number;
	city: number;
	quantity: number;
}
interface ReturnGetShippingPlanRet {
	product: number;
	pack: number;
	warehouse: number;
	quantity: number;
	$id: number;
}
interface ResultGetShippingPlan {
	ret: ReturnGetShippingPlanRet[];
}

export interface ParamSearchWarehouseByKey {
	key: string;
}
interface ReturnSearchWarehouseByKeyRet {
	id: number;
	name: string;
	no: string;
	$id: number;
}
interface ResultSearchWarehouseByKey {
	ret: ReturnSearchWarehouseByKeyRet[];
}

export interface ParamSearchWarehouseRoom {
	warehouse: number;
	key: string;
}
interface ReturnSearchWarehouseRoomRet {
	id: number;
	no: string;
	name: string;
	warehouse: number;
	isValid: number;
	$id: number;
}
interface ResultSearchWarehouseRoom {
	ret: ReturnSearchWarehouseRoomRet[];
}

export interface ParamSearchShelf {
	warehouseRoom: number;
	key: string;
}
interface ReturnSearchShelfRet {
	id: number;
	no: string;
	name: string;
	warehouseRoom: number;
	isValid: number;
	$id: number;
}
interface ResultSearchShelf {
	ret: ReturnSearchShelfRet[];
}

export interface ParamSearchShelfLayer {
	shelf: number;
	key: string;
}
interface ReturnSearchShelfLayerRet {
	id: number;
	no: string;
	name: string;
	shelf: number;
	isValid: number;
	$id: number;
}
interface ResultSearchShelfLayer {
	ret: ReturnSearchShelfLayerRet[];
}

export interface ParamSearchShelfBlock {
	shelfLayer: number;
	key: string;
}
interface ReturnSearchShelfBlockRet {
	id: number;
	no: string;
	name: string;
	shelfLayer: number;
	$id: number;
}
interface ResultSearchShelfBlock {
	ret: ReturnSearchShelfBlockRet[];
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

export interface ParamSearchReadyOutBoundCutTastList {
	warehouse: number;
}
interface ReturnSearchReadyOutBoundCutTastListRet {
	consigneeUnitName: string;
	consigneeName: string;
	product: number;
	pack: number;
	quantity: number;
	outBoundTime: any;
	warehouse: number;
	outBoundReason: number;
	$id: number;
}
interface ResultSearchReadyOutBoundCutTastList {
	ret: ReturnSearchReadyOutBoundCutTastListRet[];
}

export interface ParamSearchOutBoundOrderDetail {
	outBoundOrder: number;
}
interface ReturnSearchOutBoundOrderDetailRet {
	warehouse: number;
	shelfBlock: number;
	product: number;
	pack: number;
	quantity: number;
	consigneeName: string;
	consigneeUnitName: string;
	consigneeAddress: string;
	consigneeZipcode: string;
	consigneeTelphone: string;
	consigneeMobile: string;
	expressLogistics: number;
	shouldExpressLogistics: string;
	shouldNotExpressLogistics: string;
	needInsuredWhenDelivery: number;
	unitPrice: number;
	currency: string;
	isNeedDelivery: number;
	deliveryData: string;
	coaQuantity: number;
	msdsQuantity: number;
	receiptQuantity: number;
	purchaseBillQuantity: number;
	showPriceWhenPrintReceipt: number;
	isAppointLot: number;
	appointLot: string;
	deliveryNotes: string;
	outBoundReason: number;
	relationId: string;
	outBoundOrder: string;
	trayNumber: number;
	handOverTime: any;
	outBoundTime: any;
	$id: number;
}
interface ResultSearchOutBoundOrderDetail {
	ret: ReturnSearchOutBoundOrderDetailRet[];
}

export interface ParamSearchOutBoundOrderList {
	warehouse: number;
}
interface ReturnSearchOutBoundOrderListRet {
	id: number;
	warehouse: number;
	state: number;
	operator: number;
	createTime: any;
	$id: number;
}
interface ResultSearchOutBoundOrderList {
	ret: ReturnSearchOutBoundOrderListRet[];
}

export interface ParamGetValidWarehouseList {
}
interface ReturnGetValidWarehouseListRet {
	id: number;
	name: string;
	no: string;
	$id: number;
}
interface ResultGetValidWarehouseList {
	ret: ReturnGetValidWarehouseListRet[];
}

export interface ParamProductInventory {
	warehouse: number;
	product: number;
}
interface ReturnProductInventory$page {
	pack: number;
	quantity: number;
}
interface ResultProductInventory {
	$page: ReturnProductInventory$page[];
}

export interface ParamShelfBlockInventory {
}
interface ReturnShelfBlockInventory$page {
	shelfBlock: number;
	quantity: number;
}
interface ResultShelfBlockInventory {
	$page: ReturnShelfBlockInventory$page[];
}

export interface ParamShelfBlockLotInventory {
	shelfBlock: number;
	product: number;
}
interface ReturnShelfBlockLotInventory$page {
	pack: number;
	lotNumber: string;
	quantity: number;
}
interface ResultShelfBlockLotInventory {
	$page: ReturnShelfBlockLotInventory$page[];
}

export interface ParamShelfInOutBoundHistory {
	shelfBlock: number;
	product: number;
	pack: number;
	inOutType: number;
	quantity: number;
	inOutBoundTime: any;
}
interface ReturnShelfInOutBoundHistory$page {
	date: any;
	shelfBlock: number;
	product: number;
	pack: number;
	inOutType: number;
	quantity: number;
	inOutBoundTime: any;
}
interface ResultShelfInOutBoundHistory {
	$page: ReturnShelfInOutBoundHistory$page[];
}

export interface ParamOutBoundCutHistory {
	warehouse: number;
	shelfBlock: number;
	product: number;
	pack: number;
	quantity: number;
	consigneeName: string;
	consigneeUnitName: string;
	consigneeAddress: string;
	consigneeZipcode: string;
	consigneeTelphone: string;
	consigneeMobile: string;
	expressLogistics: number;
	shouldExpressLogistics: string;
	shouldNotExpressLogistics: string;
	needInsuredWhenDelivery: number;
	unitPrice: number;
	currency: string;
	isNeedDelivery: number;
	deliveryData: string;
	coaQuantity: number;
	msdsQuantity: number;
	receiptQuantity: number;
	purchaseBillQuantity: number;
	showPriceWhenPrintReceipt: number;
	isAppointLot: number;
	appointLot: string;
	deliveryNotes: string;
	outBoundReason: number;
	relationId: string;
	outBoundOrder: string;
	trayNumber: number;
	handOverTime: any;
	outBoundTime: any;
}
interface ReturnOutBoundCutHistory$page {
	date: any;
	warehouse: number;
	shelfBlock: number;
	product: number;
	pack: number;
	quantity: number;
	consigneeName: string;
	consigneeUnitName: string;
	consigneeAddress: string;
	consigneeZipcode: string;
	consigneeTelphone: string;
	consigneeMobile: string;
	expressLogistics: number;
	shouldExpressLogistics: string;
	shouldNotExpressLogistics: string;
	needInsuredWhenDelivery: number;
	unitPrice: number;
	currency: string;
	isNeedDelivery: number;
	deliveryData: string;
	coaQuantity: number;
	msdsQuantity: number;
	receiptQuantity: number;
	purchaseBillQuantity: number;
	showPriceWhenPrintReceipt: number;
	isAppointLot: number;
	appointLot: string;
	deliveryNotes: string;
	outBoundReason: number;
	relationId: string;
	outBoundOrder: string;
	trayNumber: number;
	handOverTime: any;
	outBoundTime: any;
}
interface ResultOutBoundCutHistory {
	$page: ReturnOutBoundCutHistory$page[];
}

export interface ParamTransportTracking {
	transCompany: number;
	transnumber: string;
	station: string;
	nextStation: string;
	content: string;
	createTime: any;
}
interface ReturnTransportTracking$page {
	date: any;
	transCompany: number;
	transnumber: string;
	station: string;
	nextStation: string;
	content: string;
	createTime: any;
}
interface ResultTransportTracking {
	$page: ReturnTransportTracking$page[];
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
	SalesRegion: UqTuid<TuidSalesRegion>;
	Address: UqTuid<TuidAddress>;
	Country: UqTuid<TuidCountry>;
	Province: UqTuid<TuidProvince>;
	City: UqTuid<TuidCity>;
	County: UqTuid<TuidCounty>;
	Currency: UqTuid<TuidCurrency>;
	Brand: UqTuid<TuidBrand>;
	ProductX: UqTuid<TuidProductX>;
	ShippingArea: UqTuid<TuidShippingArea>;
	Warehouse: UqTuid<TuidWarehouse>;
	WarehouseRoom: UqTuid<TuidWarehouseRoom>;
	ShelfLayer: UqTuid<TuidShelfLayer>;
	Shelf: UqTuid<TuidShelf>;
	ShelfBlock: UqTuid<TuidShelfBlock>;
	StorageCondition: UqTuid<TuidStorageCondition>;
	WarehouseStorageCondition: UqTuid<TuidWarehouseStorageCondition>;
	ExpressLogistics: UqTuid<TuidExpressLogistics>;
	OutInBoundOrder: UqTuid<TuidOutInBoundOrder>;
	OutInBoundReason: UqTuid<TuidOutInBoundReason>;
	WebUser: UqTuid<TuidWebUser>;
	OutBoundCut: UqAction<ParamOutBoundCut, ResultOutBoundCut>;
	ProductInventory: UqBook<ParamProductInventory, ResultProductInventory>;
	ShelfBlockInventory: UqBook<ParamShelfBlockInventory, ResultShelfBlockInventory>;
	ShelfBlockLotInventory: UqBook<ParamShelfBlockLotInventory, ResultShelfBlockLotInventory>;
	GetInventoryAllocation: UqQuery<ParamGetInventoryAllocation, ResultGetInventoryAllocation>;
	GetShippingPlan: UqQuery<ParamGetShippingPlan, ResultGetShippingPlan>;
	SearchWarehouseByKey: UqQuery<ParamSearchWarehouseByKey, ResultSearchWarehouseByKey>;
	SearchWarehouseRoom: UqQuery<ParamSearchWarehouseRoom, ResultSearchWarehouseRoom>;
	SearchShelf: UqQuery<ParamSearchShelf, ResultSearchShelf>;
	SearchShelfLayer: UqQuery<ParamSearchShelfLayer, ResultSearchShelfLayer>;
	SearchShelfBlock: UqQuery<ParamSearchShelfBlock, ResultSearchShelfBlock>;
	$poked: UqQuery<Param$poked, Result$poked>;
	SearchReadyOutBoundCutTastList: UqQuery<ParamSearchReadyOutBoundCutTastList, ResultSearchReadyOutBoundCutTastList>;
	SearchOutBoundOrderDetail: UqQuery<ParamSearchOutBoundOrderDetail, ResultSearchOutBoundOrderDetail>;
	SearchOutBoundOrderList: UqQuery<ParamSearchOutBoundOrderList, ResultSearchOutBoundOrderList>;
	GetValidWarehouseList: UqQuery<ParamGetValidWarehouseList, ResultGetValidWarehouseList>;
	ShippingAreaInclusionProvince: UqMap;
	ShippingAreaInclusionCity: UqMap;
	WarehouseSupportProvince: UqMap;
	WarehouseSupportCity: UqMap;
	SalesRegionWarehouse: UqMap;
	WarehouseStorageConditionMap: UqMap;
	ShelfInOutBoundHistory: UqHistory<ParamShelfInOutBoundHistory, ResultShelfInOutBoundHistory>;
	OutBoundCutHistory: UqHistory<ParamOutBoundCutHistory, ResultOutBoundCutHistory>;
	TransportTracking: UqHistory<ParamTransportTracking, ResultTransportTracking>;
	OutBoundReadyCutTask: UqPending<any, any>;
	OutBoundHandoverTask: UqPending<any, any>;
	$PiecewiseDetail: UqID<any>;
	$Piecewise: UqID<any>;
}
