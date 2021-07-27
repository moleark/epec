import { makeObservable, observable } from "mobx";
import _ from 'lodash';
import { autoHideTips, LMR, VPage } from "tonva-react";
import { COrder } from './COrder';

export class VCommonA extends VPage<COrder> {
    protected headerTitle: string | JSX.Element = "page";
    protected searchTitle: string | JSX.Element = "查询";
    protected searchInput: HTMLInputElement;
    protected reasonDesc: HTMLTextAreaElement;
    protected searchTip = observable.box<string>("");
    protected reasonTip = observable.box<string>("");
    protected successTip = observable.box<string>("");

    get searchVal() { return this.searchInput?.value; };
    get reasonVal() { return this.reasonDesc?.value; };

    @observable dataInfo: any;

    constructor(res: any) {
        super(res);
        makeObservable(this, {
            dataInfo: observable,
        });
    }

    header() { return this.headerTitle; }
    content() { return <></> };
    footer() { return <></> };

    searchInputUI = (option?: any) => {
        option = _.assign({ placeholder: "请输入内容" }, option);
        let { placeholder } = option;
        let searchBtn = <button onClick={this.searchData} className="btn btn-primary">{this.searchTitle}</button>;
        return <>
            <LMR right={searchBtn} >
                <form onSubmit={(e: any) => { e.preventDefault(); this.searchData(); }}>
                    <input ref={(v) => this.searchInput = v} placeholder={placeholder} type="text" className="form-control" />
                </form>
            </LMR>
            {autoHideTips(this.searchTip, () => <small className="small text-danger">*{this.searchTip.get()}</small>)}
        </>;
    }

    reasonTxaUI = (option?: any) => {
        option = _.assign({ placeholder: "请输入内容" }, option);
        let { placeholder } = option;
        return <>
            <textarea ref={(v) => this.reasonDesc = v} className="w-100 px-2" placeholder={placeholder} rows={3} ></textarea>
            {autoHideTips(this.reasonTip, () => <small className="small text-danger">*{this.reasonTip.get()}</small>)}
        </>;
    }

    searchData = async () => {
        let value = this.searchInput?.value;
        if (!value) { this.searchTip.set("不可为空"); return; };
        await this.searchData2(value);
    };

    searchData2 = async (value?: any) => { console.log('value', value) };

}