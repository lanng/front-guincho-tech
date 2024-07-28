import { $fetch, type FetchOptions } from "ofetch";

import CompaniesModule from "~/repository/modules/companies";
import DriversModule from "~/repository/modules/drivers";

interface IApiInstance {
	companies: CompaniesModule;
	drivers: DriversModule;
}

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig();

	const fetchOptions: FetchOptions = {
		baseURL: config.public.apiBaseUrl,
	};

	const apiFetcher = $fetch.create(fetchOptions);

	const modules: IApiInstance = {
		companies: new CompaniesModule(apiFetcher),
		drivers: new DriversModule(apiFetcher),
	};

	return {
		provide: {
			api: modules,
		},
	};
});
