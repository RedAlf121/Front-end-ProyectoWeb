<script setup lang="ts">
    import NavItem from '../../NavItem.vue';
    import tableAccounter1 from "../../../Main/Tables/tableAccounter1.vue"
</script>
<template>
    <NavItem :nextComponent="tableAccounter1">
        <i class="icon ion-ios-home-outline"></i>
		<span>{{$t('message.test')}}</span>
    </NavItem>
</template>