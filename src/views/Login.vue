<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");

const login = () => {
  router.push("/itemList");
};
</script>

<template>
  <div>ログイン</div>
  <form>
    <div>メールアドレス：</div>
    <input type="email" v-model="email" />
    <div>パスワード：</div>
    <input type="password" v-model="password" />
    <div>
      <button type="button" @click="login">登録</button>
    </div>
  </form>
</template>

<style scoped></style>
