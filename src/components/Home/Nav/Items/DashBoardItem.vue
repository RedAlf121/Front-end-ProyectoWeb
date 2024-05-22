<script setup lang="ts">
    import NavItem from '../NavItem.vue';
    import Login from '../../../../views/Login/Login.vue';
</script>
<template>
    <NavItem :nextComponent="Login">
        <i class="icon ion-ios-home-outline"></i>
		<span>{{$t('message.test')}}</span>
    </NavItem>
</template>