import { makeObservable, observable } from "mobx";
import { ReturnSearchEpecOrganization$page } from "uq-app/uqs/JkPlatformjoint";
import { CUqBase } from "../..";
import { VEpecOrganizationList } from "./VEpecOrgList";
import { VEpecOrganizationEdit } from './VEpecOrgEdit';

export class CEpec extends CUqBase {

    @observable epecOrganizations: ReturnSearchEpecOrganization$page[];

    constructor(res: any) {
        super(res);
        makeObservable(this, {
            epecOrganizations: observable,
        });
    }

    protected async internalStart() { }

    /**
     * 中石化organization 列表
     */
    openEpecOrganization = async () => {
        await this.getEpecOrganizations();
        this.openVPage(VEpecOrganizationList);
    }

    /**
     * 中石化organization 编辑
     */
    openEpecOrganizationEdit = async (org: any) => {
        let { organization } = org;
        let invoice = await this.uqs.JkCustomer.OrganizationSetting.obj({ organization: organization });
        if (invoice && invoice?.invoiceInfo) {
            await invoice.invoiceInfo.assure();
            invoice.invoiceInfoData = { ...invoice.invoiceInfo.obj };
        };
        this.openVPage(VEpecOrganizationEdit, { org: org, invoice: invoice });
    }

    /** 
     * 获取中石化单位列表
     */
    getEpecOrganizations = async () => {
        this.epecOrganizations = await (await this.uqs.JkPlatformjoint.SearchEpecOrganization.page({ key: undefined }, 100000, 10)).$page;
    }

    /** 
     * 保存单位编号、名称（中石化）
     */
    saveEpecOrganization = async (param: any) => {
        await this.uqs.JkPlatformjoint.EpecOrganization.add(param);
    };

    /**
     * 保存发票信息（中石化）
     */
    saveInvoiceInfo = async (invoice: any) => {
        let { id, invoiceType, invoiceInfo, organization } = invoice;
        let newInvoiceInfo = await this.uqs.JkCustomer.InvoiceInfo.save(id, invoiceInfo);
        let invoiceInfoId = newInvoiceInfo.id >= 0 ? newInvoiceInfo.id : newInvoiceInfo.inId;
        await this.uqs.JkCustomer.OrganizationSetting.add({ organization: organization, invoiceType: invoiceType, invoiceInfo: invoiceInfoId });
    };

    /**
     * 获取单位关联的发票
     */
    getOrganizationSettingByOrg = async (organization: any) => {
        return this.uqs.JkCustomer.OrganizationSetting.obj({ organization: organization });
    }
}