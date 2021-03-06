// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, setRes, TFunc, FieldItem, FieldItemNumber, FieldItemString, FieldItemId, UI } from "tonva-react";
import { TuidAuditPendingUserRefuseReason } from "./JkWebuser";

const resRaw: Res<any> = {
	$zh: {
	},
	$en: {
	}
};
const res: any = {};
setRes(res, resRaw);

export const t:TFunc = (str:string|JSX.Element): string|JSX.Element => {
	return res[str as string] ?? str;
}

export function render(item: TuidAuditPendingUserRefuseReason):JSX.Element {
	return <>{JSON.stringify(item)}</>;
};
