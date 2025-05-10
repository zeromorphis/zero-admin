/*
 * @Author: YT
 * @Date: 2025-05-10 10:40:44
 * @LastEditors: YT
 * @LastEditTime: 2025-05-10 11:16:14
 * @Description: 当时只道是寻常
 * @FilePath: /dev/Geeker-Admin-Yuz/src/stores/index.ts
 */
import type { App } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// pinia persist
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export function setupStore(app: App<Element>) {
  app.use(pinia);
}

export default pinia;
