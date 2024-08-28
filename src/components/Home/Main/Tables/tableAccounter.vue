<template>
  <div class="table-container">
    

    <CustomTable :title="t('invoiceReview.title')" fieldAsID="email" :columns="columns" :queryOptions="queryOptions" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import CustomTable from '../../../../assets/components/CustomTable.vue';
import { useReceipts } from '../../../../composables/useReceipts';
const {t} =useI18n()
const columns = [{
  field: 'email',
  header: 'Email'
},
{
  field: 'role',
  header: 'Role'
},
]

/*<tr>
          <th>{{$t('invoiceReview.clientColumn')}}</th>
          <th>{{$t('invoiceReview.contractColumn')}}</th>
          <th>{{$t('invoiceReview.nextMonthColumn')}}</th>
          <th>{{$t('invoiceReview.billingMonthColumn')}}</th>
          <th>{{$t('invoiceReview.statusColumn')}}</th>
          <th>{{$t('invoiceReview.valueColumn')}}</th>
          <th>{{$t('invoiceReview.totalColumn')}}</th>
          <th>{{$t('invoiceReview.actionsColumn')}}</th>
        </tr>*/
const queryOptions = {
  queryFunction: useReceipts,
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
.filter-select {
  flex-grow: 1;
  /* Hace que los inputs crezcan para ocupar el espacio disponible */
  margin-right: 0.5rem;
  /* Espacio entre los inputs */
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
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