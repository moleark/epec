import { List, tv, VPage } from "tonva-react";
import { ReturnSearchEpecUser$page } from "uq-app/uqs/JkPlatformjoint";
import { CUser } from ".";

export class VUserList extends VPage<CUser> {

    header() { return 'user manage' }
    content() {
        return <div>
            <List none="none" items={this.controller.userList} item={{ render: this.renderEpecUser, onClick: this.showDetail }} />
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

    private showDetail = (item: ReturnSearchEpecUser$page) => {
        this.controller.showUserDetail(item);
    }
}