<script setup lang="ts">
    import NavItem from '../../NavItem.vue';
    import tablaContratos from "../../../Main/Tables/tablaContratos.vue"

</script>


<template>
    <NavItem :nextComponent="tablaContratos">
        <i class="icon ion-ios-home-outline"></i>
		<span>{{$t('Contratos')}}</span>
    </NavItem>
</template>