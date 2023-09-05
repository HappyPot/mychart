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
            <div class="flex items-center min-h-[6vh] cursor-pointer" v-for="(item, index) in historyList" :key="i">
              <ChatSquare style="width: 24px; height: 32px; color:#666666;margin-right: 1vw;" />
              <div class="max-w-[260px] truncate">{{ item.title }}
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
          <div class="my_question p-[2vw]">
            <div class="my_question  my_scroll_right  bg-[white]  h-[100vh]  max-h-[600px] overflow-auto"
              style="border-radius: 16px;">
              <div v-for="(item, index) in qaList" :key="index">
                <div class="mb-[1.5vh]" v-if="item.type == 'q'">
                  <el-tag effect="dark" round type="success">问题：</el-tag>
                  <div class="p-[0.5vw]">{{ item.value }}</div>
                </div>
                <div class="my_answer p-[1vw] mb-[1.5vh]" style="border-radius: 16px;" v-if="item.type == 'a'">
                  <div class="">
                    <el-tag effect="dark" round>回答：</el-tag>
                  </div>
                  <div class="p-[0.5vw]">{{ item.value }}</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 输入框 -->
          <div class="mt-[4vh] flex items-center">
            <div class="w-[70vw] mr-[2vw]">
              <el-input v-model="textarea" :rows="3.5" type="textarea" placeholder="Please input" />
            </div>
            <div>
              <el-button type="primary" size="large" @click="putQuestions">提问</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
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

// 问答详情列表
const qaList = ref([])
// 历史提问列表
const historyList = ref([])

onMounted(() => {
  getHistoryList()
})

/**
 * 获取左侧历史提问列表
 */
const getHistoryList = () => {
  // 假数据
  let obj = {
    title: `Element,一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库 指南
            了解设计指南,帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。 查看详情 组件 使用组件 Demo 快速体`
  }
  for (let i = 0; i < 2; i++) {
    historyList.value.push(obj)
  }
}
/**
 * 提问
 */
const putQuestions = () => {
  // 请求chatgpt接口返回数据
  qaList.value.push({
    type: "q",
    value: `Tailwind CSS works by scanning all of your HTML files, JavaScript components, and
    any
    other templates
    for class names, generating the corresponding styles and then writing them to a static CSS file.
    It's fast, flexible, and reliable — with zero-runtime.`
  })
  setTimeout(() => {
    qaList.value.push({
      type: "a",
      value: "yes"
    })
  }, 1000)
}
</script>
<style scoped></style>
