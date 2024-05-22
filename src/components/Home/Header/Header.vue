<script setup lang="ts">
    import {ref} from 'vue';
    import { userStore } from '../../../store/userStore';
    const store = userStore();
    const username = ref(store.userName);
</script>

<template>
    <div class="slim-header">
        <div class="container">
            <div class="slim-header-left">
                <h2 class="slim-logo"><router-link to="/home">SistemaCETA</router-link></h2>
            </div><!-- slim-header-left -->
            <div class="slim-header-right">
                <div class="dropdown dropdown-c">
                    <a href="#" class="logged-user" data-toggle="dropdown">
                        <img src="http://via.placeholder.com/500x500" alt="">
                        <span>{{username}}</span>
                        <i class="fa fa-angle-down"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <nav class="nav">
                            <a href="#" class="nav-link"><i class="icon ion-ios-gear"></i> Account
                                Settings</a>
                            <router-link to="/" class="nav-link"><i class="icon ion-forward"></i> Sign Out</router-link>
                        </nav>
                    </div><!-- dropdown-menu -->
                </div><!-- dropdown -->
            </div><!-- header-right -->
        </div><!-- container -->
    </div>


</template>
