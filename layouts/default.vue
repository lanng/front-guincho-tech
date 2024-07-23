<template>

  <head>
    <title>Guincho Tech</title>
  </head>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <button class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
        <ul class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a>Link1</a></li>
          <li><a>Link 2</a></li>
          <li><a>etc...</a></li>
          <li><a>etc...</a></li>
          <li><a>etc...</a></li>
          <li><a>etc...</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <div class="text-xl">Bem vindo {{ useAuthStore().user?.name }}!</div>
    </div>
    <div class="navbar-end">
      <div class="dropdown">
        <div class="hidden navbar-center lg:flex">
          <ul class="px-1 menu menu-horizontal">
            <li>
              <details>
                <summary>{{ useAuthStore().user?.name }}</summary>
                <ul class="p-2">
                  <li><a @click="handleLogout">Sair</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <slot />
</template>

<script lang="ts" setup>
import actions from '~/actions';


const handleLogout = async () => {
  await actions.auth.logout();
  navigateTo('/login');
}

</script>

<style></style>