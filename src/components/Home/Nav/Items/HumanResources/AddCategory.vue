<script setup lang="ts">
    import NavItem from '../../NavItem.vue';
    import Insertar_Categoria from "../../../Main/Form/Insertar_Categoria.vue";


</script>
<template>
    <NavItem :nextComponent="Insertar_Categoria">
        <i class="icon ion-ios-folder"></i>
		<span>{{$t('rrhh.insertCategory')}}</span>
    </NavItem>
</template> 