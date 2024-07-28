<template>
  <dialog id="editPlate" class="modal">
    <div class="modal-box">
      <form @submit.prevent="submitUpdate">
        <div class="mb-4">
          <label for="plate" class="block mb-2 text-sm font-bold text-gray-700">Placa</label>
          <input v-model="form.plate" type="text" id="plate" name="plate"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required pattern="^[A-Z]{3}-[0-9][0-9A-J][0-9][0-9]$">
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
  plateData: { type: Object, default: null },
  onUpdate: { type: Function, required: true }
})

let form = ref({
  plate: ''
})

watch(() => props.plateData, (newData) => {
  if (newData) {
    form.value.plate = newData.plate;
  }
}, { immediate: true })

const submitUpdate = () => {
  if (props.plateData) {
    const updatedPlate = { ...props.plateData, plate: form.value.plate };
    props.onUpdate(updatedPlate);
  }
}
</script>

<style></style>