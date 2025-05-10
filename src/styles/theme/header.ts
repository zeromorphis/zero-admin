/*
 * @Author: YT
 * @Date: 2025-05-10 10:40:44
 * @LastEditors: YT
 * @LastEditTime: 2025-05-10 16:14:14
 * @Description: 当时只道是寻常
 * @FilePath: /dev/my-vue-app/src/styles/theme/header.ts
 */
import type { Theme } from "@/hooks/interface";

export const headerTheme: Record<Theme.ThemeType, { [key: string]: string }> = {
  light: {
    "--el-header-logo-text-color": "#303133",
    "--el-header-bg-color": "#ffffff",
    "--el-header-text-color": "#303133",
    "--el-header-text-color-regular": "#606266",
    "--el-header-border-color": "#e4e7ed"
  },
  inverted: {
    "--el-header-logo-text-color": "#dadada",
    "--el-header-bg-color": "#191a20",
    "--el-header-text-color": "#e5eaf3",
    "--el-header-text-color-regular": "#cfd3dc",
    "--el-header-border-color": "#414243"
  },
  dark: {
    "--el-header-logo-text-color": "#dadada",
    "--el-header-bg-color": "#141414",
    "--el-header-text-color": "#e5eaf3",
    "--el-header-text-color-regular": "#cfd3dc",
    "--el-header-border-color": "#414243"
  }
};
