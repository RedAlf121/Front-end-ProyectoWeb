<script setup lang="ts">
    import NavItem from '../../NavItem.vue';
    import Trabajador from "../../../Main/Form/Trabajador.vue";


</script>
<template>
    <NavItem :nextComponent="Trabajador">
        <i class="icon ion-person-add"></i>
		<span>{{$t('rrhh.insertWorker')}}</span>
    </NavItem>
</template> 