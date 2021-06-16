import { FA, List, tv, VPage } from "tonva-react";
import { ReturnSearchEpecUser$page, ReturnSearchNeoTridentUser$page } from "uq-app/uqs/JkPlatformjoint";
import { CUser } from ".";

const NeoTridentOrganization: { [organization: string]: string } = {
    "1":"中国科学院上海药物研究所",
    "5":"中国科学院药物创新研究院中山研究院",
}

export class VUserList extends VPage<CUser> {

    header() { return 'user manage' }

    right() { return <span onClick={this.controller.openCreateUser}><FA name="plus-square-o" size="2x" className="cursor-pointer mr-3" /></span> }

    content() {
        return <div>
            {/* <List none="none" items={this.controller.userList} item={{ render: this.renderEpecUser, onClick: this.showDetail }} /> */}
            <List none="none" items={this.controller.userList2} item={{ render: this.renderNeotridentUser, className:"flex-column" /* onClick: this.showDetail */ }} />
        </div>
    }

    private renderEpecUser(item: ReturnSearchEpecUser$page) {

        let { webUser, username, organizationName, mobile, email } = item;
        return <div>
            {username}
            {organizationName}
            {tv(webUser)}
        </div>
    }

    private renderNeotridentUser(item: ReturnSearchNeoTridentUser$page) {

        let { webUser, username, organization } = item;
        let organizationName = NeoTridentOrganization[organization] || "";
        return <div className="p-2 flex-wrap">
            <div className="col-12 col-lg-6">用户名：{username}</div>
            {organizationName && <div className="col-12 col-lg-6">单位：{organizationName}</div>}
            <div className="col-12 col-lg-6">{tv(webUser)}</div>
        </div>
    }

    private showDetail = (item: ReturnSearchEpecUser$page) => {
        this.controller.showUserDetail(item);
    }
}