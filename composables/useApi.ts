import type { UseFetchOptions } from "#app";

export function useBaseApi<T>(path: string, options: UseFetchOptions<T> = {}) {
	let headers: any = {};
	const token: any = useCookie("XSRF-TOKEN");
	if (token.value) {
		headers["X-XSRF-TOKEN"] = token.value as string;
	}

	return useFetch("http://localhost:8000" + path, {
		credentials: "include",
		watch: false,
		...options,
		headers: {
			...headers,
			...options?.headers,
		},
	});
}

export async function useApi<T>(
	path: string,
	options: UseFetchOptions<T> = {}
) {
	const token: any = useCookie("XSRF-TOKEN");
	if (!token.value) {
		await useBaseApi("/sanctum/csrf-token");
	}
	return useBaseApi(path, options);
}

export async function useGet<T>(
	path: string,
	options: UseFetchOptions<T> = {}
) {
	return await useApi(path, {
		method: "GET",
		...options,
	});
}

export async function usePost<T>(
	path: string,
	options: UseFetchOptions<T> = {}
) {
	return await useApi(path, {
		method: "POST",
		...options,
	});
}

export async function usePut<T>(
	path: string,
	options: UseFetchOptions<T> = {}
) {
	return await useApi(path, {
		method: "PUT",
		...options,
	});
}

export async function useDelete<T>(
	path: string,
	options: UseFetchOptions<T> = {}
) {
	return await useApi(path, {
		method: "DELETE",
		...options,
	});
}
