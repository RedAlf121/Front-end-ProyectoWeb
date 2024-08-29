<script setup lang="ts">
    import NavItem from '../../NavItem.vue';
    import TableReceipt from '../../../Main/Tables/accounter/tableReceipt.vue';
</script>
<template>
    <NavItem :nextComponent="TableReceipt">
        <i class="icon ion-ios-checkmark"></i>
		<span>{{$t('nav.accounter.recieve.actual')}}</span>
    </NavItem>
</template>