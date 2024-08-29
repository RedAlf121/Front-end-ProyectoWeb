<script setup lang="ts">
    import NavItem from '../../NavItem.vue';
    import tablaTrabajadores from "../../../Main/Tables/humanResources/tablaTrabajadores.vue";
</script>

<template>
    <NavItem :nextComponent="tablaTrabajadores">
        <i class="icon ion-android-people"></i>
		<span>{{$t('rrhh.workers')}}</span>
    </NavItem>

</template>