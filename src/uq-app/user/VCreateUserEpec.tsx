import * as React from 'react';
import { observable } from "mobx";
import { observer } from 'mobx-react';
import { VPage, autoHideTips, Form, Schema, UiSchema, UiInputItem, UiSelect, Context, UiRadio } from 'tonva-react';
import { CUser } from ".";
import { noUserMessage, Salutations } from './VCreateUser';

const schema: Schema = [
    { name: 'firstName', type: 'string', required: false },
    { name: 'gender', type: 'string', required: false },
    { name: 'username', type: 'string', required: true },
    { name: 'password', type: 'string', required: true },
    { name: 'mobile', type: 'string', required: false },
    { name: 'useremail', type: 'string', required: false },
    { name: 'organizationName', type: 'string', required: true },
    { name: 'isAdmin', type: 'number', required: true },
    { name: 'customerNo', type: 'string', required: true },
];

export class VCreateUserEpec extends VPage<CUser>{

    private form: Form;
    createUserTip = observable.box<string>("");     /* 提交 创建用户提示 */
    private organizationList: any[] = [{ value: "请选择单位", title: "请选择单位" }].concat(this.controller.cApp.cEpec.epecOrganizations
        .filter((el: any) => el && el.organizationId).map((el: any) => { return { value: el.organizationName, title: el.organizationName } }));
    private uiSchema: UiSchema = {
        items: {
            firstName: { widget: 'text', label: '用户姓名' } as UiInputItem,
            gender: { widget: 'radio', label: '性别', defaultValue:"1", list: [{ value: '1', title: '男' }, { value: '0', title: '女' }] } as UiRadio,
            username: { widget: 'text', label: '用户名' } as UiInputItem,
            password: { widget: 'text', label: '密码', defaultValue:"123456" } as UiInputItem,
            useremail: { widget: 'text', label: '邮箱' } as UiInputItem,
            organizationName: {
                widget: 'select', label: '单位',
                list: this.organizationList
            } as UiSelect,
            mobile: {
                widget: 'text', label: '手机号', placeholder: '手机号码',
                rules: (value: string) => {
                    if (value && !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(value))
                        return "手机号格式不正确，请重新输入！";
                    else
                        return undefined;
                }
            } as UiInputItem,
            isAdmin: { widget: 'radio', label: '是否为管理员', defaultValue:0, list: [{ value: 0, title: '否(0)' }, { value: 1, title: '是(1)' }] } as UiRadio,
            customerNo: { widget: 'text', label: '客户CID'} as UiInputItem,
            submit: { widget: 'button', label: '提交' },
        }
    }

    header() { return '中石化用户注册' };

    footer() {
        return <div className="text-center">
            <button onClick={this.onSaveClick} className="btn btn-success w-50" type="button">注册</button>
        </div>
    }

    content() {
        return React.createElement(observer(() => {
            let selectOrganiza: JSX.Element;
            selectOrganiza =  <Form ref={v => this.form = v} className="my-3"
                schema={schema}
                uiSchema={this.uiSchema}
                formData={{}}
                onButtonClick={this.onFormButtonClick}
                fieldLabelSize={3} />
            return <div className="p-2">
                {selectOrganiza}
                {autoHideTips(this.createUserTip, <div className="alert alert-success text-danger" role="alert"> {this.createUserTip.get()}</div>)}
            </div>
        }));
    }

    private onFormButtonClick = async (name: string, context: Context) => {
        let { form } = context;
        let { data } = form;
        let { cApp } = this.controller;
        let { cEpec } = cApp;
        let { username, password, mobile, useremail, firstName, gender, organizationName, customerNo } = data;
        if (organizationName === "请选择单位") return;
        let { auditPendingUser, submitCreateUser, addWebUser, addEpecUser, getCustomerByNo, relateInvoiceByEpecOrg } = this.controller;
        let customerResult = await getCustomerByNo(customerNo);
        if (!customerResult) {
            this.createUserTip.set("客户CID不存在");
            return;
        };
        let param: any = { $type: "$user", name: username, pwd: password, mobile: mobile, email: useremail };
        let res = await submitCreateUser(param);
        if (res !== undefined) {
            if (res >= 0) {
                await addWebUser({id: res,
                    webUser: { firstName: firstName, gender: gender, salutation: Salutations[gender], organizationName: organizationName, departmentName: "-" }
                });
                let organizationIdFind = cEpec.epecOrganizations.find((el: any) => el && el.organizationName === organizationName);
                await addEpecUser({ ...data, webuser: res, organizationId: organizationIdFind?.organizationId });
                await auditPendingUser({ webuser: res, customerNo: customerNo, customerResult: customerResult });
                await relateInvoiceByEpecOrg({ webUser: res, organizationId: organizationIdFind?.organizationId });
                this.createUserTip.set("注册成功");
                setTimeout(() => this.closePage(), 3000);
            } else {
                this.createUserTip.set(noUserMessage[String(res)]);
            };
        } else {
            this.createUserTip.set("注册失败,请重新注册");
        };
    }

    private onSaveClick = async () => {
        if (!this.form) return;
        await this.form.buttonClick("submit");
    }
}