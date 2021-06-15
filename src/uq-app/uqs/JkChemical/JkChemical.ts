//=== UqApp builder created on Tue Jun 15 2021 17:12:09 GMT+0800 (China Standard Time) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqQuery, UqMap, UqID } from "tonva-react";


//===============================
//======= UQ 百灵威系统工程部/chemical ========
//===============================

export interface Tuid$user {
	name: string;
	nick: string;
	icon: string;
	assigned: string;
	poke: number;
}

export interface Tuid$sheet {
	no: string;
	user: number;
	date: any;
	sheet: number;
	version: number;
	flow: number;
	app: number;
	state: number;
	discription: string;
	data: string;
	processing: number;
}

export interface TuidChemical {
	no: number;
	CAS: string;
	description: string;
	descriptoinCN: string;
	molecularFomula: string;
	molecularWeight: number;
	mdlNumber: string;
}

export interface TuidStorageCondition {
	name: string;
	no: string;
}

export interface TuidJNKRestrict {
}

export interface ParamSearchChemical {
	key: string;
}
interface ReturnSearchChemical$page {
	id: number;
	no: number;
	CAS: string;
	description: string;
	descriptoinCN: string;
	molecularFomula: string;
	molecularWeight: number;
	mdlNumber: string;
	$id: number;
}
interface ResultSearchChemical {
	$page: ReturnSearchChemical$page[];
}

export interface Param$poked {
}
interface Return$pokedRet {
	poke: number;
	$id: number;
}
interface Result$poked {
	ret: Return$pokedRet[];
}

export interface $PiecewiseDetail {
	id?: number;
	parent: number;
	row?: number;
	sec: number;
	value: number;
}

export interface $Piecewise {
	id?: number;
	name: string;
	mul: number;
	div: number;
	offset: number;
	asc: number;
}

export interface ParamActs {
	$PiecewiseDetail?: $PiecewiseDetail[];
	$Piecewise?: $Piecewise[];
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	$user: UqTuid<Tuid$user>;
	$sheet: UqTuid<Tuid$sheet>;
	Chemical: UqTuid<TuidChemical>;
	StorageCondition: UqTuid<TuidStorageCondition>;
	JNKRestrict: UqTuid<TuidJNKRestrict>;
	SearchChemical: UqQuery<ParamSearchChemical, ResultSearchChemical>;
	$poked: UqQuery<Param$poked, Result$poked>;
	ChemicalJNKRestrict: UqMap;
	$PiecewiseDetail: UqID<any>;
	$Piecewise: UqID<any>;
}
