<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const PushRegisterUser = () => {
  router.push("/registerUser");
};
</script>

<template>
  <div>TopPage</div>
  <button @click="PushRegisterUser">会員登録ページへ</button>
</template>

<style scoped></style>
