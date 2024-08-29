<script setup lang="ts">
    import NavItem from '../../NavItem.vue';
    import TablaCategorias from '../../../Main/Tables/humanResources/tablaCategorias.vue';


</script>
<template>
    <NavItem :nextComponent="TablaCategorias">
        <i class="icon ion-ios-folder"></i>
		<span>{{$t('rrhh.insertCategory')}}</span>
    </NavItem>
</template> 