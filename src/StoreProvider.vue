<script setup lang="ts">
import { provide } from "vue";
import { itemListKey, useItemList } from "@/providers/useItemListProvider";

provide(itemListKey, useItemList());
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped></style>
