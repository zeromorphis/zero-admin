/*
 * @Author: YF18227349 18227349@qq.com
 * @Date: 2025-05-10 10:40:44
 * @LastEditors: YF18227349 18227349@qq.com
 * @LastEditTime: 2025-05-10 10:55:00
 * @FilePath: /dev/Geeker-Admin-Yuz/src/languages/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { App } from "vue";
import { createI18n } from "vue-i18n";
import { getBrowserLang } from "@/utils";

import zh from "./modules/zh";
import en from "./modules/en";

const i18n = createI18n({
  // Use Composition API, Set to false
  allowComposition: true,
  legacy: false,
  locale: getBrowserLang(),
  messages: {
    zh,
    en
  }
});

export function setupI18n(app: App<Element>) {
  app.use(i18n);
}

export default i18n;
