<template>
  <div class="wrap h-[100vw]">
    <div class="demo">
      <div>这是一个深色模式的切换demo</div>
      <el-switch inline-prompt v-model="theme" @click="toggle()">
      </el-switch>
    </div>
    <div class="nav dark"></div>
    <div class="container">
      <!-- 左边 -->
      <div class="aside_left"></div>
      <!-- 右边 -->
      <div class="aside_right"></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useToggle } from '@vueuse/shared'
import { useDark } from "@vueuse/core";

const theme = ref(false)
const isDark = useDark({
  // 存储到localStorage/sessionStorage中的Key 根据自己的需求更改
  storageKey: 'useDarkKEY',
  // 暗黑class名字
  valueDark: 'dark',
  // 高亮class名字
  valueLight: 'light',
})

const toggle = useToggle(isDark);

</script>
<style scoped></style>
