import { defineStore } from "pinia";

export const useCartStore = defineStore("Cart", {
  state: () => ({
    products: [
      {
        id: 1,
        name: "Product 1",
        price: 10,
        image:
          "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      },
      {
        id: 2,
        name: "Product 2",
        price: 20,
        image:
          "https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg",
      },
      {
        id: 3,
        name: "Product 3",
        price: 30,
        image:
          "https://photomarketingwizard.com/wp-content/uploads/2018/02/ecommerce-product-photography-25.jpg }",
      },
      {
        id: 4,
        name: "Product 4",
        price: 40,
        image:
          "https://assets.turbologo.com/blog/en/2021/09/10094210/product-photo-1.png",
      },
      {
        id: 5,
        name: "Product 5",
        price: 50,
        image:
          "https://images.wondershare.com/pixcut/assets/blog/product-images-for-ecommerce-sitse-1.jpg",
      },
      {
        id: 6,
        name: "Product 6",
        price: 60,
        image:
          "https://goodmockups.com/wp-content/uploads/2019/01/Free-Premium-Cosmetics-Scent-Pump-Bottle-Cream-Container-Mockup-PSD.jpg",
      },
    ],
    cartItems: [],
  }),
  getters: {
    countCartItems(state) {
      return state.cartItems.length;
    },
  },
  actions: {
    addToCart(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity++;
        alert("Product allready added to cart");
      } else {
        this.cartItems.push({ ...item, quantity: 1 });
        alert("Product added to cart");
      }
    },
    incrementQuantity(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity++;
        alert("Product updated to cart");
      }
    },
    decrementQuantity(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity--;
        if (this.cartItems[index].quantity === 0) {
          this.cartItems = this.cartItems.filter(
            (product) => product.id !== item.id
          );
        }
        alert("Product updated to cart");
      }
    },
    removeFromCart(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems = this.cartItems.filter(
          (product) => product.id !== item.id
        );
        alert("Product removed from cart");
      }
    },
  },
});
