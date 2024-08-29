<template>
  <div class="table-container">
    <CustomTable :title="t('clientList.title')" fieldAsID="id_client" fieldAsActive="is_active" :columns="columns"
      :queryOptions="queryOptions" >
    <template #info>
      {{ model.description_client }}
    </template>
    <template #form>
      <FloatLabel>
        <InputText v-model="model.name_client" id="name" fluid></InputText>
        <label for="name"> {{ $t('clientForm.nameLabel') }}</label>
      </FloatLabel>
      <FloatLabel>
        <InputText v-model="model.address_client" id="address" fluid></InputText>
        <label for="address"> {{ $t('clientForm.addressLabel') }}</label>
      </FloatLabel>
      <FloatLabel>
        <InputText v-model="model.phone_client" id="phone" fluid></InputText>
        <label for="phone"> {{ $t('clientForm.phoneLabel') }}</label>
      </FloatLabel>
      <FloatLabel>
        <Textarea v-model="model.description_client" id="description" fluid></Textarea>
        <label for="phone"> {{ $t('clientForm.descriptionLabel') }}</label>
      </FloatLabel>
    </template>
    </CustomTable>
  </div>

</template>


<script setup lang="ts">
import { ref } from 'vue';
import CustomTable from '../../../../../assets/components/CustomTable.vue';
import { useClients } from '../../../../../composables/projectManager/useClients';
import { useI18n } from 'vue-i18n';
import { addClient, deleteClient, updateClient } from '../../../../../services/projectManager/client';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Textarea from 'primevue/textarea';
const { t } = useI18n()

const columns = [
  {
    field: 'name_client',
    header: t('clientList.nameColumn')
  },
  {
    field: 'address_client',
    header: 'Dirección'
  },
  {
    field: 'phone_client',
    header: 'Teléfono'
  },
  {
    field: 'description_client',
    header: 'Descripción'
  },
  {
    field: 'is_active',
    header: 'Activo'
  },

]
//

const model = ref({
  name_client: '',
  address_client: '',
  phone_client: '',
  description_client: '',
  is_active: true
})

const queryOptions = {
  queryFunction: useClients,
  addFunction:addClient,
  updateFunction: updateClient,
  deleteFunction: deleteClient,
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