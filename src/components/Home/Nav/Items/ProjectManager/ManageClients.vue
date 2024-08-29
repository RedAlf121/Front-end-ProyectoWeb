<script setup lang="ts">
    import NavItem from '../../NavItem.vue';
    import tablaClientes from "../../../Main/Tables/tablaClientes.vue"

</script>


<template>
    <NavItem :nextComponent="tablaClientes">
        <i class="icon ion-android-contacts"></i>
		<span>{{$t('Clientes')}}</span>
    </NavItem>
</template>