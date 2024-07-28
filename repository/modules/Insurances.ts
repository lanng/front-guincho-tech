import type { FetchOptions } from "ofetch";
import type { AsyncDataOptions } from "#app";

import FetchFactory from "../factory";

export type IInsurance = {
	id: number;
	name: string;
};

class InsurancesModule extends FetchFactory<IInsurance[]> {
	private RESOURCE = "/api/insurances";

	async getInsurances(asyncDataOptions?: AsyncDataOptions<IInsurance[]>) {
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

	async storeInsurance(
		body: object,
		asyncDataOptions?: AsyncDataOptions<IInsurance[]>
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

	async updateInsurance(
		id: number,
		body: object,
		asyncDataOptions?: AsyncDataOptions<IInsurance[]>
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

	async deleteInsurance(
		id: number,
		asyncDataOptions?: AsyncDataOptions<IInsurance[]>
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

export default InsurancesModule;
