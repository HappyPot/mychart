<template>
  <div class="wrap">

    <div class="container flex align-middle">
      <!-- 左边 -->
      <div class="aside_left w-[20%]">
        <el-button :icon="Plus" class="w-[50%] m-auto" plain>New Chat</el-button>
      </div>
      <!-- 右边 -->
      <div class="aside_right bg-[#f8f8fc] w-[80%]">
        <!-- 导航 -->
        <div class="nav">
          <div class="cursor-pointer" @click="toggle()">
            <Sunny style="width: 1.5em; height: 2em; " v-if="!isDark" />
            <Moon style="width: 1.5em; height: 2em; " class="bg-black" v-else />
          </div>
          <!-- 内容 -->
          <div class="bg-#f8f8f8">bbbb</div>
        </div>

      </div>
    </div>

  </div>
</template>
<script setup>
import { ref } from "vue";
import { useToggle } from '@vueuse/shared'
import { useDark } from "@vueuse/core";
import { Sunny, Moon,Plus } from '@element-plus/icons-vue'
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
