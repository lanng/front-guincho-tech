import { $fetch, type FetchOptions } from "ofetch";

import CompaniesModule from "~/repository/modules/companies";
import DriversModule from "~/repository/modules/drivers";
import InsurancesModule from "~/repository/modules/Insurances";
import PlatesModule from "~/repository/modules/plates";

interface IApiInstance {
	companies: CompaniesModule;
	drivers: DriversModule;
	plates: PlatesModule;
	insurances: InsurancesModule;
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
		plates: new PlatesModule(apiFetcher),
		insurances: new InsurancesModule(apiFetcher),
	};

	return {
		provide: {
			api: modules,
		},
	};
});
