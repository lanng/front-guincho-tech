<template>

  <div class="flex justify-center">
    <table class="table-md">
      <thead>
        <tr>
          <th id="id">ID</th>
          <th id="name">Nome do motorista</th>
          <th scope="col" colspan="2">Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="driver in driversList" :key="driver.id">
          <th id="id">{{ driver.id }}</th>
          <td id="name">{{ driver.name }}</td>
          <td><button class="font-bold btn btn-ghost" @click="openModal(driver)">
              Editar</button></td>
          <td><button class="font-bold btn btn-ghost" @click.prevent="handleDelete(driver.id)">Deletar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="error" class="text-error">{{ error.message }}</div>

  <div class="flex justify-center">
    <form @submit.prevent="handleStore">
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
  <EditDriverModal :driver-data="selectedDriver" :onUpdate="handleUpdate" />
</template>

<script setup lang="ts">
import auth from '~/middleware/auth';
import type { IDriver } from '~/repository/modules/drivers';

definePageMeta({
  layout: 'default',
  middleware: auth
})

let selectedDriver = ref<IDriver | any>(null);

const { $api } = useNuxtApp();

const form = ref({
  name: ''
})

const {
  data: driversList,
  error,
  refresh
} = await $api.drivers.getDrivers();

const handleStore = async () => {
  const log = await $api.drivers.storeDriver(form.value);
  console.log(log);
  refresh();
  form.value.name = "";
}

const handleDelete = async (id: number) => {
  const log = await $api.drivers.deleteDriver(id);
  console.log(log);
  refresh();
}

const openModal = (driverData: IDriver) => {
  selectedDriver.value = driverData;
  const modal = document.getElementById('editDriver') as HTMLDialogElement;
  modal.show();
}

const handleUpdate = async (updatedDriver: IDriver) => {
  const log = await $api.drivers.updateDriver(updatedDriver.id, updatedDriver);
  console.log(log);
  refresh();
  const modal = document.getElementById('editDriver') as HTMLDialogElement;
  modal.close();
}
</script>

<style></style>