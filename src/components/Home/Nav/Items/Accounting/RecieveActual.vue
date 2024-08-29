<script setup lang="ts">
    import NavItem from '../../NavItem.vue';
    import tableAccounter from "../../../Main/Tables/tableAccounter.vue"
</script>
<template>
    <NavItem :nextComponent="tableAccounter">
        <i class="icon ion-ios-checkmark"></i>
		<span>{{$t('message.test')}}</span>
    </NavItem>
</template>