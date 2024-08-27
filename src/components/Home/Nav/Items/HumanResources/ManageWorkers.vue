<script setup lang="ts">
    import NavItem from '../../NavItem.vue';
    import tablaTrabajadores from "../../../Main/Tables/tablaTrabajadores.vue";
</script>

<template>
    <NavItem :nextComponent="tablaTrabajadores">
        <i class="icon ion-ios-home-outline"></i>
		<span>{{$t('rrhh.workers')}}</span>
    </NavItem>

</template>