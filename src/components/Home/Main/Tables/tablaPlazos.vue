<template>
  <div class="table-container">
    <CustomTable :title="t('deadlineList.title')" fieldAsID="id_payterm" fieldAsActive="is_active" :columns="columns"
      :queryOptions="queryOptions" >
    <template #info>
      <p>Description:</p>
      {{ model.fk_id_ct.title_ct }}
      <p>Currency:</p>
      {{ model.fk_id_ct.manager_ct.name_em }}
      <p>Profit margin:</p>
      {{ model.fk_id_ct.fk_id_client.name_client }}
    </template>
    <template #form>
      <FloatLabel>
        <InputText v-model="model.fk_id_ct" id="name" fluid></InputText>
        <label for="name"> {{ $t('deadlineList.title') }}</label>
      </FloatLabel>
      <FloatLabel>
        <InputNumber v-model="model.due_month_payterm" id="address" showButtons :min=1 :max=12 fluid></InputNumber>
        <label for="address"> {{ $t('deadlineList.monthColumn') }}</label>
      </FloatLabel>
      <FloatLabel>
        <InputNumber v-model="model.due_year_payterm" id="description" showButtons :min="new Date().getFullYear()" fluid></InputNumber>
        <label fInputor="description"> {{ $t('deadlineList.yearColumn') }}</label>
      </FloatLabel>
      <FloatLabel>
        <InputText v-model="model.deliver" id="phone" fluid></InputText>
        <label for="phone"> {{ $t('deadlineForm.deliveryLabel') }}</label>
      </FloatLabel>
    </template>
    </CustomTable>
  </div>

</template>


<script setup lang="ts">
import { ref } from 'vue';
import CustomTable from '../../../../assets/components/CustomTable.vue';
import { usePayterm } from '../../../../composables/projectManager/usePayterm';
import { useI18n } from 'vue-i18n';
import { addPayterm, deletePayterm, updatePayterm } from '../../../../services/projectManager/payterm';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import { InputNumber } from 'ant-design-vue';
const { t } = useI18n()

const columns = [
  {
    field: 'contract_name',
    header: t('deadlineList.title')
  },
  {
    field: 'due_month_payterm',
    header: t('deadlineList.monthColumn')
  },
  {
    field: 'due_year_payterm',
    header: t('deadlineList.yearColumn')
  },
  {
    field: 'deliver',
    header: t('deadlineForm.deliveryLabel')
  },
  {
    field: 'is_billed',
    header: t('deadlineList.statusColumn')
  },
  {
    field: 'is_active',
    header: 'Activo'
  },

]
//

const model = ref({
    contract_name: "",
    fk_id_ct: {},
    due_month_payterm: 0,
    due_year_payterm: 0,
    deliver: "",
    is_billed: false,
    is_active: true
})

const queryOptions = {
  queryFunction: usePayterm,
  addFunction:addPayterm,
  updateFunction: updatePayterm,
  deleteFunction: deletePayterm,
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