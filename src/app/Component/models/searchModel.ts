export class SearchModel {
	public q: string;

	constructor(data?: any) {
		data = data || {};
		this.q = data.q || '';

	}
}
