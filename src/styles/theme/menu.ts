/*
 * @Author: YT
 * @Date: 2025-05-10 10:40:44
 * @LastEditors: YT
 * @LastEditTime: 2025-05-10 16:14:19
 * @Description: 当时只道是寻常
 * @FilePath: /dev/my-vue-app/src/styles/theme/menu.ts
 */
import type { Theme } from "@/hooks/interface";

export const menuTheme: Record<Theme.ThemeType, { [key: string]: string }> = {
  light: {
    "--el-menu-bg-color": "#ffffff",
    "--el-menu-hover-bg-color": "#cccccc",
    "--el-menu-active-bg-color": "var(--el-color-primary-light-9)",
    "--el-menu-text-color": "#333333",
    "--el-menu-active-color": "var(--el-color-primary)",
    "--el-menu-hover-text-color": "#333333",
    "--el-menu-horizontal-sub-item-height": "50px"
  },
  inverted: {
    "--el-menu-bg-color": "#191a20",
    "--el-menu-hover-bg-color": "#000000",
    "--el-menu-active-bg-color": "#000000",
    "--el-menu-text-color": "#bdbdc0",
    "--el-menu-active-color": "#ffffff",
    "--el-menu-hover-text-color": "#ffffff",
    "--el-menu-horizontal-sub-item-height": "50px"
  },
  dark: {
    "--el-menu-bg-color": "#141414",
    "--el-menu-hover-bg-color": "#000000",
    "--el-menu-active-bg-color": "#000000",
    "--el-menu-text-color": "#bdbdc0",
    "--el-menu-active-color": "#ffffff",
    "--el-menu-hover-text-color": "#ffffff",
    "--el-menu-horizontal-sub-item-height": "50px"
  }
};
