<script setup lang="ts">
    import NavItem from '../../NavItem.vue';
    import Insertar_Categoria from "/src/components/Home/Main/Form/Insertar_Categoria.vue";


</script>
<template>
    <NavItem :nextComponent="Insertar_Categoria">
        <i class="icon ion-ios-home-outline"></i>
		<span>{{$t('Insertar Categoria')}}</span>
    </NavItem>
</template> 