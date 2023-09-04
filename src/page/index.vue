<template>
  <!--  -->
  <div class="wrap h-[100vw] bg-red-50">
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

defineProps({
  msg: String,
});

const count = ref(0);
</script>
<style scoped>
.aside_left{
}
</style>
