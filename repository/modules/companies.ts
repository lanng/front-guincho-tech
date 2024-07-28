import type { FetchOptions } from "ofetch";
import type { AsyncDataOptions } from "#app";

import FetchFactory from "../factory";

export type ICompany = {
	id: number;
	name: string;
};

class CompaniesModule extends FetchFactory<ICompany[]> {
	private RESOURCE = "/api/companies";

	async getCompanies(asyncDataOptions?: AsyncDataOptions<ICompany[]>) {
		return useAsyncData(() => {
			const fetchOptions: FetchOptions<"json"> = {
				headers: {
					"Accept-Language": "en-US",
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			};
			return this.call("GET", `${this.RESOURCE}`, undefined, fetchOptions);
		}, asyncDataOptions);
	}

	async storeCompany(
		body: object,
		asyncDataOptions?: AsyncDataOptions<ICompany[]>
	) {
		return useAsyncData(() => {
			const fetchOptions: FetchOptions<"json"> = {
				headers: {
					"Accept-Language": "en-US",
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			};
			return this.call("POST", `${this.RESOURCE}`, body, fetchOptions);
		}, asyncDataOptions);
	}

	async updateCompany(
		id: number,
		body: object,
		asyncDataOptions?: AsyncDataOptions<ICompany[]>
	) {
		return useAsyncData(() => {
			const fetchOptions: FetchOptions<"json"> = {
				headers: {
					"Accept-Language": "en-US",
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			};
			return this.call("PATCH", `${this.RESOURCE}/${id}`, body, fetchOptions);
		}, asyncDataOptions);
	}

	async deleteCompany(
		id: number,
		asyncDataOptions?: AsyncDataOptions<ICompany[]>
	) {
		return useAsyncData(() => {
			const fetchOptions: FetchOptions<"json"> = {
				headers: {
					"Accept-Language": "en-US",
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			};
			return this.call(
				"DELETE",
				`${this.RESOURCE}/${id}`,
				undefined,
				fetchOptions
			);
		}, asyncDataOptions);
	}
}

export default CompaniesModule;
