import { FA, List, LMR, VPage } from "tonva-react";
import { CEpec } from './CEpec';

export class VEpecOrganizationList extends VPage<CEpec> {
	header() { return '中石化单位'; }

	content() {
		let { openEpecOrganizationEdit } = this.controller;
		return <div>
			<List none="none" items={this.controller.epecOrganizations} item={{ render: this.renderEpecOrg, onClick: openEpecOrganizationEdit }} />
		</div>
	}

	private renderEpecOrg(item: any) {
		let { organizationName } = item;
		return <div className="p-2 d-block">
			<LMR right={<FA name="chevron-right" className="align-self-center" />} >
				{organizationName}
			</LMR>
		</div>
	}
}
