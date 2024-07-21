export default defineNuxtPlugin(async (nuxtApp) => {
	const auth = useAuthStore();

	try {
		await auth.fetchUser();
		navigateTo("/");
	} catch (error) {
		console.error(error);
		navigateTo("/login");
	}
});
