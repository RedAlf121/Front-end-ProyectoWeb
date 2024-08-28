<template>
  <div class="table-container">




    <CustomTable :title="t('clientList.title')" fieldAsID="id_client" fieldAsActive="is_active" :columns="columns"
      :queryOptions="queryOptions" >
    <template #info>
       {{ model }}
       Aqui darle el formato de la info
    </template>
    <template #form>
      <FloatLabel>
        <InputText v-model="model.name_client" id="name" fluid></InputText>
        <label for="name"> {{ $t('clientForm.nameLabel') }}</label>
      </FloatLabel>
      <FloatLabel>
        <InputText v-model="model.email_client" id="email" fluid></InputText>
        <label for="email"> {{ $t('clientForm.emailLabel') }}</label>
      </FloatLabel>
      <FloatLabel>
        <InputText v-model="model.address_client" id="address" fluid></InputText>
        <label for="address"> {{ $t('clientForm.addressLabel') }}</label>
      </FloatLabel>
      <FloatLabel>
        <InputText v-model="model.description_client" id="description" fluid></InputText>
        <label for="description"> {{ $t('clientForm.descriptionLabel') }}</label>
      </FloatLabel>
      <FloatLabel>
        <InputText v-model="model.phone_client" id="phone" fluid></InputText>
        <label for="phone"> {{ $t('clientForm.phoneLabel') }}</label>
      </FloatLabel>
    </template>
    </CustomTable>
  </div>

  <div>

    <RemunerationDetails v-if="showDetails && selectedItem" :details-data="selectedItem" @close="handleCloseDetails" />
  </div>
</template>


<script setup lang="ts">
import RemunerationDetails from './RemunerationDetails.vue';
import { ref, computed } from 'vue';
import CustomTable from '../../../../assets/components/CustomTable.vue';
import { useClients } from '../../../../composables/useClients';
import { useI18n } from 'vue-i18n';
import { addClient, updateClient } from '../../../../services/client';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
const { t } = useI18n()

const columns = [
  {
    field: 'name_client',
    header: t('clientList.nameColumn')
  }, {
    field: 'email_client',
    header: 'Email'
  },
  {
    field: 'address_client',
    header: 'Dirección'
  },
  {
    field: 'phone_client',
    header: 'Teléfono'
  },
  {
    field: 'description_client',
    header: 'Descripción'
  },
  {
    field: 'is_active',
    header: 'Activo'
  },

]
//

const model = ref({
  name_client: '',
  address_client: '',
  phone_client: '',
  description_client: '',
  email_client:'',
  is_active: true
})

const queryOptions = {
  queryFunction: useClients,
  addFunction:addClient,
  updateFunction: updateClient,
  model: model
}


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