<script setup lang="ts">
    import NavItem from '../../NavItem.vue';
    import TableRemmunerations from '../../../Main/Tables/accounter/tableRemmunerations.vue';
</script>
<template>
    <NavItem :nextComponent="TableRemmunerations">
        <i class="icon ion-cash"></i>
        <span>{{$t('nav.accounter.remmuneration')}}</span>
    </NavItem>
</template>