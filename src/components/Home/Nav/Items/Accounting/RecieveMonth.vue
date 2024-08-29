<script setup lang="ts">
    import NavItem from '../../NavItem.vue';
    import TableMonthlyReceipt from '../../../Main/Tables/accounter/tableMonthlyReceipt.vue';
</script>
<template>
    <NavItem :nextComponent="TableMonthlyReceipt">
        <i class="icon ion-calendar"></i>
        <span>{{$t('nav.accounter.recieve.monthly')}}</span>
    </NavItem>
</template>