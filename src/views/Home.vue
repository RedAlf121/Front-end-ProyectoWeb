<script setup lang="ts">
	import Header from '../components/Home/Header/Header.vue';
	import Nav from '../components/Home/Nav/Nav.vue';
	import Footer from '../components/Home/Footer/Footer.vue';
	import { onMounted, provide, ref, shallowRef, watch } from 'vue';
	
	const mainComponent = shallowRef('');
	const components = shallowRef<any>([]);
	provide('main-component',mainComponent);
	provide('component-list',components);
	onMounted(()=>{
		mainComponent.value = components.value[0];
	})
</script>

<template>
	<Header></Header>
	<Nav></Nav>
	<!-- <component v-if="mainComponent" :is="mainComponent"></component> -->
	<component v-if="mainComponent" :is="mainComponent"></component>
	<Footer></Footer>
</template>
