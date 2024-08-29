<template>
  <div class="table-container">
    <CustomTable :title="t('categoryForm.legend')" fieldAsID="id_cg" fieldAsActive="is_active" :columns="columns"
      :queryOptions="queryOptions" >
    <template #form>
      <FloatLabel>
        <InputText v-model="model.name_cg" id="name" fluid></InputText>
        <label for="name"> {{ $t('categoryForm.name') }}</label>
      </FloatLabel>
      <FloatLabel>
        <InputNumber v-model="model.hourly_wage_cg" id="wage" showButtons :min=0 fluid></InputNumber>
        <label for="name"> {{ $t('categoryForm.hoursLabel') }}</label>
      </FloatLabel>
    </template>deletePayterm
    </CustomTable>
  </div>

</template>


<script setup lang="ts">
import { ref } from 'vue';
import CustomTable from '../../../../../assets/components/CustomTable.vue';
import { useI18n } from 'vue-i18n';
import FloatLabel from 'primevue/floatlabel';
import InputText  from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import { useCategories } from '../../../../../composables/humanResources/useCategories';
import { addCategory, deleteCategory, updateCategory } from '../../../../../services/humanResources/category';
const { t } = useI18n()

const columns = [
  {
    field: 'name_cg',
    header: t('workerList.categoryColumn')
  },
  {
    field: 'hourly_wage_cg',
    header: t('workerList.idColumn')
  },
  {
    field: 'is_active',
    header: 'Activo'
  },

]
//

const model = ref({
    name_cg: "",
    hourly_wage_cg: 0,
    is_active: true
})

const queryOptions = {
  queryFunction: useCategories,
  addFunction: addCategory,
  updateFunction: updateCategory,
  deleteFunction: deleteCategory,
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