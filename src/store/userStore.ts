import {defineStore} from 'pinia';
import { ref, shallowRef } from 'vue';
export const userStore = defineStore('user',()=>{
    const userName = ref('');
    const userOptions = shallowRef([]);

    return {userName,userOptions};
});