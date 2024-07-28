<template>

  <div class="flex justify-center">
    <table class="table-md">
      <thead>
        <tr>
          <th id="id">ID</th>
          <th id="plate">placa</th>
          <th scope="col" colspan="2">Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="plate in platesList" :key="plate.id">
          <th id="id">{{ plate.id }}</th>
          <td id="plate">{{ plate.plate }}</td>
          <td><button class="font-bold btn btn-ghost" @click="openModal(plate)">
              Editar</button></td>
          <td><button class="font-bold btn btn-ghost" @click.prevent="handleDelete(plate.id)">Deletar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="error" class="text-error">{{ error.message }}</div>

  <div class="flex justify-center">
    <form @submit.prevent="handleStore">
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
  <EditPlateModal :plate-data="selectedplate" :onUpdate="handleUpdate" />
</template>

<script setup lang="ts">
import auth from '~/middleware/auth';
import type { IPlate } from '~/repository/modules/plates';

definePageMeta({
  layout: 'default',
  middleware: auth
})

let selectedplate = ref<IPlate | any>(null);

const { $api } = useNuxtApp();

const form = ref({
  plate: ''
})

const {
  data: platesList,
  error,
  refresh
} = await $api.plates.getPlates();

const handleStore = async () => {
  const log = await $api.plates.storePlate(form.value);
  console.log(log);
  refresh();
  form.value.plate = "";
}

const handleDelete = async (id: number) => {
  const log = await $api.plates.deletePlate(id);
  console.log(log);
  refresh();
}

const openModal = (plateData: IPlate) => {
  selectedplate.value = plateData;
  const modal = document.getElementById('editPlate') as HTMLDialogElement;
  modal.show();
}

const handleUpdate = async (updatedPlate: IPlate) => {
  const log = await $api.plates.updatePlate(updatedPlate.id, updatedPlate);
  console.log(log);
  refresh();
  const modal = document.getElementById('editPlate') as HTMLDialogElement;
  modal.close();
}
</script>

<style></style>