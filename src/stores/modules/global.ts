/*
 * @Author: YT
 * @Date: 2025-05-10 10:40:44
 * @LastEditors: YT
 * @LastEditTime: 2025-05-10 16:13:33
 * @Description: 当时只道是寻常
 * @FilePath: /dev/my-vue-app/src/stores/modules/global.ts
 */
import { defineStore } from "pinia";
import type { GlobalState } from "@/stores/interface";
import { DEFAULT_PRIMARY } from "@/config";
import piniaPersistConfig from "@/stores/helper/persist";

export const useGlobalStore = defineStore("zero-global", {
  // 修改默认值之后，需清除 localStorage 数据
  state: (): GlobalState => {
    return {
      // 布局模式 (纵向：vertical | 经典：classic | 横向：transverse | 分栏：columns)
      layout: "vertical",
      // element 组件大小
      assemblySize: "default",
      // 当前系统语言
      language: null,
      // 当前页面是否全屏
      maximize: false,
      // 主题颜色
      primary: DEFAULT_PRIMARY,
      // 深色模式
      isDark: false,
      // 灰色模式
      isGrey: false,
      // 色弱模式
      isWeak: false,
      // 侧边栏反转
      asideInverted: false,
      // 头部反转
      headerInverted: false,
      // 折叠菜单
      isCollapse: false,
      // 菜单手风琴
      accordion: true,
      // 页面水印
      watermark: false,
      // 面包屑导航
      breadcrumb: true,
      // 面包屑导航图标
      breadcrumbIcon: true,
      // 标签页
      tabs: true,
      // 标签页图标
      tabsIcon: true,
      // 页脚
      footer: true,
    };
  },
  getters: {},
  actions: {
    // Set GlobalState
    setGlobalState(...args: ObjToKeyValArray<GlobalState>) {
      this.$patch({ [args[0]]: args[1] });
    },
  },
  persist: piniaPersistConfig("zero-global"),
});
