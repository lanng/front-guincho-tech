import type { User } from "~/actions/auth/fetchUser";

export const useAuthStore = defineStore("auth", () => {
	const user = ref<User | null>();
	const isLoggedIn = computed(() => !!user.value);
	const isAdmin = computed(() => user.value?.role == 2);
	const setUser = (newUser: User | null) => (user.value = newUser);

	return { setUser, user, isLoggedIn, isAdmin };
});
