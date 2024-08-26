<template>
    <Card style="width: 90%; overflow: scroll">
        <template #content>
            <div v-if="isPending" class="loading">
                <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
            </div>
            <DataTable removableSort ref="dt" :globalFilterFields="props.columns.map((c) => c.field)"
                v-model:filters="filters" filterDisplay="row" v-else-if="isSuccess" :loading="isPending" paginator
                :value="data" :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]">
                <template #header>
                    {{ data }}
                    <div class="custom-table-header">
                        <h1>{{ title }}</h1>
                        <div class="custom-table-header__options">
                            <IconField>
                                <InputIcon>
                                    <i class="pi pi-search" />
                                </InputIcon>
                                <InputText v-model="filters['global'].value" placeholder="Buscar" />
                            </IconField>
                            <Button icon="pi pi-external-link" label="Exportar" @click="toggle" aria-haspopup="true"
                                aria-controls="overlay_menu" />
                            <Menu ref="menu" id="overlay_menu" :model="exportOptions" :popup="true" />

                            <Button v-if="props.queryOptions.addFunction" icon="pi pi-plus" label="Añadir" @click="showAdd()
                                " />

                        </div>
                    </div>

                </template>
                <Column v-for="col in props.columns" sortable :field="col.field" :header="col.header">
                    <template #body="slotProps">
                        <Rating v-if="col.isRating" :modelValue="slotProps.data[col.field]" readonly />
                        <span v-else-if="col.isBoolean || col.field === fieldAsActive">{{
                            slotProps.data[col.field]==true?'Sí':'No' }}</span>
                        <span v-else-if="slotProps.data[col.field] !== undefined">{{ slotProps.data[col.field] }}</span>
                        <span v-else>-</span>
                    </template>
                </Column>
                <Column :field="fieldAsID" header="Acciones">
                    <template #body=slotProps>
                        <div class="custom-table-actions">
                            <i class="pi pi-eye"  v-tooltip="'Ver Información'"
                                @click="showElement(slotProps.data)" />
                            <i v-if="props.queryOptions.updateFunction" class="pi pi-file-edit" v-tooltip="'Modificar'"
                                @click="showUpdate(slotProps.data)" />

                            <i v-if="props.queryOptions.deleteFunction && !props.fieldAsActive" v-tooltip="'Eliminar'"
                                @click="deleteElement($event, slotProps.data)" class="pi pi-trash" />

                            <i v-if="props.queryOptions.updateFunction && slotProps.data[props.fieldAsActive] == true"
                                v-tooltip="'Desactivar'" @click="desactivateElement($event, slotProps.data)"
                                class="pi pi-trash" />

                            <i v-if="props.queryOptions.updateFunction && slotProps.data[props.fieldAsActive] == false"
                                v-tooltip="'Recuperar'" @click="activateElement($event, slotProps.data)"
                                class="pi pi-history" />

                        </div>
                    </template>
                </Column>
                <template #empty> No hay resultados </template>

            </DataTable>
            <h2 v-else class="error">Algo ha salido mal</h2>
        </template>
    </Card>

    <Dialog v-model:visible="showInfoDialog" modal header="Información" :style="{ width: '25rem' }">
        <div class="dialog-form">
            <slot name="info"></slot>
        </div>
        <div class="dialog-footer">
            <Button type="button" label="Aceptar" @click="showInfoDialog = false"></Button>
        </div>
    </Dialog>
    <Dialog v-model:visible="showAddDialog" modal header="Añadir Elemento" :style="{ width: '25rem' }">
        <span>Añade un nuevo elemento.</span>
        <div class="dialog-form">
            <slot name="form"></slot>
        </div>
        <div class="dialog-footer">
            <Button type="button" label="Cancelar" severity="secondary" @click="showAddDialog = false"></Button>
            <Button type="button" label="Guardar" @click="addElement()"></Button>
        </div>
    </Dialog>
    <Dialog v-model:visible="showUpdateDialog" modal header="Modificar Elemento" :style="{ width: '25rem' }">
        <span>Modifica el elemento.</span>
        <div class="dialog-form">
            <slot name="form"></slot>
        </div>
        <div class="dialog-footer">
            <Button type="button" label="Cancelar" severity="secondary" @click="showUpdateDialog = false"></Button>
            <Button type="button" label="Guardar" @click="updateElement()"></Button>
        </div>
    </Dialog>
</template>
<script setup>
import Column from 'primevue/column';
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import DataTable from 'primevue/datatable';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import { FilterMatchMode } from '@primevue/core/api';
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import { useMutation } from '@tanstack/vue-query';
import Rating from 'primevue/rating';
import Menu from 'primevue/menu';

const props = defineProps({
    title: String,
    columns: Array,
    fieldAsID: String,
    fieldAsActive: String,
    queryOptions: {
        queryFunction: Function,
        deleteFunction: Function,
        updateFunction: Function,
        addFunction: Function,
        model: Object,
        requestPDF: Function

    },

})

const confirm = useConfirm();
const toast = useToast();

const menu = ref();
const toggle = (event) => {
    menu.value.toggle(event);
};
const { data, isPending, isSuccess, queryKey, refetch } = props.queryOptions.queryFunction()
const dt = ref();


const exportOptions = ref([
    {
        label: 'Opciones',
        items: [
            {
                label: 'CSV',
                icon: 'pi pi-file-excel',
                command: () => dt.value.exportCSV()
            }
        ]
    }
]);

if (props.queryOptions.requestPDF) {
    exportOptions.value[0].items.push(
        {
            label: 'PDF',
            icon: 'pi pi-file-pdf',
            command: async () => await props.queryOptions.requestPDF()
        })
}

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const selectedRowInfo = ref()

const showInfoDialog = ref(false)

const showAdd = () => {

    showAddDialog.value = true
    clearModel()
}

const showElement = (data) => {
    selectedRowInfo.value = data
    for (const key in data) {
        if (props.queryOptions.model.value.hasOwnProperty(key)) {
            props.queryOptions.model.value[key] = data[key];
        }
    }
    showInfoDialog.value = true
}
const showUpdateDialog = ref(false)

const showUpdate = (data) => {
    selectedRowInfo.value = data
    for (const key in data) {
        if (props.queryOptions.model.value.hasOwnProperty(key)) {
            props.queryOptions.model.value[key] = data[key];
        }
    }
    showUpdateDialog.value = true
}

const showAddDialog = ref(false)

//
const addElement = () => {
    mutateAdd(props.queryOptions.model.value)
}
const updateElement = () => {
    mutateUpdate({ id: selectedRowInfo.value[props.fieldAsID], data: props.queryOptions.model.value })
}

const deleteElement = (event, data) => {

    confirm.require({
        target: event.currentTarget,
        message: '¿Desea eliminar el elemento?',
        icon: 'pi pi-exclamation-triangle',
        rejectProps: {
            label: 'Cancelar',
            severity: 'secondary',
            outlined: true
        },
        acceptProps: {
            label: 'Aceptar'
        },
        accept: () => {
            mutateDelete(data[props.fieldAsID])
        },
    });
};
const desactivateElement = (event, data) => {

    confirm.require({
        target: event.currentTarget,
        message: '¿Desea deactivar el elemento?',
        icon: 'pi pi-exclamation-triangle',
        rejectProps: {
            label: 'Cancelar',
            severity: 'secondary',
            outlined: true
        },
        acceptProps: {
            label: 'Aceptar'
        },
        accept: () => {
            let updateObject = {}
            Object.assign(updateObject, data)
            updateObject[props.fieldAsActive] = false;
            mutateUpdate({ id: data[props.fieldAsID], data: updateObject })
        },
    });
};
const activateElement = (event, data) => {

    confirm.require({
        target: event.currentTarget,
        message: '¿Desea activar el elemento?',
        icon: 'pi pi-exclamation-triangle',
        rejectProps: {
            label: 'Cancelar',
            severity: 'secondary',
            outlined: true
        },
        acceptProps: {
            label: 'Aceptar'
        },
        accept: () => {
            let updateObject = {}
            Object.assign(updateObject, data)
            updateObject[props.fieldAsActive] = true;
            mutateUpdate({ id: data[props.fieldAsID], data: updateObject })
        },
    });
};

//

const { mutate: mutateAdd } = useMutation({
    mutationKey: [`${queryKey}-add`],
    mutationFn: props.queryOptions.addFunction ? props.queryOptions.addFunction : () => { },
    onSuccess: async () => {
        await refetch()
        toast.add({ severity: 'info', summary: 'Confirmación', detail: 'Elemento añadido correctamente', life: 5000 });
        showAddDialog.value = false
        clearModel()
    },
    onError: (error) => {
        toast.add({ severity: 'error', summary: 'No se pudo modificar este elemento', detail: error.message, life: 5000 });
    }
})


const { mutate: mutateUpdate } = useMutation({
    mutationKey: [`${queryKey}-update`],
    mutationFn: props.queryOptions.updateFunction ? props.queryOptions.updateFunction : () => { },
    onSuccess: async () => {
        await refetch()
        toast.add({ severity: 'info', summary: 'Confirmación', detail: 'Elemento modificado correctamente', life: 5000 });
        showUpdateDialog.value = false
        clearModel()
    },
    onError: (error) => {
        toast.add({ severity: 'error', summary: 'Ha ocurrido un error', detail: error.message, life: 5000 });
    }
})




const { mutate: mutateDelete } = useMutation({
    mutationKey: [`${queryKey}-delete`],
    mutationFn: props.queryOptions.deleteFunction ? props.queryOptions.deleteFunction : () => { },
    onSuccess: async () => {
        await refetch()
        toast.add({ severity: 'info', summary: 'Confirmación', detail: 'Elemento eliminado correctamente', life: 5000 });
    },
    onError: (error) => {
        console.log('eee')

        toast.add({ severity: 'error', summary: 'Ha ocurrido un error', detail: error.message, life: 5000 });
    }
})

//

const clearModel = () => {
    const model = props.queryOptions.model.value
    for (const key in model) {
        if (key === props.fieldAsActive) {
            model[key] = true;
        } else
            if (typeof model[key] === 'boolean') {
                model[key] = false;
            } else
                if (typeof model[key] === 'number') {
                    model[key] = 0;
                } else if (typeof model[key] === 'string') {
                    model[key] = '';
                }
    }
}

</script>
<style>
.custom-table-header {
    display: flex;
    flex-direction: column;
    gap: 1rem;

}

.custom-table-header__options {
    display: flex;
    width: fit-content;
    gap: 1rem;
}

.custom-table-actions {
    display: flex;
    width: 100%;
    align-items: center;
    gap: .5rem;
}

.custom-table-actions .pi {
    color: var(--p-button-primary-background);
    cursor: pointer;
}

.dialog-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 1.5rem 0;
}

.dialog-footer {
    display: flex;
    gap: 1.5rem;
    justify-content: space-between;
}

.loading,
.error {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>