import { CUqBase } from 'uq-app';
import { VInCart } from './VInCart';

export class CProduct extends CUqBase {

    protected async internalStart(param?: any) { }

    renderCartProduct = (product: any) => {
        return this.renderView(VInCart, product);
    }
}
