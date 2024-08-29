<script setup lang="ts">
    import NavItem from '../../NavItem.vue';
    import Insertar_Usuario from "../../../Main/Form/Insertar_Usuario.vue";


</script>
<template>
    <NavItem :nextComponent="Insertar_Usuario">
        <i class="icon ion-person-add"></i>
		<span>{{$t('Usuario')}}</span>
    </NavItem>
</template> 