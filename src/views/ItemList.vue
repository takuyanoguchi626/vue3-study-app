<script setup lang="ts">
import { itemListKey } from "@/providers/useItemListProvider";
import { Item } from "@/types/Item";
import { inject, onMounted, ref } from "@vue/runtime-core";
import { RouterLink } from "vue-router";

const useItemList = inject(itemListKey);

if (!useItemList) {
  throw new Error("useItemList is undefined!!!!!!");
}

let currentItemList = ref<Array<Item>>([]);

onMounted(() => {
  useItemList.setItemList();
  currentItemList.value = useItemList.itemList.value;
});
</script>

<template>
  <div>商品一覧</div>
  <div v-for="(item, index) of currentItemList" :key="index">
    <RouterLink :to="'/itemDetail/' + item.id">
      <div>{{ item.name }}</div>
      <img :src="item.imagePath" alt="" />
    </RouterLink>
  </div>
</template>

<style scoped></style>
