<template>
  <div class="table-container">
      <h2>{{$t('contractList.title')}}</h2>
      <div class="filters-container">
          <input type="text" v-model="filterTitle" :placeholder="$t('contractList.filterTitlePlaceholder')" class="filter-input">
          <input type="text" v-model="filterClient" :placeholder="$t('contractList.filterClientPlaceholder')" class="filter-input">
          <input type="text" v-model="filterManager" :placeholder="$t('contractList.filterManagerPlaceholder')" class="filter-input">
          <input type="text" v-model="filterOffer" :placeholder="$t('contractList.filterOfferPlaceholder')" class="filter-input">
          <button class="boton">{{$t('contractList.newContractButton')}}</button>
      </div>
      <table class="styled-table">
          <thead>
              <tr>
                  <th>{{$t('contractList.titleColumn')}}</th>
                  <th>{{$t('contractList.clientColumn')}}</th>
                  <th>{{$t('contractList.managerColumn')}}</th>
                  <th>{{$t('contractList.startDateColumn')}}</th>
                  <th>{{$t('contractList.endDateColumn')}}</th>
                  <th>{{$t('contractList.offerColumn')}}</th>
                  <th>{{$t('contractList.actionsColumn')}}</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(proyecto, index) in filteredProyectos" :key="index">
                  <td>{{ proyecto.titulo }}</td>
                  <td>{{ proyecto.cliente }}</td>
                  <td>{{ proyecto.gestor }}</td>
                  <td>{{ proyecto.fechaInicio }}</td>
                  <td>{{ proyecto.fechaFin }}</td>
                  <td>{{ proyecto.oferta }}</td>
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
  
  const proyectos = ref<{ titulo: string; cliente: string; gestor: string; fechaInicio: string; fechaFin: string; oferta: string; }[]>([
    { titulo: 'Proyecto A', cliente: 'Cliente 1', gestor: 'Gestor 1', fechaInicio: '2024-01-01', fechaFin: '2024-06-30', oferta: 'Oferta 1' },
    { titulo: 'Proyecto B', cliente: 'Cliente 2', gestor: 'Gestor 2', fechaInicio: '2024-02-01', fechaFin: '2024-07-31', oferta: 'Oferta 2' },
    // Más datos...
  ]);
  
  const filterTitle = ref<string>('');
  const filterClient = ref<string>('');
  const filterManager = ref<string>('');
  const filterStartDate = ref<string>('');
  const filterEndDate = ref<string>('');
  const filterOffer = ref<string>('');
  const selectedItem = ref<{ titulo: string; cliente: string; gestor: string; fechaInicio: string; fechaFin: string; oferta: string; } | null>(null);
  const showDetails = ref<boolean>(false);
  
  const filteredProyectos = computed(() => {
    let filtered = [...proyectos.value];
    if (filterTitle.value) {
      filtered = filtered.filter(proyecto => proyecto.titulo.toLowerCase().includes(filterTitle.value.toLowerCase()));
    }
    if (filterClient.value) {
      filtered = filtered.filter(proyecto => proyecto.cliente.toLowerCase().includes(filterClient.value.toLowerCase()));
    }
    if (filterManager.value) {
      filtered = filtered.filter(proyecto => proyecto.gestor.toLowerCase().includes(filterManager.value.toLowerCase()));
    }
    if (filterStartDate.value) {
      filtered = filtered.filter(proyecto => proyecto.fechaInicio >= filterStartDate.value);
    }
    if (filterEndDate.value) {
      filtered = filtered.filter(proyecto => proyecto.fechaFin <= filterEndDate.value);
    }
    if (filterOffer.value) {
      filtered = filtered.filter(proyecto => proyecto.oferta.toLowerCase().includes(filterOffer.value.toLowerCase()));
    }
    return filtered;
  });
  
  function toggleDetails(index: number): void {
    const proyecto = proyectos.value[index];
    if (selectedItem.value && selectedItem.value.titulo === proyecto.titulo) {
      selectedItem.value = null;
      showDetails.value = false;
    } else {
      selectedItem.value = proyecto;
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
    proyectos.value.splice(index, 1);
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
  
  .filter-input,.filter-select ,.boton{
    flex-grow: 1; /* Hace que los inputs crezcan para ocupar el espacio disponible */
    margin-right: 0.5rem; /* Espacio entre los inputs */
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .boton{
    background-color: #007bff;
    color: white;
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