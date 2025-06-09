<template>
  <div class="row my-4">
    <productItem
      v-for="product in data.products"
      :key="product.id"
      :product="product"
    ></productItem>
  </div>
</template>
<script setup>
import productItem from "./productItem.vue";
import { useCartStore } from "../store/useCartStore";
const data = useCartStore();
</script>
