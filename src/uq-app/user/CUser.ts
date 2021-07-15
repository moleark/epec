import { makeObservable, observable } from "mobx";
import { ReturnSearchEpecUser$page, ReturnSearchNeoTridentUser$page } from "uq-app/uqs/JkPlatformjoint";
import { CUqBase } from "../../uq-app";
import { VEpecUserList, VUserList } from './VUserList';
import { VUserDetail } from './VUserDetail';
import { VCreateUser } from "./VCreateUser";
import { GLOABLE } from "global";
import { VCreateUserEpec } from './VCreateUserEpec';
import { VPage } from "tonva-react";

export class CUser extends CUqBase {

    @observable userListEpec: ReturnSearchEpecUser$page[];
    @observable userListNotd: ReturnSearchNeoTridentUser$page[];

    constructor(res: any) {
        super(res);
        makeObservable(this, {
            userListEpec: observable,
            userListNotd: observable,
        });
    }

    protected async internalStart() { }

    /* 客户列表 */
    getDefaultUsers = async () => {
        this.userListNotd = await (await this.uqs.JkPlatformjoint.SearchNeoTridentUser.page({ key: undefined }, 100000, 10)).$page;
        this.userListEpec = await (await this.uqs.JkPlatformjoint.SearchEpecUser.page({ key: undefined }, 100000, 10)).$page;
    }

    tab = (userSource: string) => {
        let VP: new (c: CUser) => VPage<any>;
        VP = userSource === "epec" ? VEpecUserList : VUserList;
        return this.renderView(VP);
    }

    /* 客户详情 */
    showUserDetail = (user: ReturnSearchEpecUser$page) => {
        this.openVPage(VUserDetail, user);
    }
    /* 注册 中山院用户 */
    openCreateUser = () => {
        this.openVPage(VCreateUser);
    }
    /* 注册 中石化用户 */
    openCreateEpecUser = async () => {
        let { cEpec } = this.cApp;
        await cEpec.getEpecOrganizations();
        this.openVPage(VCreateUserEpec);
    }
    /* 查询中山院客户信息 */
    searchNeotrident = async (username: string) => {
        let body = JSON.stringify({ "username": username });
        let result = await fetch(GLOABLE.EPEC.INTERFACEUSERINFO, {
            method: "POST",
            headers: {
                "Accept": "application/x-www-form-urlencoded",
                "Content-Type": "application/json"
            },
            body: body
        });
        if (result.ok) {
            let getInterfaceUserInfo = await result.json();
            return getInterfaceUserInfo;
        };
        return;
    }
    /* 用户注册API */
    submitCreateUser = async (param: any) => {
        let body = JSON.stringify(param);
        let result = await fetch(GLOABLE.EPEC.REGISTER, {
            method: "POST",
            headers: {
                "Accept": "application/x-www-form-urlencoded",
                "Content-Type": "application/json"
            },
            body: body
        });
        if (!result.ok) return;
        return await result.json();
    };
    /* 用户信息写入webuser */
    addWebUser = async (param: any) => {
        let { id, webUser } = param;
        await this.uqs.JkWebuser.WebUser.save(id, webUser);
    }
    /*  创建neoTrident客户 */
    addNeoTridentUser = async (param: any) => {
        let { id, organization, password, USERID, USERCODE, MD5ID } = param;
        await this.uqs.JkPlatformjoint.NeoTridentUser.add({
            webUser: id, sharedSecret: MD5ID, username: USERCODE,
            organization: organization, team: USERID, password: password
        });
    }
    /* 创建Epec客户 */
    addEpecUser = async (param: any) => {
        let { webuser, username, organizationId, mobile, useremail, organizationName, password, isAdmin } = param;
        await this.uqs.JkPlatformjoint.EpecUser.add({
            webUser: webuser, username: username, password: password, organizationId: organizationId,
            organizationName: organizationName, mobile: mobile, email: useremail, isAdmin: isAdmin
        });
    }

    /* 检测CID是否存在 */
    getCustomerByNo = async (customerNo: string) => {
        return await this.uqs.JkCustomer.GetCustomerByNo.obj({ customerNo: customerNo });
    }

    /* 客户CID绑定 */
    auditPendingUser = async (param: any) => {
        let { webuser, customerNo, customerResult } = param;
        let { JkCustomer, JkWebuser } = this.uqs;
        let { GetBuyerAccountByNo, GetCustomerOrganization, BuyerAccount: BuyerAccountTuid } = JkCustomer;
        let { customer } = customerResult;
        let buyerAccountInner = await customer.assure();
        let buyerAccount: any = await GetBuyerAccountByNo.obj({ buyAccountNo: customerNo });
        if (buyerAccount) buyerAccount = { id: buyerAccount.buyerAccount };
        if (!buyerAccount) {
            let { id, name, xyz } = buyerAccountInner.obj;
            let organizationBox = await GetCustomerOrganization.obj({ customerId: id });
            buyerAccount = await BuyerAccountTuid.save(undefined, {
                "organization": organizationBox && organizationBox.organization,
                "description": name, "xyz": xyz, "no": customerNo, "createTime": Date.now(), "isValid": 1
            });
        };
        let { AuditPendingUser } = JkWebuser;
        await AuditPendingUser.submit({ id: webuser, customerId: customer, buyerAccountId: buyerAccount });
    }

    /* epec客户绑定单位默认发票信息 */
    relateInvoiceByEpecOrg = async (param: any) => {
        let { webUser, organizationId } = param;
        let { cEpec } = this.cApp;
        let findOrganizationByOrgId = cEpec.epecOrganizations.find((el: any) => el && String(el.organizationId) === String(organizationId));
        let getInvoiceByOrg = await cEpec.getOrganizationSettingByOrg(findOrganizationByOrgId?.organization);
        if (getInvoiceByOrg) {
            let { invoiceType, invoiceInfo } = getInvoiceByOrg
            await this.uqs.JkWebuser.WebUserSetting.add({ webUser: webUser, invoiceType: invoiceType, invoiceInfo: invoiceInfo });
        };
    }
}