import { FA, List, tv, VPage } from "tonva-react";
import { ReturnSearchEpecUser$page, ReturnSearchNeoTridentUser$page } from "uq-app/uqs/JkPlatformjoint";
import { CUser } from ".";

export const NeoTridentOrganization: { [organization: string]: string } = {
    "1":"中国科学院上海药物研究所",
    "5":"中国科学院药物创新研究院中山研究院",
}

export class VUserList extends VPage<CUser> {

    header() { return 'user manage' }

    right() { return <span onClick={this.createUserClick}><FA name="plus-square-o" size="2x" className="cursor-pointer mr-3" /></span> }

    content() {
        return <div>
            <List none="none" items={this.controller.userListNotd} item={{ render: this.renderNeotridentUser, className:"flex-column" /* onClick: this.showDetail */ }} />
        </div>
    }

    private renderNeotridentUser(item: ReturnSearchNeoTridentUser$page) {

        let { webUser, username, organization } = item;
        let organizationName = NeoTridentOrganization[organization] || "";
        return <div className="px-2 py-3 flex-wrap">
            <div className="col-12 col-lg-6"><b>{username}</b></div>
            {organizationName && <div className="col-12 col-lg-6 small">{organizationName}</div>}
            <div className="col-12 col-lg-6">{tv(webUser, (v: any) => {
                if (!v) return <></>;
                return <div>
                    <div><span className="font-weight-bolder">{v?.firstName}</span> &nbsp;&nbsp;&nbsp;&nbsp;
                        <small>{v?.departmentName}</small></div>
                </div>
            })}</div>
        </div>
    }

    createUserClick = async () => {
        await this.controller.openCreateUser();
    }

    showDetail = (item: ReturnSearchEpecUser$page) => {
        this.controller.showUserDetail(item);
    }
}

export class VEpecUserList extends VUserList {

    content() {
        return <div>
            <List none="none" items={this.controller.userListEpec} item={{ render: this.renderEpecUser, /* onClick: this.showDetail */ }} />
        </div>
    }

    private renderEpecUser(item: ReturnSearchEpecUser$page) {

        let { webUser, username, organizationName, mobile, email } = item;
        return <div className="px-2 py-3 flex-wrap">
            <div className="col-12 col-lg-6"><b>{username}</b></div>
            {organizationName && <div className="col-12 col-lg-6 small">{organizationName}</div>}
            <div className="col-12 col-lg-6"><b>{mobile}</b></div>
            <div className="col-12 col-lg-6"><b>{email}</b></div>
            <div className="col-12 col-lg-6">{tv(webUser, (v: any) => {
                if (!v) return <></>;
                return <div>
                    <div><span className="font-weight-bolder">{v?.firstName}</span> &nbsp;&nbsp;&nbsp;&nbsp;
                        <small>{v?.departmentName}</small></div>
                </div>
            })}</div>
        </div>
    }

    createUserClick = async () => {
        await this.controller.openCreateEpecUser();
    }

    showDetail = (item: ReturnSearchEpecUser$page) => {
        this.controller.showUserDetail(item);
    }
}