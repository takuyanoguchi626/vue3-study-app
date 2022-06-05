<script setup lang="ts">
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";

type User = {
  name: string;
  email: string;
  password: string;
  address: string;
  telephone: number;
};

const router = useRouter();

const userData = reactive<User>({
  name: "",
  email: "",
  password: "",
  address: "",
  telephone: 0,
});

const register = () => {
  console.log(userData);
  router.push("/login");
};
</script>

<template>
  <div>会員登録</div>
  <form @submit="register">
    <div>名前：</div>
    <input type="text" v-model="userData.name" />
    <div>メールアドレス：</div>
    <input type="email" v-model="userData.email" />
    <div>パスワード：</div>
    <input type="password" v-model="userData.password" />
    <div>住所：</div>
    <input type="text" v-model="userData.address" />
    <div>電話番号：</div>
    <input type="number" v-model="userData.telephone" />
    <div>
      <button type="button" @click="register">登録</button>
    </div>
  </form>
</template>

<style scoped></style>
