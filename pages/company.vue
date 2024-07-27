<template>

  <div class="flex justify-center">
    <table class="table-md">
      <thead>
        <tr>
          <th id="id">ID</th>
          <th id="name">Nome da empresa</th>
          <th scope="options" colspan="2">Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="company in companiesList" :key="company.id">
          <th id="id">{{ company.id }}</th>
          <td id="name">{{ company.name }}</td>
          <td><button class="font-bold btn btn-ghost" @click="openModal(company)">
              Editar</button></td>
          <td><button class="font-bold btn btn-ghost" @click.prevent="handleDelete(company.id)">Deletar</button></td>
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
  <EditCompanyModal :company-data="selectedCompany" :onUpdate="handleUpdate" />
</template>

<script setup lang="ts">
import { EditCompanyModal } from '#components';
import auth from '~/middleware/auth';
import type { ICompany } from '~/repository/modules/companies';

definePageMeta({
  layout: 'default',
  middleware: auth
})

let selectedCompany = ref<ICompany | any>(null);

const { $api } = useNuxtApp();

const form = ref({
  name: ''
})

const {
  data: companiesList,
  error,
  refresh
} = await $api.companies.getCompanies();

const handleStore = async () => {
  const log = await $api.companies.storeCompany(form.value);
  console.log(log);
  refresh();
  form.value.name = "";
}

const handleDelete = async (id: number) => {
  const log = await $api.companies.deleteCompany(id);
  console.log(log);
  refresh();
}

const openModal = (companyData: ICompany) => {
  selectedCompany.value = companyData;
  const modal = document.getElementById('editCompany') as HTMLDialogElement;
  modal.show();
}

const handleUpdate = async (updatedCompany: ICompany) => {
  const log = await $api.companies.updateCompany(updatedCompany, updatedCompany.id);
  console.log(log);
  refresh();
  const modal = document.getElementById('editCompany') as HTMLDialogElement;
  modal.close();
}
</script>

<style></style>