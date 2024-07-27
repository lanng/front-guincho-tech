<template>
  <div class="flex justify-center text-black">Autenticado!</div>
</template>

<script setup lang="ts">
import auth from '~/middleware/auth';

definePageMeta({
  layout: 'default',
  middleware: auth
})

</script>

<style></style>