<template>
  <div class="table-container">
    <CustomTable :title="t('contractForm.legend')" fieldAsID="id_ct" fieldAsActive="is_active" :columns="columns"
      :queryOptions="queryOptions">
      <template #info>
        <p>Description:</p>
        {{ model.description_ct }}
        <p>Currency:</p>
        {{ model.currency_ct }}
        <p>Profit margin:</p>
        {{ model.profit_margin }}
      </template>
      <template #form>
        <FloatLabel>
          <InputText v-model="model.title_ct" id="name" fluid></InputText>
          <label for="name"> {{ $t('contractForm.legend') }}</label>
        </FloatLabel>
        <FloatLabel>
          <InputText v-model="model.manager_name" id="address" fluid></InputText>
          <label for="address"> {{ $t('contractForm.addressLabel') }}</label>
        </FloatLabel>
        <FloatLabel>
          <InputText v-model="model.client_name" id="description" fluid></InputText>
          <label for="description"> {{ $t('contractForm.descriptionLabel') }}</label>
        </FloatLabel>
        <FloatLabel>
          <InputText v-model="model.start_ct" fluid></InputText>
          <label for="phone"> {{ $t('contractForm.phoneLabel') }}</label>
        </FloatLabel>
        <FloatLabel>
          <InputText v-model="model.end_ct" fluid></InputText>
          <label for="phone"> {{ $t('contractForm.phoneLabel') }}</label>
        </FloatLabel>
        <FloatLabel>
          <InputText v-model="model.resolution_ct" fluid></InputText>
          <label for="phone"> {{ $t('contractForm.phoneLabel') }}</label>
        </FloatLabel>
        <FloatLabel>
          <InputText v-model="model.description_ct" fluid></InputText>
          <label for="phone"> {{ $t('contractForm.phoneLabel') }}</label>
        </FloatLabel>
        <FloatLabel>
          <InputText v-model="model.work_area_ct" fluid></InputText>
          <label for="phone"> {{ $t('contractForm.phoneLabel') }}</label>
        </FloatLabel>
        <FloatLabel>
          <InputText v-model="model.profit_margin" fluid></InputText>
          <label for="phone"> {{ $t('contractForm.phoneLabel') }}</label>
        </FloatLabel>
        <FloatLabel>
          <InputText v-model="model.currency_ct" fluid></InputText>
          <label for="phone"> {{ $t('contractForm.phoneLabel') }}</label>
        </FloatLabel>
        
        <Select v-model="model.fk_id_client" :options="clients.data.value" optionLabel="name_client" class="w-full md:w-56"/>
        <Select v-model="model.manager_ct" :options="employees" optionLabel="name_em" class="w-full md:w-56"/>
      </template>
    </CustomTable>
  </div>

  <p>{{ clients.data }}</p>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import CustomTable from '../../../../../assets/components/CustomTable.vue';
import { useContract } from '../../../../../composables/projectManager/useContracts';
import { useI18n } from 'vue-i18n';
import { addContract, deleteContract, updateContract } from '../../../../../services/projectManager/contract';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import { sendRequest } from '../../../../../utils/sendRequest';
import { useClients } from '../../../../../composables/projectManager/useClients';
const { t } = useI18n()

const columns = [
  {
    field: 'title_ct',
    header: t('contractList.title')
  },
  {
    field: 'manager_name',
    header: 'Manager'
  },
  {
    field: 'client_name',
    header: 'Cliente'
  },
  {
    field: 'start_ct',
    header: 'Inicio Contrato'
  },
  {
    field: 'end_ct',
    header: 'Fin Contrato'
  },
  {
    field: 'resolution_ct',
    header: 'Resolución Contrato'
  },
  {
    field: 'work_area_ct',
    header: 'Area del Contrato'
  },
  {
    field: 'is_active',
    header: 'Activo'
  },

]
//

const model = ref({
  title_ct: "",
  manager_name: "",
  client_name: "",
  manager_ct: {},
  fk_id_client: {},
  start_ct: "",
  end_ct: "",
  resolution_ct: "",
  description_ct: "",
  work_area_ct: "",
  profit_margin: "",
  currency_ct: "",
  is_active: true
})

const queryOptions = {
  queryFunction: useContract,
  addFunction: addContract,
  updateFunction: updateContract,
  deleteFunction: deleteContract,
  model: model
}

const clients = useClients();
const employees = ref([]);
(async () => {
  employees.value = await sendRequest({
    url: '/ceta/employee'
  })
})()
</script>


<style scoped>
.table-container {
  margin-bottom: 2rem;
  width: 80%;
  margin: 0 auto;
  /* Centramos el contenedor de la tabla */
}

.filters-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.filter-input,
.filter-select,
.boton {
  flex-grow: 1;
  /* Hace que los inputs crezcan para ocupar el espacio disponible */
  margin-right: 0.5rem;
  /* Espacio entre los inputs */
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.boton {
  background-color: #007bff;
  color: white;
}


.styled-table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 4px 6px rgba(0, 0, 0.1);
}

.styled-table th,
.styled-table td {
  text-align: left;
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.styled-table tr:nth-child(even) {
  background-color: rgb(215, 225, 243);
}

.styled-table th {
  background-color: #007bff;
  color: white;
  font-weight: bold;
}

.action-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
  font-size: 1.2rem;
  border-radius: 5px;
}

.delete {
  color: red;
}

.edit {
  color: blue;
}

.view {
  color: green;
}

input[type="text"]:focus,
select:focus {
  outline: none;
  border-color: var(--primary-color);
}
</style>