import { $fetch, type FetchOptions } from "ofetch";

import CompaniesModule from "~/repository/modules/companies";

interface IApiInstance {
	companies: CompaniesModule;
}

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig();

	const fetchOptions: FetchOptions = {
		baseURL: config.public.apiBaseUrl,
	};

	const apiFetcher = $fetch.create(fetchOptions);

	const modules: IApiInstance = {
		companies: new CompaniesModule(apiFetcher),
	};

	return {
		provide: {
			api: modules,
		},
	};
});
