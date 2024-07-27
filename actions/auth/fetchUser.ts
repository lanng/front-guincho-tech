import { useGet } from "~/composables/useApi";

export interface User {
	id: number;
	name: string;
	email: string;
	role: number;
}

export async function fetchUser() {
	const user = await useGet("/api/user");
	useAuthStore().setUser(user.data.value as User);
}
