<!--
 * @Author: YT
 * @Date: 2025-05-10 10:40:45
 * @LastEditors: YT
 * @LastEditTime: 2025-05-10 17:05:39
 * @Description: 当时只道是寻常
 * @FilePath: /dev/my-vue-app/src/views/login/index.vue
-->
<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <SwitchDark class="dark" />
      <div class="login-left">
        <img class="login-left-img" src="@/assets/images/login_left.png" alt="login" />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="@/assets/images/logo.svg" alt="" />
          <h2 class="logo-text">Zero-Admin</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
import LoginForm from "./components/LoginForm.vue";
import SwitchDark from "@/components/SwitchDark/index.vue";
</script>

<style scoped lang="scss">
@use "./index.scss";
</style>
