<template>
  <div class="card content-box">
    <span class="text">我是menu2-2-1 🍓🍇🍈🍉</span>
    <el-input v-model="value" placeholder="测试缓存"></el-input>
  </div>
</template>

<script setup lang="ts" name="menu221">
import { ref } from "vue";
const value = ref<string>("");
</script>

<style scoped lang="scss">
@use "./index.scss";
</style>
