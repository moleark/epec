import { observable } from "mobx";
import { ReturnSearchEpecUser$page } from "uq-app/uqs/JkPlatformjoint";
import { CUqBase } from "../../uq-app";
import { VUserList } from './VUserList';
import { VUserDetail } from './VUserDetail';

export class CUser extends CUqBase {

    @observable userList: ReturnSearchEpecUser$page[];

    protected async internalStart() {
    }

    getDefaultUsers = async () => {
        this.userList = await (await this.uqs.JkPlatformjoint.SearchEpecUser.page({ key: undefined }, 100000, 10)).$page;
    }

    tab = () => {
        // this.getDefaultUsers();
        return this.renderView(VUserList);
    }

    showUserDetail = (user: ReturnSearchEpecUser$page) => {
        this.openVPage(VUserDetail, user);
    }
}