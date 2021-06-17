import { observable } from "mobx";
import { ReturnSearchEpecUser$page, ReturnSearchNeoTridentUser$page } from "uq-app/uqs/JkPlatformjoint";
import { CUqBase } from "../../uq-app";
import { VUserList } from './VUserList';
import { VUserDetail } from './VUserDetail';
import { VCreateUser } from "./VCreateUser";
import { GLOABLE } from "global";

export class CUser extends CUqBase {

    @observable userList: ReturnSearchEpecUser$page[];
    @observable userList2: ReturnSearchNeoTridentUser$page[];

    protected async internalStart() {
    }

    getDefaultUsers = async () => {
        this.userList2 = await (await this.uqs.JkPlatformjoint.SearchNeoTridentUser.page({ key: undefined }, 100000, 10)).$page;
        // this.userList = await (await this.uqs.JkPlatformjoint.SearchEpecUser.page({ key: undefined }, 100000, 10)).$page;
    }

    tab = () => {
        // this.getDefaultUsers();
        return this.renderView(VUserList);
    }

    showUserDetail = (user: ReturnSearchEpecUser$page) => {
        this.openVPage(VUserDetail, user);
    }

    openCreateUser = () => {
        this.openVPage(VCreateUser);
    }

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

    addWebUser = async (param: any) => {
        let { id, webUser } = param;
        await this.uqs.JkWebuser.WebUser.save(id, webUser);
    }

    addNeoTridentUser = async (param: any) => {
        let { id, organization, password, USERID, USERCODE, MD5ID } = param;
        await this.uqs.JkPlatformjoint.NeoTridentUser.add({
            webUser: id,
            sharedSecret: MD5ID,
            username: USERCODE,
            organization: organization,
            team: USERID,
            password: password
        });
    }
}