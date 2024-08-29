<script setup lang="ts">
    import NavItem from '../../NavItem.vue';
    import tableAccounter2 from "../../../Main/Tables/tableAccounter2.vue"
</script>
<template>
    <NavItem :nextComponent="tableAccounter2">
        <i class="icon ion-cash"></i>
		<span>{{$t('message.test')}}</span>
    </NavItem>
</template>