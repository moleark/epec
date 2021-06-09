import { CUqBase } from "../../uq-app";
import { VUserList } from './VUserList';

export class CUser extends CUqBase {

    protected async internalStart() {

    }

    tab = () => this.renderView(VUserList);
}