
export function groupByProduct(packItems: any[]) {
    let result: any[] = [];
    for (let packItem of packItems) {
        let { product, pack, quantity, price, retail, currency } = packItem;
        let packRow: any = {
            pack: pack,
            price: price,
            retail: retail,
            quantity: quantity,
            currency: currency && currency.id
        }
        let cpi = { product: product, packs: [packRow] };
        result.push(cpi);
    }
    return result;
}