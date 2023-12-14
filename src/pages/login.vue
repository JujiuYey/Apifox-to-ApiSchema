<template>
  <div> login </div>
</template>

<script setup lang="ts">
import API from '@/api/index';
import { onMounted } from 'vue';
const requestRes = async () => {
  let result = await API.login('zhangsan', '123456');
  console.log('🚀 ~ file: login.vue ~ line 10 ~ requestRes ~ result', result);
};

onMounted(() => {
  requestRes();
});
</script>

<style scoped></style>
