<template>
  <div class="table-container">
      <h2>{{$t('deadlineList.title')}}</h2>
      <div class="filters-container">
          <input type="text" v-model="filterContract" :placeholder="$t('deadlineList.filterContractPlaceholder')" class="filter-input">
          <select v-model="filterYear" class="filter-select">
              <option value="">{{$t('deadlineList.allOption')}}</option>
              <!-- Opciones de años -->
          </select>
      </div>
      <table class="styled-table">
          <thead>
              <tr>
                  <th>{{$t('deadlineList.contractColumn')}}</th>
                  <th>{{$t('deadlineList.monthColumn')}}</th>
                  <th>{{$t('deadlineList.yearColumn')}}</th>
                  <th>{{$t('deadlineList.statusColumn')}}</th>
                  <th>{{$t('deadlineList.valueColumn')}}</th>
                  <th>{{$t('deadlineList.actionsColumn')}}</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(plazo, index) in filteredPlazos" :key="index">
                  <td>{{ plazo.contrato }}</td>
                  <td>{{ plazo.mes }}</td>
                  <td>{{ plazo.ano }}</td>
                  <td>{{ plazo.estado }}</td>
                  <td>{{ plazo.valor }}</td>
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
  import RemunerationDetails from './RemunerationDetails.vue';
  import { ref, computed } from 'vue';

  const plazos = ref<{ contrato: string; mes: string; ano: string; estado: string; valor: number; }[]>([
    { contrato: 'Contrato 123', mes: 'Enero', ano: '2023', estado: 'Facturado', valor: 500 },
    { contrato: 'Contrato 456', mes: 'Febrero', ano: '2023', estado: 'Pendiente', valor: 1000 },
    // Más datos...
  ]);

  const filterContract = ref<string>('');
  const filterYear = ref<string>('');
  const selectedItem = ref<{ contrato: string; mes: string; ano: string; estado: string; valor: number; } | null>(null);
  const showDetails = ref<boolean>(false);

  const filteredPlazos = computed(() => {
    let filtered = [...plazos.value];
    if (filterContract.value) {
      filtered = filtered.filter(plazo => plazo.contrato.toLowerCase().includes(filterContract.value.toLowerCase()));
    }
    if (filterYear.value) {
      filtered = filtered.filter(plazo => plazo.ano === filterYear.value);
    }
    return filtered;
  });

  function toggleDetails(index: number): void {
    const plazo = plazos.value[index];
    if (selectedItem.value && selectedItem.value.contrato === plazo.contrato) {
      selectedItem.value = null;
      showDetails.value = false;
    } else {
      selectedItem.value = plazo;
      showDetails.value = true;
    }
  }

  function handleCloseDetails(): void {
    showDetails.value = false;
    selectedItem.value = null;
  }

  function editar(index: number): void {
    // Implementa la lógica de edición aquí
  }

  function eliminar(index: number): void {
    plazos.value.splice(index, 1);
  }
  </script>
  
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