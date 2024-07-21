<script lang="ts" setup>
import guest from '~/middleware/guest';

definePageMeta({ layout: 'guest', middleware: guest });
</script>

<template>
  <div>
    Register Page
  </div>
</template>


<style></style>