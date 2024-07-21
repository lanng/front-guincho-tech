<template>
  <div class="text-blue-400">Autenticado!</div>
  <button class="btn btn-info" @click="handleLogout">Sair</button>
</template>

<script setup lang="ts">
import auth from '~/middleware/auth';

definePageMeta({
  layout: 'default',
  middleware: auth
})

const authStore = useAuthStore();

const handleLogout = async () => {
  await authStore.logout();
  navigateTo('/login');
}

</script>

<style></style>