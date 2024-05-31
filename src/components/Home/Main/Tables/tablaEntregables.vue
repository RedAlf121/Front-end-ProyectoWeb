<template>
    <div class="table-container">
      <h2>Listado de Tareas</h2>
      <div class="filters-container">
        <input type="text" v-model="filterContract" placeholder="Filtrar por contrato" class="filter-input">
        <select v-model="filterMonth" class="filter-select">
          <option value="">Todos</option>
          <!-- Opciones de meses -->
        </select>
      </div>
      <table class="styled-table">
        <thead>
          <tr>
            <th>Contrato</th>
            <th>Mes</th>
            <th>Trabajador</th>
            <th>Tareas</th>
            <th>Estado</th>
            <th>Valores</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tarea, index) in filteredTareas" :key="index">
            <td>{{ tarea.contrato }}</td>
            <td>{{ tarea.mes }}</td>
            <td>{{ tarea.trabajador }}</td>
            <td>{{ tarea.tareas }}</td>
            <td>{{ tarea.estado }}</td>
            <td>{{ tarea.valores }}</td>
            <td>
                <button class="action-button view" @click="toggleDetails(index)"><span class="material-icons">visibility</span></button>
            </td>
          </tr>
        </tbody>
      </table>
      <TaskDetails v-if="showDetails && selectedItem" :task-details="selectedItem" @close="handleCloseDetails"/>
    </div>
  </template>
  
  <script>
  
  
  export default {
    
    data() {
      return {
        tareas: [
          { contrato: 'Contrato 123', mes: 'Enero', trabajador: 'Juan Perez', tareas: 'Tarea 1, Tarea 2', estado: 'Cumplido', valores: '$500' },
          { contrato: 'Contrato 456', mes: 'Febrero', trabajador: 'Maria Gomez', tareas: 'Tarea 3, Tarea 4', estado: 'Por Cumplir', valores: '$1000' },
          // Más datos...
        ],
        filterContract: '',
        filterMonth: '',
        selectedItem: null,
        showDetails: false,
      };
    },
    computed: {
      filteredTareas() {
        let filtered = [...this.tareas];
        if (this.filterContract) {
          filtered = filtered.filter(tarea => tarea.contrato.toLowerCase().includes(this.filterContract.toLowerCase()));
        }
        if (this.filterMonth) {
          filtered = filtered.filter(tarea => tarea.mes === this.filterMonth);
        }
        return filtered;
      }
    },
    methods: {
      toggleDetails(index) {
        const tarea = this.tareas[index];
        if (this.selectedItem && this.selectedItem.contrato === tarea.contrato) {
          this.selectedItem = null;
          this.showDetails = false;
        } else {
          this.selectedItem = tarea;
          this.showDetails = true;
        }
      },
      handleCloseDetails() {
        this.showDetails = false;
        this.selectedItem = null;
      }
    }
  };
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