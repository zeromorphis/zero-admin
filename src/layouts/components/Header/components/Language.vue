<!--
 * @Author: YT
 * @Date: 2025-05-10 10:40:44
 * @LastEditors: YT
 * @LastEditTime: 2025-05-10 16:13:10
 * @Description: 当时只道是寻常
 * @FilePath: /dev/my-vue-app/src/layouts/components/Header/components/Language.vue
-->
<template>
  <el-dropdown trigger="click" @command="changeLanguage">
    <i :class="'iconfont icon-zhongyingwen'" class="toolBar-icon"></i>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in languageList"
          :key="item.value"
          :command="item.value"
          :disabled="language === item.value"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import { useGlobalStore } from "@/stores/modules/global";
import type { LanguageType } from "@/stores/interface";

const i18n = useI18n();
const globalStore = useGlobalStore();
const language = computed(() => globalStore.language);

const languageList = [
  { label: "简体中文", value: "zh" },
  { label: "English", value: "en" }
];

const changeLanguage = (lang: string) => {
  i18n.locale.value = lang;
  globalStore.setGlobalState("language", lang as LanguageType);
};
</script>
