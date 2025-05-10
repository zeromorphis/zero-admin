/*
 * @Author: YT
 * @Date: 2025-05-10 10:59:59
 * @LastEditors: YT
 * @LastEditTime: 2025-05-10 16:30:25
 * @Description: 当时只道是寻常
 * @FilePath: /dev/my-vue-app/src/plugins/elementPlus/index.ts
 */
import type { App } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import ElementPlus from "element-plus";
// element css
import "element-plus/dist/index.css";
// element dark css
import "element-plus/theme-chalk/dark/css-vars.css";

export function registerGlobElementPlusComp(app: App<Element>) {
  app.use(ElementPlus);
  Object.keys(ElementPlusIconsVue).forEach((key) => {
      app.component(key, 
        ElementPlusIconsVue[
          key as keyof typeof ElementPlusIconsVue
        ]
    );
  });
}
