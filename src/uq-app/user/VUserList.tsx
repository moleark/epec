import { VPage } from "tonva-react";
import { CUser } from ".";

export class VUserList extends VPage<CUser> {

    header() { return 'user manage' }
    content() {
        return <div>
            user mana
        </div>
    }
}