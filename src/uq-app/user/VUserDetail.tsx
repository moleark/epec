import { List, tv, VPage } from "tonva-react";
import { ReturnSearchEpecUser$page } from "uq-app/uqs/JkPlatformjoint";
import { CUser } from ".";

export class VUserDetail extends VPage<CUser>{

    private user: ReturnSearchEpecUser$page;
    init(param: ReturnSearchEpecUser$page) {
        this.user = param;
    }

    header() { return 'detail' };

    content() {
        return <div>{this.user.username}</div>
    }
}