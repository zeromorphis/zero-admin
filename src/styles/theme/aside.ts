/*
 * @Author: YT
 * @Date: 2025-05-10 10:40:44
 * @LastEditors: YT
 * @LastEditTime: 2025-05-10 16:14:08
 * @Description: 当时只道是寻常
 * @FilePath: /dev/my-vue-app/src/styles/theme/aside.ts
 */
import type { Theme } from "@/hooks/interface";

export const asideTheme: Record<Theme.ThemeType, { [key: string]: string }> = {
  light: {
    "--el-aside-logo-text-color": "#303133",
    "--el-aside-border-color": "#e4e7ed"
  },
  inverted: {
    "--el-aside-logo-text-color": "#dadada",
    "--el-aside-border-color": "#414243"
  },
  dark: {
    "--el-aside-logo-text-color": "#dadada",
    "--el-aside-border-color": "#414243"
  }
};
