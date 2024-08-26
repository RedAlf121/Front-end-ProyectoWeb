<template>
    <div class="table-container">
      <h2>Listado de Clientes</h2>
      <div class="filters-container">
        <input type="text" v-model="filterName" placeholder="Filtrar por nombre" class="filter-input">
        <input type="text" v-model="filterAddress" placeholder="Filtrar por dirección" class="filter-input">
        <input type="text" v-model="filterEmail" placeholder="Filtrar por email" class="filter-input">
        <button class="boton" > Nuevo Cliente </button>
 
      </div>
      <table class="styled-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(contacto, index) in filteredContactos" :key="index">
            <td>{{ contacto.nombre }}</td>
            <td>{{ contacto.direccion }}</td>
            <td>{{ contacto.telefono }}</td>
            <td>{{ contacto.email }}</td>
            <td>
              <button class="action-button delete" @click="eliminar(index)"> <span class="material-icons">delete</span></button>
              <button class="action-button edit" @click="editar(index)"> <span class="material-icons">edit</span></button>
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
  
  const contactos = ref<{ nombre: string; direccion: string; telefono: string; email: string; }[]>([
    { nombre: 'Juan Pérez', direccion: 'Calle 123', telefono: '555-1234', email: 'juan@example.com' },
    { nombre: 'María López', direccion: 'Avenida 456', telefono: '555-5678', email: 'maria@example.com' },
    // Más datos...
  ]);
  
  const filterName = ref<string>('');
  const filterAddress = ref<string>('');
  const filterPhone = ref<string>('');
  const filterEmail = ref<string>('');
  const selectedItem = ref<{ nombre: string; direccion: string; telefono: string; email: string; } | null>(null);
  const showDetails = ref<boolean>(false);
  
  const filteredContactos = computed(() => {
    let filtered = [...contactos.value];
    if (filterName.value) {
      filtered = filtered.filter(contacto => contacto.nombre.toLowerCase().includes(filterName.value.toLowerCase()));
    }
    if (filterAddress.value) {
      filtered = filtered.filter(contacto => contacto.direccion.toLowerCase().includes(filterAddress.value.toLowerCase()));
    }
    if (filterPhone.value) {
      filtered = filtered.filter(contacto => contacto.telefono.includes(filterPhone.value));
    }
    if (filterEmail.value) {
      filtered = filtered.filter(contacto => contacto.email.toLowerCase().includes(filterEmail.value.toLowerCase()));
    }
    return filtered;
  });
  
  function toggleDetails(index: number): void {
    const contacto = contactos.value[index];
    if (selectedItem.value && selectedItem.value.nombre === contacto.nombre) {
      selectedItem.value = null;
      showDetails.value = false;
    } else {
      selectedItem.value = contacto;
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
    contactos.value.splice(index, 1);
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
  
  .filter-input,.filter-select,.boton {
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