<template>
  <div class="table-container">
    <CustomTable :title="t('workerList.title')" fieldAsID="id_em" fieldAsActive="is_active" :columns="columns"
      :queryOptions="queryOptions" >
    <template #info>
      <FloatLabel>Email</FloatLabel>
      {{ model.email_em }}
      <FloatLabel>Address</FloatLabel>
      {{ model.address_em }}
      <FloatLabel>Phone</FloatLabel>
      {{ model.phone_em }}
      <FloatLabel>Department:</FloatLabel>
      {{ model.department_em }}
      <FloatLabel>Account</FloatLabel>
      {{ model.num_account_em }}
    </template>
    <template #form>
      <FloatLabel>
        <InputText v-model="model.id_em" id="dni" fluid></InputText>
        <label for="name"> {{ $t('workerForm.dniLabel') }}</label>
      </FloatLabel>
      <FloatLabel>
        <InputText v-model="model.name_em" id="name" fluid></InputText>
        <label for="name"> {{ $t('workerForm.nameLabel') }}</label>
      </FloatLabel>
      <FloatLabel>
        <InputText v-model="model.address_em" id="address" fluid></InputText>
        <label for="address"> {{ $t('workerForm.addressLabel') }}</label>
      </FloatLabel>
      <FloatLabel>
        <InputText v-model="model.phone_em" id="phone" fluid></InputText>
        <label for="phone"> {{ $t('workerForm.phoneLabel') }}</label>
      </FloatLabel>
      <FloatLabel>
        <InputText v-model="model.email_em" id="email" fluid></InputText>
        <label for="email"> {{ $t('workerForm.emailLabel') }}</label>
      </FloatLabel>
      <FloatLabel>
        <InputText v-model="model.department_em" id="deparment" fluid></InputText>
        <label for="department"> {{ $t('workerForm.departmentLabel') }}</label>
      </FloatLabel>
      <FloatLabel>
        <Select v-model="model.num_account_em" id="category" fluid></Select>
        <label for="category"> {{ $t('workerForm.categoryLabel') }}</label>
      </FloatLabel>
    </template>deletePayterm
    </CustomTable>
  </div>

</template>


<script setup lang="ts">
import { ref } from 'vue';
import CustomTable from '../../../../../assets/components/CustomTable.vue';
import { useWorkers } from '../../../../../composables/humanResources/useWorkers';
import { useI18n } from 'vue-i18n';
import { addWorker, updateWorker, deleteWorker } from '../../../../../services/humanResources/worker';
import FloatLabel from 'primevue/floatlabel';
import InputText  from 'primevue/inputtext';
import Select from 'primevue/select';
const { t } = useI18n()

const columns = [
  {
    field: 'category_name',
    header: t('workerList.categoryColumn')
  },
  {
    field: 'id_em',
    header: t('workerList.idColumn')
  },
  {
    field: 'name_em',
    header: t('workerList.nameColumn')
  },
  {
    field: 'address_em',
    header: t('deadlineList.statusColumn')
  },
  {
    field: 'phone_em',
    header: t('deadlineList.statusColumn')
  },  
  {
    field: 'is_active',
    header: 'Activo'
  },

]
//

const model = ref({
    category_name: "",
    id_em: "",
    fk_id_cg: {},
    name_em: "",
    address_em: "",
    phone_em: "",
    email_em: "",
    department_em: "",
    num_account_em: "",
    is_active: true
})

const queryOptions = {
  queryFunction: useWorkers,
  addFunction: addWorker,
  updateFunction: updateWorker,
  deleteFunction: deleteWorker,
  model: model
}


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