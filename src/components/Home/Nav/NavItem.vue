<script setup lang="ts">
import { inject } from 'vue';

	const props = defineProps({
		nextComponent: Object
	});
	const mainHomeComponent: any = inject('main-component');
	const mainComponentList: any = inject('component-list');
	mainComponentList.value.push(props.nextComponent);
	function uploadComponent(){
		mainHomeComponent.value = props.nextComponent;

	}
</script>

<template>
	<div class="nav-link" @click="uploadComponent()">
		<slot></slot>
	</div>
	
</template>
