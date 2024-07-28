import type { FetchOptions } from "ofetch";
import type { AsyncDataOptions } from "#app";

import FetchFactory from "../factory";

export type IPlate = {
	id: number;
	plate: string;
};

class PlatesModule extends FetchFactory<IPlate[]> {
	private RESOURCE = "/api/plates";

	async getPlates(asyncDataOptions?: AsyncDataOptions<IPlate[]>) {
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

	async storePlate(
		body: object,
		asyncDataOptions?: AsyncDataOptions<IPlate[]>
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

	async updatePlate(
		id: number,
		body: object,
		asyncDataOptions?: AsyncDataOptions<IPlate[]>
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

	async deletePlate(id: number, asyncDataOptions?: AsyncDataOptions<IPlate[]>) {
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

export default PlatesModule;
