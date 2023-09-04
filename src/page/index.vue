<template>
  <div class="wrap">

    <div class="flex align-middle">
      <!-- 左边 -->
      <div class="aside_left min-w-[220px] w-[20%] p-[1vw] h-[100vh]">
        <div class=" m-auto">
          <el-button :icon="Plus" class="flex w-[11vw] m-auto" plain>New Chat</el-button>
        </div>
      </div>
      <!-- 右边 -->
      <div class="aside_right w-[80%] p-[0.5vw] pl-[1vw] pr-[1vw]">
        <!-- 导航 -->
        <div class="nav flex justify-between items-center">
          <div class="flex items-center">
            <el-image style="width: 35px; height: 35px;border-radius: 100%;" :src="url" :fit="fit" />
            <span class="ml-2 text-[#666666]">Jumms</span>
          </div>
          <div class="cursor-pointer " @click="toggle()">
            <Sunny style="width: 1.5em; height: 2em; " v-if="!isDark" />
            <Moon style="width: 1.5em; height: 2em; " class="bg-black" v-else />
          </div>


        </div>
        <!-- 内容 -->
        <div class="mt-[1vh]">
          <!-- 问题列表 -->
          <div class="w-[99%] bg-[white] m-auto h-[20vh]">啊啊啊</div>
          <!-- 输入框 -->
          <div></div>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import { ref } from "vue";
import { useToggle } from '@vueuse/shared'
import { useDark } from "@vueuse/core";
import { Sunny, Moon, Plus } from '@element-plus/icons-vue'
const theme = ref(false)
const url =
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
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
