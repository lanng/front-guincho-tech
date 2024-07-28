import type { FetchOptions } from "ofetch";
import type { AsyncDataOptions } from "#app";

import FetchFactory from "../factory";

export type IDriver = {
	id: number;
	name: string;
};

class DriversModule extends FetchFactory<IDriver[]> {
	private RESOURCE = "/api/drivers";

	async getDrivers(asyncDataOptions?: AsyncDataOptions<IDriver[]>) {
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

	async storeDriver(
		body: object,
		asyncDataOptions?: AsyncDataOptions<IDriver[]>
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

	async updateDriver(
		id: number,
		body: object,
		asyncDataOptions?: AsyncDataOptions<IDriver[]>
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

	async deleteDriver(
		id: number,
		asyncDataOptions?: AsyncDataOptions<IDriver[]>
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

export default DriversModule;
