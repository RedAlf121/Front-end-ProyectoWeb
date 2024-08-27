<template>
  <div class="table-container">
      <h2>{{$t('workerList.title')}}</h2>
      <table class="styled-table">
          <thead>
              <tr>
                  <th>{{$t('workerList.idColumn')}}</th>
                  <th>{{$t('workerList.nameColumn')}}</th>
                  <th>{{$t('workerList.categoryColumn')}}</th>
                  <th>{{$t('workerList.detailsColumn')}}</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(trabajador, index) in trabajadores" :key="index">
                  <td>{{ trabajador.carnet }}</td>
                  <td>{{ trabajador.nombre }}</td>
                  <td>{{ trabajador.categoria }}</td>
                  <button class="action-button view" @click="toggleDetails(index)"><span class="material-icons">visibility</span></button>
              </tr>
          </tbody>
      </table>
  </div>
</template>

  
  <script>
  export default {
    data() {
      return {
        trabajadores: [
          { carnet: '12345', nombre: 'Juan Pérez', categoria: 'Desarrollador' },
          { carnet: '67890', nombre: 'María Gómez', categoria: 'Gerente' },
          // Más trabajadores...
        ]
      };
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



.view {
  color: green;
}

input[type="text"]:focus, select:focus {
  outline: none;
  border-color: var(--primary-color);
}
</style>