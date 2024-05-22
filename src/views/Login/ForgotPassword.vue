<script setup lang="ts">
  import { ref } from 'vue';
  import { Input } from 'ant-design-vue';
  import { userStore } from '../../store/userStore';
  import UserFactory from '../../store/user-management/UserFactory.ts';

  const userValue = ref<string>('');
  const passwordValue = ref<string>('');

  function submitUserValues() {
    const user = UserFactory.buildUser(`admin ${userValue}`);
    userStore().$patch({userName: user.name, userOptions:user.options});
    
  }
</script>

<template>
  <form @submit="submitUserValues" class="signin-wrapper">

    <div class="signin-box">
      <h2 class="slim-logo"><a href="index.html">SistemaCeta<span>.</span></a></h2>
      <h2 class="signin-title-primary">Welcome back!</h2>
      <h3 class="signin-title-secondary">Log in to continue.</h3>

      <div class="form-group">
        <input v-model="userValue" type="text" class="form-control" placeholder="Enter your username" required>
      </div><!-- form-group -->
      <div class="form-group mg-b-50">
        <input v-model="passwordValue" type="password" class="form-control" placeholder="Enter your password" required>
      </div><!-- form-group -->
      <button class="btn btn-primary btn-block btn-signin">Log In</button>
      <p class="mg-b-0">Forgot your password? <router-link to="/forgot-password">Click here</router-link></p>
    </div><!-- signin-box -->

  </form><!-- signin-wrapper -->
</template>