<template>
  <div class="col-md-4 mb-2">
    <div class="card">
      <img
        height="200"
        :src="props.product.image"
        class="card-img-top"
        alt=""
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
          quia?
        </p>
        <p>
          <span class="fs-4 badge bg-danger">${{ product.price }}</span>
        </p>
        <button @click="data.addToCart(product)" class="btn btn-primary">
          <i class="bi bi-cart-check"></i>
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/useCartStore";
const data = useCartStore();
import { defineProps } from "vue";
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
