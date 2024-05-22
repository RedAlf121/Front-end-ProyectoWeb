<script setup lang="ts">
import { ref } from 'vue';
import { userStore } from '../../../store/userStore';

const user = userStore();
const options = user.userOptions;
const activeItems = ref(user.userOptions.map((_,i)=>(i==0)));
function toggleItem(index:number):void{
    activeItems.value = activeItems.value.map((_,i)=>(index==i));
}
</script>

<template>
    <div class="slim-navbar">
        <div class="container">
            <ul class="nav">
                <li 
                v-for="(item,index) in options" 
                class="nav-item" 
                :class="{'active': activeItems[index]}" 
                :key="index"
                @click="toggleItem(index)">
                    <component :is="item"></component>
                </li>
            </ul>
        </div><!-- container -->
    </div>
</template>

