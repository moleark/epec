import React from "react";
import { makeObservable, observable } from "mobx";
import { autoHideTips, Context, Form, Schema, UiInputItem, UiSchema, VPage } from "tonva-react";
import { observer } from 'mobx-react';
import { CEpec } from './CEpec';

const invoiceTypes: any[] = [{ value: 1, title: "增值税普通发票", id: "common" }, { value: 2, title: "增值税专用发票", id: "valueAdded" }];

const schema: Schema = [
    { name: 'organization', type: 'id', required: false },
    { name: 'organizationId', type: 'id', required: true },
    { name: 'organizationName', type: 'string', required: true },
];

const uiSchema: UiSchema = {
    items: {
        organization: { visible: false },
		organizationId: { widget: 'text', label: '单位编码' } as UiInputItem,
		organizationName: { widget: 'text', label: '单位名称' } as UiInputItem,
        submit: { widget: 'button', label: '提交' },
	}
}

const schemaInvoice: Schema = [
	{ name: 'id', type: 'id', required: false },
    { name: 'title', type: 'string', required: false },
    { name: 'taxNo', type: 'string', required: false },
    { name: 'address', type: 'id', required: false },
    { name: 'telephone', type: 'string', required: false },
    { name: 'bank', type: 'string', required: false },
    { name: 'accountNo', type: 'string', required: false },
];

const uiSchemaInvoice: UiSchema = {
	items: {
		id: { visible: false },
        title: {
            widget: 'text', label: '单位全称', placeholder: '必填',
            rules: (value: string) => {
                return (value && value.length > 200) ? '单位全称最多200个字！' : undefined;
            }
        } as UiInputItem,
        taxNo: {
            widget: 'text', label: '纳税人识别码', placeholder: '必填',
            rules: (value: string) => {
                if (value) {
                    if (value ) value = value.trim();
                    var regArr = [/^[\da-z]{10,15}$/i, /^\d{6}[\da-z]{10,12}$/i, /^[a-z]\d{6}[\da-z]{9,11}$/i, /^[a-z]{2}\d{6}[\da-z]{8,10}$/i, /^\d{14}[\dx][\da-z]{4,5}$/i, /^\d{17}[\dx][\da-z]{1,2}$/i, /^[a-z]\d{14}[\dx][\da-z]{3,4}$/i, /^[a-z]\d{17}[\dx][\da-z]{0,1}$/i, /^[\d]{6}[\da-z]{13,14}$/i],
                        j = regArr.length;
                    for (var i = 0; i < j; i++) {
                        if (regArr[i].test(value)) {
                            return undefined;
                        }
                    }
                    return '纳税人识别码格式不正确，请重新输入！';
                }
            }
        } as UiInputItem,
        address: {
            widget: 'text', label: '注册地址', placeholder: '必填',
            rules: (value: string) => {
                return (value && value.length > 200) ? '注册地址最多200个字！' : undefined;
            }
        } as UiInputItem,
        telephone: {
            widget: 'text', label: '注册电话', placeholder: '必填',
            rules: (value: string) => {
                if (value ) value = value.trim();
                if (value && !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(value))
                    return "注册电话格式不正确，请重新输入！";
                else
                    return undefined;
            }
        } as UiInputItem,
        bank: {
            widget: 'text', label: '开户银行', placeholder: '必填',
            rules: (value: string) => {
                return (value && value.length > 100) ? '开户银行名称最多100个字！' : undefined;
            }
        } as UiInputItem,
        accountNo: {
            widget: 'text', label: '银行账号', placeholder: '必填',
            rules: (value: string) => {
                if (value ) value = value.trim();
                if (value && !/^\d{11,30}$/.test(value.replace(/\s*/g, "")))
                    return "银行账号格式不正确，请重新输入！";
                else
                    return undefined;
            }
        } as UiInputItem,
        submit: { widget: 'button', label: '提交' },
	}
}

const commonRequired = {
    id: false,
    title: true,
    taxNo: true,
    address: false,
    telephone: false,
    bank: false,
    accountNo: false,
    isDefault: false,
};

const valueAddedRequired = {
    id: false,
    title: true,
    taxNo: true,
    address: true,
    telephone: true,
    bank: true,
    accountNo: true,
    isDefault: false,
}

const commonVisible = {
    id: false,
    title: true,
    taxNo: true,
    address: false,
    telephone: false,
    bank: false,
    accountNo: false,
    isDefault: true,
};

const valueAddedVisible = {
    id: false,
    title: true,
    taxNo: true,
    address: true,
    telephone: true,
    bank: true,
    accountNo: true,
    isDefault: true,
}

export class VEpecOrganizationEdit extends VPage<CEpec> {
	private orgForm: Form; 
	private invoiceForm: Form;                       
	private invoiceInfoData: any;                    /* 单位发票信息 */
    private organization: any;                       /* 单位名称、编码信息 */
    private mergeData: { org: any, invoiceInfo: any } = { org: "", invoiceInfo: "" };   /* 确认提交的合并数据 */
    @observable invoiceType: number = 1;             /* 发票类型 */
    saveOrgTip = observable.box<string>("");            /* 单位确认成功提示 */
    saveInvoiceTip = observable.box<string>("");            /* 发票确认成功提示 */

	constructor(res: any) {
		super(res);
		makeObservable(this,{
			invoiceType: observable,
		});
	}

    init(param: any) {
        let { org, invoice } = param;
        this.organization = org;
        this.invoiceInfoData = invoice?.invoiceInfoData;
        this.invoiceType = (invoice?.invoiceType && invoice?.invoiceType?.id) || 1;
	}

	header() { return "中石化单位信息修改"; }
	
    content() {
        let organizationUI: JSX.Element = <Form ref={v => this.orgForm = v} className="my-3"
            schema={schema} uiSchema={uiSchema} formData={this.organization}
            onButtonClick={this.onSaveEpecOrganization} fieldLabelSize={3} />;

        return React.createElement(observer(() => {
            let frm = this.buildForm();
            let invoiceTypeUI: JSX.Element = <div className="form-group row py-3 mb-1">
                <div className="col-12 col-sm-3 pb-2 text-muted">发票类型:</div>
                <div className="col-12 col-sm-9">
                    {invoiceTypes.map((el: any) => {
                        return <div className="form-check form-check-inline" key={el.value}>
                            <input className="form-check-input" type="radio" name="invoiceType" id={el.id} value={el.value}
                                onChange={(event) => this.onInvoiceTypeClick(event)} checked={this.invoiceType === el.value}></input>
                            <label className="form-check-label" htmlFor={el.id}>{el.title}</label>
                        </div>;
                    })}
                </div>
            </div>;
            return <div>
                <div className="mb-3 bg-light p-2 pb-3">
                    {organizationUI}
                    {autoHideTips(this.saveOrgTip, <div className="alert alert-success text-primary" role="alert"> {this.saveOrgTip.get()}</div>)}
                    <div className="text-center">
                        <button onClick={this.onSaveEpecOrgClick} className="btn btn-primary w-50" type="button">确认修改</button>
                    </div>
                </div>
                <div className="mb-3 bg-light p-2 pb-3">
                    {invoiceTypeUI}
                    {frm}
                    {autoHideTips(this.saveInvoiceTip, <div className="alert alert-success text-primary" role="alert"> {this.saveInvoiceTip.get()}</div>)}
                    <div className="text-center">
                        <button onClick={this.onSaveEpecInvoiceClick} className="btn btn-primary w-50" type="button">确认</button>
                    </div>
                </div>
            </div>
        }));
    }
    
    private buildForm(): JSX.Element {
        let requiredFields: any = this.invoiceType === 1 ? commonRequired : valueAddedRequired;
        let visibleFields: any = this.invoiceType === 1 ? commonVisible : valueAddedVisible;
        schemaInvoice.forEach(e => {
            let { items } = uiSchemaInvoice;
            e.required = requiredFields[e.name];
            items[e.name].visible = visibleFields[e.name];
        });

        return React.createElement(observer(() => {
            return <Form ref={v => this.invoiceForm = v} className="my-3"
                schema={schemaInvoice}
                uiSchema={uiSchemaInvoice}
                formData={this.invoiceInfoData}
                onButtonClick={this.onSaveEpecInvoice}
                fieldLabelSize={3} />
        }))
    }

	private onInvoiceTypeClick = async (event: React.ChangeEvent<HTMLInputElement>) => {
        this.invoiceType = parseInt(event.currentTarget.value);
	}
	
    private onSaveEpecOrganization = async (name: string, context: Context) => {
        let { form } = context;
        let { data } = form;
        /* 检测单位编号、名称是否修改,并修正信息 */
        let { organizationId, organizationName } = data;
        if (!organizationId || !organizationName) {
            this.saveOrgTip.set("单位编号或单位名称不可为空"); return;
        };
        if (organizationId !== this.organization.organizationId || organizationName !== this.organization.organizationName) {
            let param = { ...this.organization, ...data };
            await this.controller.saveEpecOrganization(param);
            this.organization = param;
        };
        this.saveOrgTip.set("修改成功");
    }

    private onSaveEpecInvoice = async (name: string, context: Context) => {
        let { form } = context;
        let { data } = form;
        /* 单位关联的发票 */
        let invoice = {
            invoiceType: this.invoiceType,
            invoiceInfo: data,
            id: data.id,
            organization: this.organization.organization
        };
        this.invoiceInfoData = data;
        await this.controller.saveInvoiceInfo(invoice);
        this.saveInvoiceTip.set("修改成功");
    }

    private onSaveEpecOrgClick = async () => {
        if (!this.orgForm) return;
        await this.orgForm.buttonClick("submit");
    };

    private onSaveEpecInvoiceClick = async () => {
        if (!this.invoiceForm) return;
        await this.invoiceForm.buttonClick("submit");
    };
}
