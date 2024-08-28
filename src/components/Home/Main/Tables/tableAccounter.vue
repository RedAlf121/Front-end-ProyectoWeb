<template>
  <div class="table-container">
    <h2>{{$t('invoiceReview.title')}}</h2>
    <div class="filters-container">
      <input type="text" v-model="filterClient" :placeholder="$t('invoiceReview.filterClientPlaceholder')" class="filter-input">
      <input type="text" v-model="filterInvoice" :placeholder="$t('invoiceReview.filterInvoicePlaceholder')" class="filter-input">
      <input type="text" v-model="filterContract" :placeholder="$t('invoiceReview.filterContractPlaceholder')" class="filter-input">
      <select v-model="filterStatus" class="filter-select">
        <option value="">{{$t('invoiceReview.allOption')}}</option>
        <option value="pendiente">{{$t('invoiceReview.pendingOption')}}</option>
        <option value="pagada">{{$t('invoiceReview.paidOption')}}</option>
      </select>
    </div>
    <table class="styled-table">
      <thead>
        <tr>
          <th>{{$t('invoiceReview.clientColumn')}}</th>
          <th>{{$t('invoiceReview.contractColumn')}}</th>
          <th>{{$t('invoiceReview.nextMonthColumn')}}</th>
          <th>{{$t('invoiceReview.billingMonthColumn')}}</th>
          <th>{{$t('invoiceReview.statusColumn')}}</th>
          <th>{{$t('invoiceReview.valueColumn')}}</th>
          <th>{{$t('invoiceReview.totalColumn')}}</th>
          <th>{{$t('invoiceReview.actionsColumn')}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filteredItems" :key="index">
          <td>{{ item.cliente }}</td>
          <td>{{ item.contrato }}</td>
          <td>{{ item.proximoMesPlazo }}</td>
          <td>{{ item.mesFacturacion }}</td>
          <td>{{ item.estado }}</td>
          <td>{{ item.valorPlazo }}</td>
          <td>{{ item.totalPagar }}</td>
          <td>
            <button class="action-button delete" @click="eliminar(index)">
              <span class="material-icons">delete</span>
            </button>
            <button class="action-button edit" @click="editar(index)">
              <span class="material-icons">edit</span>
            </button>
            <button class="action-button view" @click="ver(index)">
              <span class="material-icons">visibility</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          cliente: 'Cliente 1',
          contrato: 'Contrato 123',
          proximoMesPlazo: 'Enero',
          mesFacturacion: 'Diciembre',
          estado: 'Pendiente',
          valorPlazo: '1000',
          totalPagar: '2000',
        },
        {
          cliente: 'Cliente 2',
          contrato: 'Contrato 456',
          proximoMesPlazo: 'Febrero',
          mesFacturacion: 'Enero',
          estado: 'Pagada',
          valorPlazo: '1500',
          totalPagar: '3000',
        },
        // Agrega más objetos según sea necesario
      ],
      filterClient: '',
      filterInvoice: '',
      filterContract: '',
      filterStatus: ''
    };
  },
  computed: {
    filteredItems() {
      let filtered = [...this.items];
      if (this.filterClient) {
        filtered = filtered.filter(item => item.cliente.toLowerCase().includes(this.filterClient.toLowerCase()));
      }
      if (this.filterInvoice) {
        filtered = filtered.filter(item => item.factura.toLowerCase().includes(this.filterInvoice.toLowerCase()));
      }
      if (this.filterContract) {
        filtered = filtered.filter(item => item.contrato.toLowerCase().includes(this.filterContract.toLowerCase()));
      }
      if (this.filterStatus) {
        filtered = filtered.filter(item => item.estado === this.filterStatus);
      }
      return filtered;
    }
  },
  methods: {
    eliminar(index) {
      this.items.splice(index, 1);
    },
    editar(index) {
      // Implementa la lógica de edición aquí
    },
    ver(index) {
      // Implementa la lógica de visualización aquí
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