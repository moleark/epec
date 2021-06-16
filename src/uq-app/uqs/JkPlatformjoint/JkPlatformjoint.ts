//=== UqApp builder created on Wed Jun 16 2021 17:44:33 GMT+0800 (中国标准时间) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqAction, UqQuery, UqMap, UqHistory, UqPending, UqID } from "tonva-react";


//===============================
//======= UQ 百灵威系统工程部/platformjoint ========
//===============================

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

export interface TuidPlatform {
    name: string;
}

export interface Tuid$user {
    name: string;
    nick: string;
    icon: string;
    assigned: string;
    poke: number;
}

export interface TuidCity {
}

export interface TuidCounty {
}

export interface TuidProvince {
}

export interface TuidJDCity {
    province: number;
    englishName: string;
    chineseName: string;
    isValid: number;
    order: number;
}

export interface TuidJDCounty {
    city: number;
    englishName: string;
    chineseName: string;
    isValid: number;
    order: number;
}

export interface TuidJDTown {
    county: number;
    englishName: string;
    chineseName: string;
    isValid: number;
    order: number;
}

export interface TuidJDProvince {
    country: number;
    englishName: string;
    chineseName: string;
    isValid: number;
    order: number;
}

export interface TuidPlatformCustomer {
    platform: number;
    idOnPlatform: string;
    name: string;
    organizationName: string;
    phone: string;
    departmentName: string;
    laboratoryName: string;
}

export interface TuidCustomer {
}

export interface TuidEpecProvince {
    country: number;
    englishName: string;
    chineseName: string;
    code: string;
    isValid: number;
    order: number;
}

export interface TuidEpecCity {
    province: number;
    englishName: string;
    chineseName: string;
    code: string;
    isValid: number;
    order: number;
}

export interface TuidEpecCounty {
    city: number;
    englishName: string;
    chineseName: string;
    code: string;
    isValid: number;
    order: number;
}

export interface TuidWebUser {
}

export interface TuidEpecMessage {
    content: string;
    createtime: any;
}

export interface TuidEpecMessageData {
    epecMessage: number;
    messageId: number;
    messageSortNumber: number;
    messageBody: string;
    messageType: string;
    receivedTime: any;
    createtime: any;
}

export interface TuidApiRawContent {
    platform: number;
    api: string;
    content: string;
    avoidDuplicationId: string;
}

export interface TuidExpressLogistics {
}

export interface TuidPunchoutSetupRequest {
    platform: number;
    userIdentity: string;
    body: string;
}

export interface ParamAuditPlatformCustomerRefuse {
    platformCustomer: number;
    reason: string;
}
interface ResultAuditPlatformCustomerRefuse {
}

export interface ParamApplyAuditPlatformCustomer {
    platformCustomer: number;
}
interface ResultApplyAuditPlatformCustomer {
}

export interface ParamAuditPlatformCustomer {
    platformCustomer: number;
    customer: number;
}
interface ResultAuditPlatformCustomer {
}

export interface ParamAddPlatformCustomerAuditPending {
    platformCustomer: number;
    comments: string;
    orderid: string;
    consigneeName: string;
    consigneePhone: string;
    receivingAddress: string;
    invoiceTitle: string;
    isCentralizedInspection: number;
    orderState: string;
    inspectionAddress: string;
    orderItemId: string;
    descriptionC: string;
    description: string;
    originalId: string;
    brandName: string;
    package: string;
    casFormat: string;
    catalogPrice: number;
    quantity: number;
    purity: string;
}
interface ResultAddPlatformCustomerAuditPending {
}

export interface Param$poked {
}
interface Return$pokedRet {
    poke: number;
}
interface Result$poked {
    ret: Return$pokedRet[];
}

export interface ParamGetplatformCustomerID {
    platform: number;
    idOnPlatform: string;
}
interface ReturnGetplatformCustomerIDRet {
    id: number;
}
interface ResultGetplatformCustomerID {
    ret: ReturnGetplatformCustomerIDRet[];
}

export interface ParamGetPlatformCustomerAuditOrderPending {
    platformCustomer: number;
}
interface ReturnGetPlatformCustomerAuditOrderPendingRet {
    orderid: string;
    date: any;
}
interface ResultGetPlatformCustomerAuditOrderPending {
    ret: ReturnGetPlatformCustomerAuditOrderPendingRet[];
}

export interface ParamSearchHavingAuditRefusePlatformCustomer {
}
interface ReturnSearchHavingAuditRefusePlatformCustomer$page {
    date: any;
    platformcustomer: number;
    reason: string;
}
interface ResultSearchHavingAuditRefusePlatformCustomer {
    $page: ReturnSearchHavingAuditRefusePlatformCustomer$page[];
}

export interface ParamGetOrderDetails {
    orderid: string;
}
interface ReturnGetOrderDetailsRet {
    orderid: string;
    consigneeName: string;
    consigneePhone: string;
    receivingAddress: string;
    invoiceTitle: string;
    isCentralizedInspection: number;
    orderState: string;
    inspectionAddress: string;
    orderItemId: string;
    descriptionC: string;
    description: string;
    originalId: string;
    brandName: string;
    package: string;
    casFormat: string;
    catalogPrice: number;
    quantity: number;
    purity: string;
    comments: string;
}
interface ResultGetOrderDetails {
    ret: ReturnGetOrderDetailsRet[];
}

export interface ParamSearchHavingAuditPlatformCustomer {
}
interface ReturnSearchHavingAuditPlatformCustomer$page {
    date: any;
    platformcustomer: number;
    customer: number;
}
interface ResultSearchHavingAuditPlatformCustomer {
    $page: ReturnSearchHavingAuditPlatformCustomer$page[];
}

export interface ParamGetPendingAuditPlatformCustomer {
}
interface ReturnGetPendingAuditPlatformCustomerRet {
    platformcustomer: number;
}
interface ResultGetPendingAuditPlatformCustomer {
    ret: ReturnGetPendingAuditPlatformCustomerRet[];
}

export interface ParamGetNewOrderItemId {
    platform: number;
}
interface ResultGetNewOrderItemId {
}

export interface ParamGetNewOrderId {
    platform: number;
}
interface ResultGetNewOrderId {
}

export interface ParamSearchEpecUser {
    key: string;
}
export interface ReturnSearchEpecUser$page {
    webUser: number;
    username: string;
    organizationName: string;
    mobile: string;
    email: string;
    isAdmin: number;
    $id: number;
}
export interface ResultSearchEpecUser {
    $page: ReturnSearchEpecUser$page[];
}

export interface ParamSearchNeoTridentUser {
    key: string;
}
export interface ReturnSearchNeoTridentUser$page {
    webUser: number;
    username: string;
    organization: string;
    team: string;
    $id: number;
}
export interface ResultSearchNeoTridentUser {
    $page: ReturnSearchNeoTridentUser$page[];
}

export interface ParamPlatformCustomerAuditRefuseHistory {
    platformCustomer: number;
    reason: string;
}
interface ReturnPlatformCustomerAuditRefuseHistory$page {
    date: any;
    platformCustomer: number;
    reason: string;
    user: number;
}
interface ResultPlatformCustomerAuditRefuseHistory {
    $page: ReturnPlatformCustomerAuditRefuseHistory$page[];
}

export interface ParamPlatformCustomerAuditHistory {
    platformCustomer: number;
    customer: number;
}
interface ReturnPlatformCustomerAuditHistory$page {
    date: any;
    platformCustomer: number;
    customer: number;
    user: number;
}
interface ResultPlatformCustomerAuditHistory {
    $page: ReturnPlatformCustomerAuditHistory$page[];
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
    Acts(param: ParamActs): Promise<any>;

    $sheet: UqTuid<Tuid$sheet>;
    Platform: UqTuid<TuidPlatform>;
    $user: UqTuid<Tuid$user>;
    City: UqTuid<TuidCity>;
    County: UqTuid<TuidCounty>;
    Province: UqTuid<TuidProvince>;
    JDCity: UqTuid<TuidJDCity>;
    JDCounty: UqTuid<TuidJDCounty>;
    JDTown: UqTuid<TuidJDTown>;
    JDProvince: UqTuid<TuidJDProvince>;
    PlatformCustomer: UqTuid<TuidPlatformCustomer>;
    Customer: UqTuid<TuidCustomer>;
    EpecProvince: UqTuid<TuidEpecProvince>;
    EpecCity: UqTuid<TuidEpecCity>;
    EpecCounty: UqTuid<TuidEpecCounty>;
    WebUser: UqTuid<TuidWebUser>;
    EpecMessage: UqTuid<TuidEpecMessage>;
    EpecMessageData: UqTuid<TuidEpecMessageData>;
    ApiRawContent: UqTuid<TuidApiRawContent>;
    ExpressLogistics: UqTuid<TuidExpressLogistics>;
    PunchoutSetupRequest: UqTuid<TuidPunchoutSetupRequest>;
    AuditPlatformCustomerRefuse: UqAction<ParamAuditPlatformCustomerRefuse, ResultAuditPlatformCustomerRefuse>;
    ApplyAuditPlatformCustomer: UqAction<ParamApplyAuditPlatformCustomer, ResultApplyAuditPlatformCustomer>;
    AuditPlatformCustomer: UqAction<ParamAuditPlatformCustomer, ResultAuditPlatformCustomer>;
    AddPlatformCustomerAuditPending: UqAction<ParamAddPlatformCustomerAuditPending, ResultAddPlatformCustomerAuditPending>;
    $poked: UqQuery<Param$poked, Result$poked>;
    GetplatformCustomerID: UqQuery<ParamGetplatformCustomerID, ResultGetplatformCustomerID>;
    GetPlatformCustomerAuditOrderPending: UqQuery<ParamGetPlatformCustomerAuditOrderPending, ResultGetPlatformCustomerAuditOrderPending>;
    SearchHavingAuditRefusePlatformCustomer: UqQuery<ParamSearchHavingAuditRefusePlatformCustomer, ResultSearchHavingAuditRefusePlatformCustomer>;
    GetOrderDetails: UqQuery<ParamGetOrderDetails, ResultGetOrderDetails>;
    SearchHavingAuditPlatformCustomer: UqQuery<ParamSearchHavingAuditPlatformCustomer, ResultSearchHavingAuditPlatformCustomer>;
    GetPendingAuditPlatformCustomer: UqQuery<ParamGetPendingAuditPlatformCustomer, ResultGetPendingAuditPlatformCustomer>;
    GetNewOrderItemId: UqQuery<ParamGetNewOrderItemId, ResultGetNewOrderItemId>;
    GetNewOrderId: UqQuery<ParamGetNewOrderId, ResultGetNewOrderId>;
    SearchEpecUser: UqQuery<ParamSearchEpecUser, ResultSearchEpecUser>;
    SearchNeoTridentUser: UqQuery<ParamSearchNeoTridentUser, ResultSearchNeoTridentUser>;
    AccessToken: UqMap;
    JDCityMapping: UqMap;
    JDProvinceMapping: UqMap;
    JDCountyMapping: UqMap;
    OutwardOrderMapping: UqMap;
    PlatformCustomerMapping: UqMap;
    EpecUser: UqMap;
    EpecCountyMapping: UqMap;
    EpecCityMapping: UqMap;
    NeoTridentUser: UqMap;
    EpecProvinceMapping: UqMap;
    OrderItemIds: UqMap;
    OrderItemIdPointer: UqMap;
    OrderIdPointer: UqMap;
    OrderIds: UqMap;
    TransCompanyMapping: UqMap;
    PlatformCustomerAuditRefuseHistory: UqHistory<ParamPlatformCustomerAuditRefuseHistory, ResultPlatformCustomerAuditRefuseHistory>;
    PlatformCustomerAuditHistory: UqHistory<ParamPlatformCustomerAuditHistory, ResultPlatformCustomerAuditHistory>;
    PlatformCustomerAuditOrderPending: UqPending<any, any>;
    PlatformCustomerAuditPending: UqPending<any, any>;
    EpecLoginPending: UqPending<any, any>;
    $PiecewiseDetail: UqID<any>;
    $Piecewise: UqID<any>;
}
