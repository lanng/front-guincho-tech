<template>
  <dialog id="editDriver" class="modal">
    <div class="modal-box">
      <form @submit.prevent="submitUpdate">
        <div class="mb-4">
          <label for="name" class="block mb-2 text-sm font-bold text-gray-700">Nome do motorista</label>
          <input v-model="form.name" type="text" id="name" name="name"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required>
        </div>
        <div class="flex justify-end">
          <button type="submit"
            class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const props = defineProps({
  driverData: { type: Object, default: null },
  onUpdate: { type: Function, required: true }
})

let form = ref({
  name: ''
})

watch(() => props.driverData, (newData) => {
  if (newData) {
    form.value.name = newData.name;
  }
}, { immediate: true })

const submitUpdate = () => {
  if (props.driverData) {
    const updatedDriver = { ...props.driverData, name: form.value.name };
    props.onUpdate(updatedDriver);
  }
}
</script>

<style></style>