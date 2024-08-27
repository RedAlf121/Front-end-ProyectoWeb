<template>
  <div class="table-container">
    <h2>{{$t('remunerationList.title')}}</h2>
    <div class="filters-container">
      <input type="text" v-model="filterContract" placeholder="{{$t('remunerationList.filterContractPlaceholder')}}" class="filter-input">
      <select v-model="filterMonth" class="filter-select">
        <option value="">{{$t('remunerationList.allOption')}}</option>
        <!-- Opciones de meses -->
      </select>
    </div>
    <table class="styled-table">
      <thead>
        <tr>
          <th>{{$t('remunerationList.contractColumn')}}</th>
          <th>{{$t('remunerationList.invoiceMonthColumn')}}</th>
          <th>{{$t('remunerationList.remunerationDateColumn')}}</th>
          <th>{{$t('remunerationList.totalRemuneratedColumn')}}</th>
          <th>{{$t('remunerationList.actionsColumn')}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filteredItems" :key="index">
          <td>{{ item.contrato }}</td>
          <td>{{ item.mesFacturacion }}</td>
          <td>{{ item.fechaRemuneracion }}</td>
          <td>{{ item.totalRemunerado }}</td>
          <td>
            <button class="action-button delete" @click="eliminar(index)"><span class="material-icons">delete</span></button>
            <button class="action-button edit" @click="editar(index)"><span class="material-icons">edit</span></button>
            <button class="action-button view" @click="toggleDetails(index)"><span class="material-icons">visibility</span></button>
          </td>
        </tr>
      </tbody>
    </table>
    <RemunerationDetails v-if="showDetails && selectedItem" :details-data="selectedItem" @close="handleCloseDetails"/>
  </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue';
import RemunerationDetails from './RemunerationDetails.vue';

const items = ref<Array<{ contrato: string, mesFacturacion: string, fechaRemuneracion: string, totalRemunerado: number, trabajador: string, valorEntregable: number, numeroCuenta: string }>>([
  { contrato: 'Contrato 123', mesFacturacion: 'Enero', fechaRemuneracion: '2023-01-01', totalRemunerado: 500, trabajador: 'Juan Perez', valorEntregable: 500, numeroCuenta: '123456789' },
  { contrato: 'Contrato 456', mesFacturacion: 'Febrero', fechaRemuneracion: '2023-02-01', totalRemunerado: 1000, trabajador: 'Maria Gomez', valorEntregable: 1000, numeroCuenta: '987654321' },
  // Más datos...
]);

const filterContract = ref<string>('');
const filterMonth = ref<string>('');
const selectedItem = ref<null | { contrato: string, mesFacturacion: string, fechaRemuneracion: string, totalRemunerado: number, trabajador: string, valorEntregable: number, numeroCuenta: string }>(null);
const showDetails = ref<boolean>(false);

const filteredItems = computed(() => {
  let filtered = [...items.value];
  if (filterContract.value) {
    filtered = filtered.filter(item => item.contrato.toLowerCase().includes(filterContract.value.toLowerCase()));
  }
  if (filterMonth.value) {
    filtered = filtered.filter(item => item.mesFacturacion === filterMonth.value);
  }
  return filtered;
});

function toggleDetails(index: number) {
  const item = items.value[index];
  if (selectedItem.value && selectedItem.value.contrato === item.contrato) {
    selectedItem.value = null;
    showDetails.value = false;
  } else {
    selectedItem.value = item;
    showDetails.value = true;
  }
}

function handleCloseDetails() {
  showDetails.value = false;
  selectedItem.value = null;
}

function editar(index: number) {
  // Implementa la lógica de edición aquí
}

function eliminar(index: number) {
  items.value.splice(index, 1);
}
</script>

<!-- Estilos existentes -->

<style scoped>
.table-container {
  margin-bottom: 2rem;
  width: 80%;
  margin: 0 auto; /* Centramos el contenedor de la tabla */
}

.filters-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.filter-input,.filter-select {
  flex-grow: 1; /* Hace que los inputs crezcan para ocupar el espacio disponible */
  margin-right: 0.5rem; /* Espacio entre los inputs */
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.styled-table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 4px 6px rgba(0, 0, 0.1);
}

.styled-table th,.styled-table td {
  text-align: left;
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.styled-table tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.05);
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

input[type="text"]:focus, select:focus {
  outline: none;
  border-color: var(--primary-color);
}
</style>