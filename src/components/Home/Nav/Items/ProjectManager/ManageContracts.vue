<script setup lang="ts">
    import NavItem from '../../NavItem.vue';
    import Contract from "../../../Main/Form/Contract.vue"
</script>
<template>
    <NavItem :nextComponent="Contract">
        <i class="icon ion-ios-home-outline"></i>
		<span>{{$t('message.test')}}</span>
    </NavItem>
</template>