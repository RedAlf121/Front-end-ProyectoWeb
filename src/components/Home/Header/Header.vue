<script setup lang="ts">
import { ref } from 'vue';

import userStoreInstance from '../../../store/userStore';
import i18n from '../../../languages';
const username = ref(userStoreInstance.userName);

function spanish(){
    i18n.global.locale.value='es';
}

function english(){
    i18n.global.locale.value='en';
}
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
                        <span>{{ username }}</span>
                        <i class="fa fa-angle-down"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <nav class="nav">
                            <a href="#" class="nav-link"><i class="icon ion-ios-gear"></i> {{$t('header.accountSettings')}}</a>
                            <router-link to="/" class="nav-link"><i class="icon ion-forward"></i> {{$t('header.signOut')}}</router-link>
                        </nav>
                    </div><!-- dropdown-menu -->


                </div><!-- dropdown -->
                <!-- Nuevo dropdown para seleccionar el idioma -->
                <div class="dropdown dropdown-languages ml-3">
                    <a href="#" class="nav-link" data-toggle="dropdown">
                        <i class="fa fa-language"></i> {{$t('header.language')}}
                        <i class="fa fa-angle-down"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <nav class="nav">
                            <a href="#" class="nav-link"><i class="icon ion-earth"></i> {{$t('header.spanish')}}</a>
                            <a href="#" class="nav-link"><i class="icon ion-earth"></i> {{$t('header.english')}}</a>
                        </nav>
                    </div><!-- dropdown-menu -->
                </div><!-- dropdown-languages -->
            </div><!-- header-right -->
        </div><!-- container -->
    </div>


</template>

<style>
.slim-header-right {
    display: flex;
    flex-direction: row;
    width: 30%;
}
</style>