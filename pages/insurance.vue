<template>

  <div class="flex justify-center">
    <table class="table-md">
      <thead>
        <tr>
          <th id="id">ID</th>
          <th id="name">Nome da Seguradora</th>
          <th scope="col" colspan="2">Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="insurance in insurancesList" :key="insurance.id">
          <th id="id">{{ insurance.id }}</th>
          <td id="name">{{ insurance.name }}</td>
          <td><button class="font-bold btn btn-ghost" @click="openModal(insurance)">
              Editar</button></td>
          <td><button class="font-bold btn btn-ghost" @click.prevent="handleDelete(insurance.id)">Deletar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="error" class="text-error">{{ error.message }}</div>

  <div class="flex justify-center">
    <form @submit.prevent="handleStore">
      <div class="mb-4">
        <label for="name" class="block mb-2 text-sm font-bold text-gray-700">Nome da empresa</label>
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
  <EditInsuranceModal :insurance-data="selectedInsurance" :onUpdate="handleUpdate" />
</template>

<script setup lang="ts">
import auth from '~/middleware/auth';
import type { IInsurance } from '~/repository/modules/Insurances';

definePageMeta({
  layout: 'default',
  middleware: auth
})

let selectedInsurance = ref<IInsurance | any>(null);

const { $api } = useNuxtApp();

const form = ref({
  name: ''
})

const {
  data: insurancesList,
  error,
  refresh
} = await $api.insurances.getInsurances();

const handleStore = async () => {
  const log = await $api.insurances.storeInsurance(form.value);
  console.log(log);
  refresh();
  form.value.name = "";
}

const handleDelete = async (id: number) => {
  const log = await $api.insurances.deleteInsurance(id);
  console.log(log);
  refresh();
}

const openModal = (insuranceData: IInsurance) => {
  selectedInsurance.value = insuranceData;
  const modal = document.getElementById('editInsurance') as HTMLDialogElement;
  modal.show();
}

const handleUpdate = async (updatedInsurance: IInsurance) => {
  const log = await $api.insurances.updateInsurance(updatedInsurance.id, updatedInsurance);
  console.log(log);
  refresh();
  const modal = document.getElementById('editInsurance') as HTMLDialogElement;
  modal.close();
}
</script>

<style></style>