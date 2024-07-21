<script lang="ts" setup>
import actions from '~/actions';
import type { LoginForm } from '~/actions/auth/login';
import guest from '~/middleware/guest';

definePageMeta({ layout: 'guest', middleware: guest });


const form = ref<LoginForm>({
  email: 'test@example.com',
  password: 'password',
});

const handleLogin = async () => {
  await actions.auth.login(form.value);
  navigateTo('/');
}

</script>

<template>

  <body class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 bg-white rounded shadow-lg">
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="email" class="block mb-2 text-sm font-bold text-gray-700">Email</label>
          <input v-model="form.email" type="email" id="email" name="email"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required>
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2 text-sm font-bold text-gray-700">Password</label>
          <input v-model="form.password" type="password" id="password" name="password"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required>
        </div>
        <div class="flex items-center justify-between">
          <button type="submit"
            class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
            Entrar
          </button>
        </div>
      </form>
    </div>
  </body>
</template>


<style></style>