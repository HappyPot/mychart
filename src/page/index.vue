<template>
  <div class="h-[100%]">
    <div class="flex h-[100%] w-[100%]">
      <!-- 左边 -->
      <div class="aside_left min-w-[384px] h-[100%] pb-[2vh] pt-[2vh] relative flex flex-col  overflow-hidden"
        :style="dArrowLeft">
        <div class="dArrowLeft cursor-pointer" @click="packUp" v-if="!dArrowLeft">
          <el-icon>
            <DArrowLeft />
          </el-icon>
        </div>
        <div class="">
          <el-button type="primary" :icon="Plus" size="large" style="width: 200px; margin: 0 auto; display: flex"
            plain>New Chat</el-button>
        </div>
        <div class="mt-[2vh] h-[100%]">
          <div class="max-h-[681px] overflow-auto my_scroll_left">
            <div class="flex items-center mx-[10px] my-[0px] px-[12px] py-[10px] cursor-pointer"
              :class="item.checked ? 'text-[#409eff]' : ''" v-for="(item, index) in historyList" :key="index"
              @click="selectRecord(index)">
              <el-icon style="
                                                                        width: 24px;
                                                                        height: 32px;
                                                                        color: #666666;
                                                                        margin-right: 0.5vw;
                                                                      ">
                <ChatSquare style="width: 24px; height: 32px" />
              </el-icon>
              <div class="max-w-[260px] truncate">{{ item.title }}</div>
              <el-popconfirm title="Are you sure to delete this?" @confirm="deleteHistory">
                <template #reference>
                  <div class="cursor-pointer">
                    <el-icon style="display: block">
                      <CircleClose />
                    </el-icon>
                  </div>
                </template>
              </el-popconfirm>
            </div>
          </div>

        </div>
        <div class="">
          <el-divider />
          <el-button style="width: 200px; margin: 0 auto; display: flex" type="success" size="large">
            Upgrade to plus now</el-button>
          <div class="font-semibold text-center" style="width: 200px; margin: 0 auto; margin-top: 1vh">
            $20 per month
          </div>
        </div>
      </div>
      <!-- 右边 -->
      <div class="aside_right flex-1 min-w-[1135px] p-[2.2vh] pl-[2vw] pr-[2vw]  relative " :style="dArrowRight">
        <div class="dArrowRight cursor-pointer" @click="open" v-if="dArrowLeft">
          <el-icon>
            <DArrowRight />
          </el-icon>
        </div>
        <!-- 导航 -->
        <div class="nav flex justify-between items-center">
          <div class="flex items-center">
            <el-image style="width: 35px; height: 35px; border-radius: 100%" :src="url" :fit="fit" />
            <span class="ml-2 text-[#666666]">Jumms</span>
          </div>
          <div class="cursor-pointer" @click="toggle()">
            <Sunny style="width: 24px; height: 32px" v-if="!isDark" />
            <Moon style="width: 24px; height: 32px" class="bg-black" v-else />
          </div>
        </div>
        <!-- 内容 -->
        <div class="mt-[4vh]">
          <!-- 问题列表 -->
          <div class="my_question p-[2vw] pr-[1.5vw]" style="border-radius: 16px">
            <div ref="scrollContainer"
              class="my_question pr-[0.5vw] my_scroll_right bg-[white] h-[100vh] max-h-[600px] overflow-auto"
              style="border-radius: 16px">
              <template v-if="qaList.length > 0">
                <div v-for="(item, index) in qaList" :key="index">
                  <div class="mb-[1.5vh]" v-if="item.type == 'q'">
                    <el-tag effect="dark" round type="success">问题：</el-tag>
                    <div class="p-[0.5vw]">{{ item.value }}</div>
                  </div>
                  <div class="my_answer p-[1vw] mb-[1.5vh]" style="border-radius: 16px" v-if="item.type == 'a'">
                    <div class="">
                      <el-tag effect="dark" round>回答：</el-tag>
                    </div>
                    <div class="p-[0.5vw]">{{ item.value }}</div>
                  </div>
                </div>
              </template>
              <div v-else>
                <div class="mx-auto my-0 mb-[7vh] mt-[7vh] flex justify-center items-center">
                  <img src="../assets/dm.png" alt="" class="w-[2vw] h-[2vw]" />
                  <h3 style="font-weight: bold" class="ml-[0.5vw]">MyChat</h3>
                </div>

                <div class="flex items-center justify-around">
                  <div class="empty_item p-[1.5vw] h-[42vh] w-[25%]" style="border-radius: 16px">
                    <img src="../assets/hb.png" alt="" class="w-[2vw] h-[2vw] mx-auto my-0" />
                    <div class="mt-[2vh]">
                      <div class="empty_item_line">
                        1,An advanced online playground for Tailwind CSS,
                      </div>
                      <div class="empty_item_line">
                        2,Customizing your tailwind.config.js file
                      </div>
                      <div class="empty_item_line">
                        3,Extracting classes with @apply
                      </div>
                      <div class="empty_item_line">
                        4,Code completion with instant preview
                      </div>
                    </div>
                  </div>
                  <div class="empty_item p-[1.5vw] h-[42vh] w-[25%]" style="border-radius: 16px">
                    <img src="../assets/shu.png" alt="" class="w-[2vw] h-[2vw] mx-auto my-0" />
                    <div class="mt-[2vh]">
                      <div class="empty_item_line">
                        1,An advanced online playground for Tailwind CSS,
                      </div>
                      <div class="empty_item_line">
                        2,Customizing your tailwind.config.js file
                      </div>
                      <div class="empty_item_line">
                        3,Extracting classes with @apply
                      </div>
                      <div class="empty_item_line">
                        4,Code completion with instant preview
                      </div>
                    </div>
                  </div>
                  <div class="empty_item p-[1.5vw] h-[42vh] w-[25%]" style="border-radius: 16px">
                    <img src="../assets/meting.png" alt="" class="w-[2vw] h-[2vw] mx-auto my-0" />
                    <div class="mt-[2vh]">
                      <div class="empty_item_line">
                        1,An advanced online playground for Tailwind CSS,
                      </div>
                      <div class="empty_item_line">
                        2,Customizing your tailwind.config.js file
                      </div>
                      <div class="empty_item_line">
                        3,Extracting classes with @apply
                      </div>
                      <div class="empty_item_line">
                        4,Code completion with instant preview
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 输入框 -->
          <div class="mt-[3vh] flex items-center">
            <div class="w-[100%] mr-[2vw]">
              <el-input v-model="questionValue" :rows="4" type="textarea" placeholder="Please input" />
            </div>
            <div>
              <el-button type="primary" size="large" @click="putQuestions">提问</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog v-model="centerDialogVisible" title="登录" width="30%" align-center>
      <div class="pr-[2vw]">
        <el-form :model="form" :rules="rules" label-width="120px">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" />
          </el-form-item>
        </el-form>
      </div>
      <div class="text-center">
        <el-button type="primary" @click="register"> 注册 </el-button>
        <el-button type="primary" @click="login"> 登录 </el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script setup>
import { onMounted, ref, reactive, nextTick, toRaw } from "vue";
import { useToggle } from "@vueuse/shared";
import { useDark } from "@vueuse/core";
import { Sunny, Moon, Plus } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import tx from "../assets/tx.png";
const url = ref(tx);
const isDark = useDark({
  // 存储到localStorage/sessionStorage中的Key 根据自己的需求更改
  storageKey: "useDarkKEY",
  // 暗黑class名字
  valueDark: "dark",
  // 高亮class名字
  valueLight: "light",
});
const toggle = useToggle(isDark);
// 登录需要传的参数
const form = reactive({
  name: "",
  password: "",
});
// 表单校验规则
const rules = reactive({
  name: [{ required: true, message: "Please input name", trigger: "blur" }],
  password: [
    {
      required: true,
      message: "Please input password",
      trigger: "blur",
    },
  ],
});
// 登录弹框控制
const centerDialogVisible = ref(false);
// 问答详情列表
const qaList = ref([]);
// 历史提问列表
const historyList = ref([]);
// 文本域问题
const questionValue = ref(
  `Tailwind CSS works by scanning all of your HTML files, JavaScript components, and.`
);

//接入登陆接口时需要更新该变量，目前只是测试使用
const token = ref("");

// 1，进入页面加载
onMounted(() => {
  getHistoryList();
});

const dArrowLeft = ref(null);
const dArrowRight = ref(null);
/**
 * 收起
 */
const packUp = () => {
  dArrowLeft.value = {
    width: 0,
    "min-width": 0,
  };
  dArrowRight.value = {
    width: "100%",
  };
};
/**
 * 打开
 */
const open = () => {
  dArrowLeft.value = null;
  dArrowRight.value = null;
};
/**
 * 获取左侧历史提问列表
 */
const getHistoryList = () => {
  // 假数据以下（编写接口位置）
  for (let i = 0; i < 20; i++) {
    let obj = {
      checked: false,
      title: `Element,一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库 指南
            了解设计指南,帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。 查看详情 组件 使用组件 Demo 快速体`,
    };
    historyList.value.push(obj);
  }
  // 假数据以上
};
/**
 * 提问
 */
const putQuestions = () => {
  // 如果token没有值，说明没有登录，需要提示用户登录
  if (!token.value) {
    centerDialogVisible.value = true;
    return;
  } else {
    // 请求chatgpt接口返回数据（编写接口位置）
    qaList.value.push({
      type: "q",
      value: questionValue.value,
    });
    nextTick(() => {
      scrollToBottom();
    });
    setTimeout(() => {
      qaList.value.push({
        type: "a",
        value:
          "人员搭建逻辑清晰、结构合理且高效易用的产品。 查看详情 组件 使用组件 Demo 快速体",
      });
      nextTick(() => {
        scrollToBottom();
      });
    }, 1000);
  }
};
/**
 * 登录方法
 */
const login = () => {
  // 调用登录接口,以下为模拟登录
  token.value = form.name;
  centerDialogVisible.value = false;
  ElMessage({
    message: "登录成功",
    type: "success",
  });
};
/**
 * 注册方法
 */
const register = () => {
  // 调用注册接口
};
/**
 * 删除历史消息
 */
const deleteHistory = () => {
  //调用删除接口，删除成功后再调用回去历史记录列表
  getHistoryList();
};
/**
 * 控制滚动条
 */
const scrollContainer = ref(null);
const scrollToBottom = () => {
  const container = scrollContainer.value;
  container.scrollTop = container.scrollHeight;
};
/**
 * 选择记录
 */
const selectRecord = (index) => {
  historyList.value.map((item) => (item["checked"] = false));
  historyList.value[index]["checked"] = true;
  console.log(toRaw(historyList.value));
};
</script>
<style scoped>
.dArrowLeft {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  flex-direction: ;
}

.dArrowRight {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.aside_left,
.aside_right {
  transition: 0.5s all ease;
}

.empty_item_line {
  padding: 0.5vw;
  border-radius: 16px;

  margin: 0.5vw 0;
}
</style>
