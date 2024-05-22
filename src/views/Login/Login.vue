<script setup lang="ts">
  import { ref } from 'vue';
  import { Input } from 'ant-design-vue';
  import { userStore } from '../../store/userStore';
  import { useRouter } from 'vue-router';
  import UserFactory from '../../store/user-management/UserFactory.ts';
  
  const route = useRouter();
  const userValue = ref<string>('');
  const passwordValue = ref<string>('');

  function submitUserValues() {
    const user = UserFactory.buildUser(`admin ${userValue.value}`);
    const store = userStore();
    store.$patch({userName: user.name, userOptions:user.options});
    route.push({name:'home'});
  }
</script>

<template>
  <form @submit.prevent="submitUserValues" class="signin-wrapper">

    <div class="signin-box">
      <h2 class="slim-logo"><a href="index.html">SistemaCeta<span>.</span></a></h2>
      <h2 class="signin-title-primary">{{$t('login.welcomeMessage')}}</h2>
      <h3 class="signin-title-secondary">{{$t('login.loginSession')}}.</h3>

      <div class="form-group">
        <input v-model="userValue" type="text" class="form-control" :placeholder="$t('login.usernamePlaceholder')" required>
      </div><!-- form-group -->
      <div class="form-group mg-b-50">
        <input v-model="passwordValue" type="password" class="form-control" :placeholder="$t('login.passwordPlaceholder')" required>
      </div><!-- form-group -->
      <button class="btn btn-primary btn-block btn-signin">{{$t('login.loginButton')}}</button>
      <p class="mg-b-0">{{$t('login.forgotPasswordCaption')}} <router-link to="/forgot-password">{{$t('login.forgotPasswordLink')}}</router-link></p>
    </div><!-- signin-box -->

  </form><!-- signin-wrapper -->
</template>