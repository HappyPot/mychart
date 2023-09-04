<template>
  <div class="wrap">

    <div class="flex align-middle">
      <!-- 左边 -->
      <div class="aside_left min-w-[342px] w-[20%] p-[1vw] h-[100vh] pl-[1.5vw] pr-[1.5vw]">
        <div class=" m-auto">
          <el-button type="primary" :icon="Plus" size="large" style="width: 200px; margin: 0 auto; display: flex;"
            plain>New
            Chat</el-button>
        </div>
        <div class="mt-[2vh]">
          <div class="max-h-[653px] overflow-auto h-[100vh] my_scroll_left">
            <div class="flex items-center min-h-[6vh] cursor-pointer" v-for="i in 20" :key="i">
              <ChatSquare style="width: 24px; height: 32px; color:#666666;margin-right: 1vw;" />
              <div class="max-w-[260px] truncate">Element,一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库 指南
                了解设计指南,帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。 查看详情 组件 使用组件 Demo 快速体
              </div>
            </div>
          </div>
          <el-divider />
          <el-button style="width: 200px; margin: 0 auto; display: flex;" type="success" size="large" plain> Upgrade to
            plus
            now</el-button>
          <div class="font-semibold text-center " style="width: 200px; margin: 0 auto;margin-top: 1vh;">
            $20 per month
          </div>
          <el-divider />
        </div>
      </div>
      <!-- 右边 -->
      <div class="aside_right w-[80%] p-[2.2vh] pl-[2vw] pr-[2vw] min-w-[900px]">
        <!-- 导航 -->
        <div class="nav flex justify-between items-center">
          <div class="flex items-center">
            <el-image style="width: 35px; height: 35px;border-radius: 100%;" :src="url" :fit="fit" />
            <span class="ml-2 text-[#666666]">Jumms</span>
          </div>
          <div class="cursor-pointer " @click="toggle()">
            <Sunny style="width: 24px; height: 32px; " v-if="!isDark" />
            <Moon style="width: 24px; height: 32px; " class="bg-black" v-else />
          </div>
        </div>
        <!-- 内容 -->
        <div class=" mt-[3vh]">
          <!-- 问题列表 -->
          <div class="my_question my_scroll_right  bg-[white] m-auto h-[100vh] p-[2vw] max-h-[700px] overflow-auto"
            style="border-radius: 16px;">
            <div v-for="i in 10" :key="i">
              <div class="mb-[1.5vh]">
                <el-tag effect="dark" round type="success">问题：</el-tag>
                <div class="p-[0.5vw]">Tailwind CSS works by scanning all of your HTML files, JavaScript components, and
                  any
                  other templates
                  for class names, generating the corresponding styles and then writing them to a static CSS file.
                  It's fast, flexible, and reliable — with zero-runtime.</div>
              </div>
              <div class="my_answer p-[1vw] mb-[1.5vh]" style="border-radius: 16px;">
                <div class="">
                  <el-tag effect="dark" round>回答：</el-tag>
                </div>
                <div class="p-[0.5vw]">Tailwind CSS works by scanning all of your HTML files, JavaScript components, and
                  any
                  other templates
                  for class names, generating the corresponding styles and then writing them to a static CSS file.
                  It's fast, flexible, and reliable — with zero-runtime.</div>
              </div>
            </div>

          </div>
          <!-- 输入框 -->
          <div class="mt-[4vh] flex items-center">
            <div class="w-[70vw] mr-[2vw]">
              <el-input v-model="textarea" :rows="3.5" type="textarea" placeholder="Please input" />
            </div>
            <div>
              <el-button type="primary" size="large">提问</el-button>
            </div>
          </div>
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
<style scoped>
.gradient_border {
  --color-1: rebeccapurple;
  --color-2: crimson;
  --border-radius: 1.25rem;
  --border-width: 0.5rem;
  width: 100%;
  padding: 2rem;
  position: relative;
  border-radius: var(--border-radius);
}

.gradient_border *+* {
  margin-top: 0.5rem;
}

.gradient_border.-using-border-image {
  border-width: var(--border-width);
  border-style: solid;
  -o-border-image: linear-gradient(135deg, var(--color-1), var(--color-2)) 1 stretch;
  border-image: linear-gradient(135deg, var(--color-1), var(--color-2)) 1 stretch;
}
</style>
