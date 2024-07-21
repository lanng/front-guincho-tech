<template>
  <div class="text-blue-400">Autenticado!</div>
  <button class="btn btn-info" @click="handleLogout">Sair</button>
</template>

<script setup lang="ts">
import actions from '~/actions';
import auth from '~/middleware/auth';

definePageMeta({
  layout: 'default',
  middleware: auth
})

const handleLogout = async () => {
  await actions.auth.logout();
  navigateTo('/login');
}

</script>

<style></style>