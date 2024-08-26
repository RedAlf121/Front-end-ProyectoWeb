<script setup lang="ts">
    import NavItem from '../../NavItem.vue';
    import Trabajador from "/src/components/Home/Main/Form/Trabajador.vue";


</script>
<template>
    <NavItem :nextComponent="Trabajador">
        <i class="icon ion-ios-home-outline"></i>
		<span>{{$t('Insertar Trabajador')}}</span>
    </NavItem>
</template> 