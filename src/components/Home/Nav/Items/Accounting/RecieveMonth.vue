<script setup lang="ts">
    import NavItem from '../../NavItem.vue';
    import tableAccounter1 from "../../../Main/Tables/accounter/tableAccounter1.vue"
</script>
<template>
    <NavItem :nextComponent="tableAccounter1">
        <i class="icon ion-calendar"></i>
		<span>{{$t('message.test')}}</span>
    </NavItem>
</template>