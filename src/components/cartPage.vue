<template>
  <div class="row my-4">
    <div class="">
      <div class="card">
        <div class="card-body">
          <table class="table text-center align-middle">
            <thead class="text-center align-middle">
              <tr>
                <th>image</th>
                <th>no.</th>
                <th>name</th>
                <th>price</th>
                <th>quantity</th>
                <th>sum</th>
              </tr>
            </thead>
            <tbody class="align-middle">
              <tr v-for="product in data.cartItems" :key="product.id">
                <td>
                  <img
                    :src="product.image"
                    width="60"
                    height="60"
                    class="rounded-circle"
                    alt=""
                  />
                </td>
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td class="fw-bold">
                  <button
                    @click="data.incrementQuantity(product)"
                    class="btn btn-primary"
                  >
                    +
                  </button>
                  {{ product.quantity }}
                  <button
                    @click="data.decrementQuantity(product)"
                    class="btn btn-danger"
                  >
                    -
                  </button>
                </td>
                <td>{{ product.quantity * product.price }}</td>
                <td>
                  <i
                    @click="data.removeFromCart(product)"
                    class="bi bi-trash-fill"
                  ></i>
                </td>
              </tr>
              <tr>
                <th class="text-center bg-dark text-white" colspan="3">
                  total
                </th>
                <td>
                  <span class="badge badge bg-danger tounded-pill fs-5"
                    >${{
                      data.cartItems.reduce(
                        (acc, item) => acc + item.quantity * item.price,
                        0
                      )
                    }}</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCartStore } from "@/store/useCartStore";
const data = useCartStore();
</script>
<style></style>
