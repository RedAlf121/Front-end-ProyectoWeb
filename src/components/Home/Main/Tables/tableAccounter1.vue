<template>
  <div class="table-container">
    <h2>Facturas Generadas Mensuales</h2>
    <div class="filters-container">
      <select v-model="filterMonth" class="filter-select">
        <option value="">Todos</option>
        <!-- Opciones de meses -->
      </select>
      <select v-model="filterState" class="filter-select">
        <option value="">Todos</option>
        <option value="pagada">Pagada</option>
        <option value="pendiente">Pendiente</option>
      </select>
    </div>
    <table class="styled-table">
      <thead>
        <tr>
          <th>Mes</th>
          <th>Factura</th>
          <th>Pagada</th>
          <th>Mostrar Recibo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filteredItems" :key="index">
          <td>{{ item.month }}</td>
          <td>{{ item.invoice }}</td>
          <td>
            <button class="action-button paid-toggle" @click="togglePaidStatus(index)">
              <i class="material-icons">{{ item.status === 'pagada'? 'check_circle' : 'pending_actions' }}</i>
            </button>
          </td>
          <td>
            <button class="action-button view" @click="toggleReceipt(index)">
              <i class="material-icons">{{ item.status === 'pagada'? 'visibility_off' : 'visibility' }}</i>
            </button>
          </td>
         
        </tr>
      </tbody>
    </table>
    <Receipt v-if="showReceipt && selectedItem" :receipt-data="selectedItem" @close="handleCloseReceipt"/>
  </div>
</template>

<script>
import Receipt from './Receipt.vue';

<script setup lang="ts">
import { ref, computed } from 'vue';
import Receipt from './Receipt.vue';

interface Item {
  month: string;
  invoice: string;
  status: string;
}

const items = ref<Item[]>([
  { month: '01', invoice: 'Factura 001', status: 'pendiente' },
  { month: '02', invoice: 'Factura 002', status: 'pagada' },
  // Más datos...
]);

const filterMonth = ref<string>('');
const filterState = ref<string>('');
const selectedItem = ref<Item | null>(null);
const showReceipt = ref<boolean>(false);

const filteredItems = computed((): Item[] => {
  let filtered = [...items.value];
  if (filterMonth.value) {
    filtered = filtered.filter(item => item.month === filterMonth.value);
  }
  if (filterState.value) {
    filtered = filtered.filter(item => item.status === filterState.value);
  }
  return filtered;
});

const toggleReceipt = (index: number): void => {
  const item = items.value[index];
  if (selectedItem.value && selectedItem.value.invoice === item.invoice) {
    selectedItem.value = null;
    showReceipt.value = false;
  } else {
    selectedItem.value = item;
    showReceipt.value = true;
  }
};

const togglePaidStatus = (index: number): void => {
  const item = items.value[index];
  item.status = item.status === 'pagada'? 'pendiente' : 'pagada';
};

const handleCloseReceipt = (): void => {
  showReceipt.value = false;
  selectedItem.value = null;
};
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

input[type="text"]:focus, select:focus {
  outline: none;
  border-color: var(--primary-color);
}
</style>