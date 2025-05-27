/*
 * @Author: YT
 * @Date: 2025-05-26 10:14:39
 * @LastEditors: YT
 * @LastEditTime: 2025-05-26 20:30:22
 * @Description: 当时只道是寻常
 * @FilePath: /dev/zero-admin/eslint.config.js
 */
import { defineConfig } from "eslint/config";
import * as vueEslint from 'eslint-plugin-vue'
import vueRecommended from "eslint-plugin-vue/lib/configs/vue3-recommended.js";
import vueParser from 'vue-eslint-parser';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from "eslint-plugin-prettier";

const { configs: vueConfigs } = vueEslint;

export default defineConfig([
  // ✅ 添加这个配置项用于忽略文件（替代 .eslintignore）
  {
    ignores: [
      "node_modules/",
      "dist/",
      "**/*.config.js",  // 如果你之前忽略了这些文件
      "vite.config.*",
      "eslint.config.js"
    ],
  },
  // 全局通用规则
  {
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      // eslint (http://eslint.cn/docs/rules)
      "no-var": "error", // 要求使用 let 或 const 而不是 var
      "no-multiple-empty-lines": ["error", { max: 1 }], // 不允许多个空行
      "prefer-const": "off", // 使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
      "no-use-before-define": "off", // 禁止在 函数/类/变量 定义之前使用它们
    }
  },
  // Vue 文件配置
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module"
      },
      globals: {
        window: "readonly",
        document: "readonly"
      }
    },
    plugins: {
      vue: vueEslint
    },
    rules: {
      ...vueRecommended.rules,
      // vue (https://eslint.vuejs.org/rules)
      "vue/script-setup-uses-vars": "off", // 防止<script setup>使用的变量<template>被标记为未使用，此规则仅在启用该 no-unused-vars 规则时有效
      "vue/v-slot-style": "off", // 强制执行 v-slot 指令样式
      "vue/no-mutating-props": "off", // 不允许改变组件 prop
      "vue/custom-event-name-casing": "off", // 为自定义事件名称强制使用特定大小写
      "vue/html-closing-bracket-newline": "off", // 在标签的右括号之前要求或禁止换行
      "vue/attribute-hyphenation": "off", // 对模板中的自定义组件强制执行属性命名样式：my-prop="prop"
      "vue/attributes-order": "off", // vue api使用顺序，强制执行属性顺序
      "vue/no-v-html": "off", // 禁止使用 v-html
      "vue/require-default-prop": "off", // 此规则要求为每个 prop 为必填时，必须提供默认值
      "vue/multi-word-component-names": "off", // 要求组件名称始终为 “-” 链接的单词
      "vue/no-setup-props-destructure": "off", // 禁止解构 props 传递给 setup
      "vue/block-order": ["off", ["script","template","style"]], // 强制执行 Vue 文件中块的顺序
      "vue/no-lone-template": "off", // 禁止使用独立的 <template> 元素
      "vue/no-multiple-slot-args": "off", // 禁止在 <slot> 中使用多个参数
      "vue/no-required-prop-with-default": "off", // 禁止在 prop 上使用默认值时将其标记为必需
      "vue/no-unused-vars": "off", // 禁止定义未使用的变量
      "vue/no-unused-components": "off", // 禁止定义未使用的组件
      "vue/no-undef-properties": "off", // 禁止使用未定义的属性
      "vue/no-undef-components": "off", // 禁止使用未定义的组件
      "vue/no-undef-directives": "off", // 禁止使用未定义的指令
      "vue/no-undef-refs": "off", // 禁止使用未定义的 refs
      "vue/no-undef-emits": "off", // 禁止使用未定义的 emits  
      "vue/order-in-components": "off", // 强制组件选项的顺序
      "vue/require-prop-types": "off", // 要求 prop 有类型
      "vue/require-valid-default-prop": "off", // 要求 prop 有有效的默认值
      "vue/valid-v-slot": "off", // 禁止使用无效的 v-slot
      "vue/valid-v-bind": "off", // 禁止使用无效的 v-bind
      "vue/valid-v-on": "off", // 禁止使用无效的 v-on
      "vue/valid-v-if": "off", // 禁止使用无效的 v-if
      "vue/valid-v-for": "off", // 禁止使用无效的 v-for
      "vue/valid-v-model": "off", // 禁止使用无效的 v-model
      "vue/valid-v-once": "off", // 禁止使用无效的 v-once
      "vue/valid-v-pre": "off", // 禁止使用无效的 v-pre
      "vue/valid-v-show": "off", // 禁止使用无效的 v-show
      "vue/valid-v-text": "off", // 禁止使用无效的 v-text
      "vue/valid-v-cloak": "off", // 禁止使用无效的 v-cloak
      "vue/valid-v-is": "off", // 禁止使用无效的 v-is
      "vue/valid-v-else": "off", // 禁止使用无效的 v-else
      "vue/valid-v-else-if": "off", // 禁止使用无效的 v-else-if
      "vue/valid-v-html": "off", // 禁止使用无效的 v-html
      "vue/this-in-template": "off", // 禁止在模板中使用 this
      "vue/no-setup-props-destructure": "off", // 禁止在 setup 中解构 props
      "vue/no-setup-refs-destructure": "off", // 禁止在 setup 中解构 refs
      "vue/no-setup-emit-destructure": "off", // 禁止在 setup 中解构 emit
      "vue/no-setup-define-emits-destructure": "off", // 禁止在 setup 中解构 defineEmits
      "vue/no-setup-define-props-destructure": "off", // 禁止在 setup 中解构 defineProps
      "vue/no-setup-define-model-destructure": "off", // 禁止在 setup 中解构 defineModel
      "vue/no-setup-define-models-destructure": "off", // 禁止在 setup 中解构 defineModels
      "vue/no-setup-define-models": "off", // 禁止在 setup 中使用 defineModels
      "vue/no-setup-define-model": "off", // 禁止在 setup 中使用 defineModel
      "vue/no-setup-define-emits": "off", // 禁止在 setup 中使用 defineEmits
      "vue/no-setup-define-props": "off", // 禁止在 setup 中使用 defineProps
      "vue/no-setup-define-emit": "off", // 禁止在 setup 中使用 defineEmit
      "vue/no-setup-define-prop": "off", // 禁止在 setup 中使用 defineProp
      "vue/no-setup-define-ref": "off", // 禁止在 setup 中使用 defineRef
      "vue/no-setup-define-refs": "off", // 禁止在 setup 中使用 defineRefs
    }
  },
  // TS/JS 文件配置
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      "@typescript-eslint": tsEslint
    },
    rules: {
      ...tsEslint.configs.recommended.rules,
      // typeScript (https://typescript-eslint.io/rules)
      "@typescript-eslint/no-unused-vars": "off", // 禁止定义未使用的变量
      "@typescript-eslint/no-empty-function": "off", // 禁止空函数
      "@typescript-eslint/prefer-ts-expect-error": "off", // 禁止使用 @ts-ignore
      "@typescript-eslint/ban-ts-comment": "off", // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
      "@typescript-eslint/no-inferrable-types": "off", // 可以轻松推断的显式类型可能会增加不必要的冗长
      "@typescript-eslint/no-namespace": "off", // 禁止使用自定义 TypeScript 模块和命名空间
      "@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型
      "@typescript-eslint/ban-types": "off", // 禁止使用特定类型
      "@typescript-eslint/no-var-requires": "off", // 允许使用 require() 函数导入模块
      "@typescript-eslint/no-non-null-assertion": "off", // 不允许使用后缀运算符的非空断言(!)
      "@typescript-eslint/no-unused-expressions": "off", // 不允许使用未使用的表达式
      "@typescript-eslint/no-unsafe-function-type": "off", // 不允许使用未使用的表达式
    }
  },
  {
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      "prettier/prettier": "off"
    }
  }
]);
