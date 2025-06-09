<template>
  <div class="row my-4">
    <div class="">
      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table text-center align-middle">
              <thead class="thead-dark">
                <tr>
                  <th>Image</th>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Sum</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in data.cartItems" :key="product.id">
                  <td data-label="Image">
                    <img
                      :src="product.image"
                      width="60"
                      height="60"
                      class="rounded-circle"
                      alt=""
                    />
                  </td>
                  <td data-label="No.">{{ product.id }}</td>
                  <td data-label="Name">{{ product.name }}</td>
                  <td data-label="Price">{{ product.price }}</td>
                  <td data-label="Quantity" class="fw-bold">
                    <button
                      class="btn btn-sm btn-outline-success"
                      @click="data.incrementQuantity(product)"
                    >
                      +
                    </button>
                    {{ product.quantity }}
                    <button
                      class="btn btn-sm btn-outline-danger"
                      @click="data.decrementQuantity(product)"
                    >
                      -
                    </button>
                  </td>
                  <td data-label="Sum">
                    {{ product.quantity * product.price }}
                  </td>
                  <td>
                    <i
                      @click="data.removeFromCart(product)"
                      class="bi bi-trash-fill text-danger"
                      role="button"
                    ></i>
                  </td>
                </tr>
                <tr>
                  <th colspan="2" class="text-center bg-dark text-white">
                    Total
                  </th>
                  <td colspan="2">
                    <span class="badge bg-danger rounded-pill fs-5">
                      ${{
                        data.cartItems.reduce(
                          (acc, item) => acc + item.quantity * item.price,
                          0
                        )
                      }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCartStore } from "@/store/useCartStore";
const data = useCartStore();
</script>
<style scoped>
@media (max-width: 500px) {
  table thead {
    display: none;
  }

  table tbody tr {
    display: block;
    margin-bottom: 1rem;
    border: 1px solid #dee2e6;
    padding: 0.5rem;
  }

  table td {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    font-size: 0.9rem;
  }

  table td::before {
    content: attr(data-label);
    font-weight: bold;
    width: 100px;
    text-align: left;
  }

  table td img {
    max-width: 50px;
    height: auto;
  }
}
</style>
