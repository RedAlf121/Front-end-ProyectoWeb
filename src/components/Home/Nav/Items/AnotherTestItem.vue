<script setup lang="ts">
    import NavItem from '../NavItem.vue';
    import Nav from '../Nav.vue';
</script>
<template>
    <NavItem :nextComponent="Nav">
        <i class="icon ion-ios-home-outline"></i>
		<span>{{$t('message.test')}}</span>
    </NavItem>
</template>