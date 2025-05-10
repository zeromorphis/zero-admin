import { createApp } from "vue";
import App from "./App.vue";

import "@/styles/index.scss"; // 所有样式统一注入
import "virtual:svg-icons-register"; // svg icons

import router, { setupRouter } from "@/routers";
import { setupStore } from "@/stores";
import { setupI18n } from "@/languages";
import { registerDirectives } from "@/directives";
import { registerGlobElementPlusComp } from "@/plugins/elementPlus";
import errorHandler from "@/utils/errorHandler";

async function bootstrap() {
  const app = createApp(App);

  // 错误处理
  app.config.errorHandler = errorHandler;

  // 注册全局指令
  registerDirectives(app);

  // 配置Pinia
  setupStore(app);

  // 配置i18n
  setupI18n(app);

  // 配置路由
  setupRouter(app);

  // 注册全局ElementPlus组件
  registerGlobElementPlusComp(app);

  // 路由准备完毕再挂载
  await router.isReady().then(() => app.mount("#app"));
}

void bootstrap();
