<script setup lang="ts">
    import NavItem from '../../NavItem.vue';
    import Insertar_Cliente from "../../../Main/Form/Insertar_Cliente.vue"
</script>
<template>
    <NavItem :nextComponent="Insertar_Cliente">
        <i class="icon ion-ios-home-outline"></i>
		<span>{{$t('nav.projectManager.client.insert')}}</span>
    </NavItem>
</template>