<script setup lang="ts">
    import NavItem from '../../NavItem.vue';
    import tablaPlazos from "../../../Main/Tables/tablaPlazos.vue"
</script>
<template>
    <NavItem :nextComponent="tablaPlazos">
        <i class="icon ion-ios-home-outline"></i>
		<span>{{$t('message.test')}}</span>
    </NavItem>
</template>