import * as React from 'react';
import { makeObservable, observable } from "mobx";
import { observer } from 'mobx-react';
import { VPage, LMR, autoHideTips, Form, Schema, UiSchema, UiInputItem, UiSelect, Context, UiRadio } from 'tonva-react';
import { CUser } from ".";
import { NeoTridentOrganization } from './VUserList';

const noUserMessage: { [id: string]: string } = {
    "-1": "id与name不匹配",
    "-2": "email已被使用",
    "-3": "手机号已被使用",
    "-4": "微信已被使用",
};

const Salutations: { [gender: string]: string } = {
    "1": "先生",
    "0": "女士",
};

const schema: Schema = [
    { name: 'USERNAME', type: 'string', required: false },
    { name: 'gender', type: 'string', required: false },
    { name: 'USERCODE', type: 'string', required: true },
    { name: 'USEREMAIL', type: 'id', required: true },
    { name: 'password', type: 'string', required: true },
    { name: 'mobile', type: 'string', required: false },
    { name: 'organization', type: 'number', required: true },
];

const uiSchema: UiSchema = {
    items: {
        USERNAME: { widget: 'text', label: '用户' } as UiInputItem,
        gender: { widget: 'radio', label: '性别', list: [{ value: '1', title: '男' }, { value: '0', title: '女' }] } as UiRadio,
        USERCODE: { widget: 'text', label: '用户名', disabled: true } as UiInputItem,
        USEREMAIL: { widget: 'text', label: '邮箱', disabled: true } as UiInputItem,
        password: { widget: 'text', label: '密码', defaultValue:"123456" } as UiInputItem,
        organization: {
            widget: 'select', label: '单位',
            list: [{ value: "", title: "请选择单位" },{ value: 1, title: "中国科学院上海药物研究所" }, { value: 5, title: "中国科学院药物创新研究院中山研究院" }]
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
        submit: { widget: 'button', label: '提交' },
    }
}

export class VCreateUser extends VPage<CUser>{
    private form: Form;
    searchUsernameTip = observable.box<string>(""); /* 查询 用户名检索信息 */
    createUserTip = observable.box<string>("");     /* 提交 创建用户提示 */
    searchUsernameInput: HTMLInputElement;          /* 关键字：用户名 */
    userInfoByKey: any;     /* 用户信息 */

    constructor(res: any) {
		super(res);
		makeObservable(this,{
			userInfoByKey: observable,
		});
	}

    header() { return 'create' };

    footer() {
        return React.createElement(observer(() => {
            if (!this.userInfoByKey) return <div></div>;
            return <div className="text-center">
                {autoHideTips(this.createUserTip, <div className="alert alert-success text-danger" role="alert"> {this.createUserTip.get()}</div>)}
                <button onClick={this.onSaveClick} className="btn btn-success w-50" type="button">添加客户</button>
            </div>
        }));
    }

    content() {
        return React.createElement(observer(() => {
            let selectOrganiza: JSX.Element;
            if (this.userInfoByKey) {
                selectOrganiza =  <Form ref={v => this.form = v} className="my-3"
                    schema={schema}
                    uiSchema={uiSchema}
                    formData={this.userInfoByKey}
                    onButtonClick={this.onFormButtonClick}
                    fieldLabelSize={3} />
            };
            return <div className="p-2">
                <LMR right={<button onClick={this.searchNeotrident} className="btn btn-primary" type="button">查询</button>}>
                    <input ref={(v) => this.searchUsernameInput = v} placeholder="请输入用户名" type="text" className="form-control" />
                </LMR>
                {autoHideTips(this.searchUsernameTip, <div className="text-danger" role="alert"> {this.searchUsernameTip.get()}</div>)}
                {selectOrganiza}
            </div>
        }));
    }

    searchNeotrident = async () => {
        if (!this.searchUsernameInput?.value) {
            this.searchUsernameTip.set("*请输入用户名"); return;
        };
        let { searchNeotrident } = this.controller;
        let value: string = this.searchUsernameInput.value;
        this.userInfoByKey = await searchNeotrident(value.trim());
        if (!this.userInfoByKey) {
            this.searchUsernameTip.set("用户名不存在或输入有误");
        } else {
            if (!this.userInfoByKey.success) {
                this.searchUsernameTip.set("请稍后再试");
            };
        };
    };

    private onFormButtonClick = async (name: string, context: Context) => {
        let { form } = context;
        let { data } = form;
        let { USERNAME, mobile, organization, password, gender } = data;
        if (!organization) {
            this.createUserTip.set("请选择单位"); return;
        };
        let { submitCreateUser, addWebUser, addNeoTridentUser } = this.controller;
        let { USERCODE, USEREMAIL } = this.userInfoByKey;
        let param: any = {
            $type: "$user",
            name: USERCODE,
            pwd: password,
            mobile: mobile,
            email: USEREMAIL,
        };
        let res = await submitCreateUser(param);
        if (res !== undefined) {
            if (res >= 0) {
                await addWebUser({id: res,
                    webUser: {
                        firstName: USERNAME,
                        gender: gender,
                        salutation: Salutations[String(gender)],
                        organizationName: NeoTridentOrganization[String(organization)],
                        departmentName: "-",
                    }
                });
                await addNeoTridentUser({ ...this.userInfoByKey, id: res, organization: organization, password: password });
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