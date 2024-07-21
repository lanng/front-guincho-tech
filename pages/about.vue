<template>
  <div>
    About Page
  </div>
</template>

<script lang="ts" setup>
import auth from '~/middleware/auth';

definePageMeta({
  layout: 'default',
  middleware: auth
})
</script>

<style></style>