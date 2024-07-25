import type { $Fetch, FetchOptions } from "ofetch";

class FetchFactory<T> {
	private $fetch: $Fetch;

	constructor(fetcher: $Fetch) {
		this.$fetch = fetcher;
	}

	private getToken(): string | null {
		const token = useCookie("XSRF-TOKEN");
		return token.value ? (token.value as string) : null;
	}

	async call(
		method: string,
		url: string,
		data?: object,
		fetchOptions?: FetchOptions<"json">
	): Promise<T> {
		const token: any = this.getToken();
		const headers: any = {
			...fetchOptions?.headers,
		};
		if (token) {
			headers["X-XSRF-TOKEN"] = token;
		}

		return this.$fetch<T>(url, {
			credentials: "include",
			method,
			body: data,
			...fetchOptions,
			headers,
		});
	}
}

export default FetchFactory;
