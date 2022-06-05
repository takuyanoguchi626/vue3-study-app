<script setup lang="ts">
import { Item } from "@/types/Item";
import { OrderItem } from "@/types/OrderItem";
import { Topping } from "@/types/Topping";
import { computed, onMounted, reactive, ref } from "@vue/runtime-core";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
//URIから取得した商品のID
const itemId = route.params.itemId;
/**
 * APIから商品情報を取得する.
 */
onMounted(async () => {
  const res = await axios.get(
    `http://153.127.48.168:8080/ecsite-api/item/${itemId}`
  );
  const apiItem = res.data.item;
  console.log(apiItem);
  orderItem.value.item = new Item(
    apiItem.id,
    apiItem.type,
    apiItem.name,
    apiItem.description,
    apiItem.priceM,
    apiItem.priceL,
    apiItem.imagePath,
    apiItem.deleted,
    apiItem.toppingList
  );
});
//注文する商品の情報
const orderItem = ref(
  new OrderItem(
    0,
    0,
    0,
    1,
    "M",
    new Item(0, "", "", "", 0, 0, "", false, [new Topping(0, "", "", 0, 0)]),
    []
  )
);
//選択したトッピングのIDの配列
const chooseToppingIdList = ref<Array<number>>([]);
const calcTotalPrice = computed(() => {
  let totalPrice = 0;
  let toppingTotalPrice = 0;
  if (orderItem.value.size === "M") {
    for (const toppingId of chooseToppingIdList.value) {
      const topping = orderItem.value.item.toppingList.find(
        (topping) => toppingId === topping.id
      );
      if (topping) {
        toppingTotalPrice += topping?.priceM;
      }
    }
    totalPrice =
      (orderItem.value.item.priceM + toppingTotalPrice) *
      orderItem.value.quantity;
  }
  if (orderItem.value.size === "L") {
    for (const toppingId of chooseToppingIdList.value) {
      const topping = orderItem.value.item.toppingList.find(
        (topping) => toppingId === topping.id
      );
      if (topping) {
        toppingTotalPrice += topping?.priceL;
      }
    }
    totalPrice =
      (orderItem.value.item.priceL + toppingTotalPrice) *
      orderItem.value.quantity;
  }
  return totalPrice;
});
</script>

<template>
  <div>商品詳細</div>
  <div>
    <div>{{ orderItem.item.name }}</div>
    <img :src="orderItem.item.imagePath" alt="" />
    <div>{{ orderItem.item.description }}</div>
    <input
      type="radio"
      name="size"
      id="priceM"
      value="M"
      v-model="orderItem.size"
    />
    <label for="priceM">
      {{ orderItem.item.formatPriceM }}
    </label>
    <input
      type="radio"
      name="size"
      id="priceL"
      value="L"
      v-model="orderItem.size"
    />
    <label for="priceL">
      {{ orderItem.item.formatPriceL }}
    </label>
    <div v-for="topping of orderItem.item.toppingList" :key="topping.id">
      <input
        type="checkbox"
        v-model="chooseToppingIdList"
        :id="topping.id"
        :value="topping.id"
      />
      <label :for="topping.id">
        {{ topping.name }}
      </label>
    </div>
    <div>
      <span>数量：</span>
      <select name="quantity" v-model="orderItem.quantity">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
    <div>
      <div>合計金額</div>
      <div>{{ calcTotalPrice }}</div>
    </div>
  </div>
</template>

<style scoped></style>
