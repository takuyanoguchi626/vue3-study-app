<script setup lang="ts">
import { RouterView } from "vue-router";
import StoreProvider from "./StoreProvider.vue";
</script>

<template>
  <StoreProvider>
    <RouterView />
  </StoreProvider>
</template>

<style></style>
