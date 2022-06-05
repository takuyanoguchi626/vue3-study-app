/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Item } from "@/types/Item";
import { InjectionKey, ref } from "vue";
import axios from "axios";

export const useItemList = () => {
  const itemList = ref<Array<Item>>([]);

  const setItemList = async () => {
    const res = await axios.get(
      "http://153.127.48.168:8080/ecsite-api/item/items/noodle"
    );
    console.log(res);

    for (const item of res.data.items) {
      itemList.value.push(
        new Item(
          item.id,
          item.type,
          item.name,
          item.description,
          item.priceM,
          item.priceL,
          item.imagePath,
          item.deleted,
          item.toppingList
        )
      );
    }
  };

  return {
    itemList,
    setItemList,
  };
};

type storeType = ReturnType<typeof useItemList>;
export const itemListKey: InjectionKey<storeType> = Symbol("itemList");
