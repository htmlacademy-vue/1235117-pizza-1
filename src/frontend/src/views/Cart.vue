<template>
  <div>
    <main class="content cart">
      <div class="container">
        <div class="cart__title">
          <h1 class="title title--big">Корзина</h1>
        </div>

        <div v-show="getPizzas.length === 0" class="sheet cart__empty">
          <p>В корзине нет ни одного товара</p>
        </div>
        <cart-list
          :pizzas="getPizzas"
          @onChangeCountPizza="changeCountPizza"
          @onChangePizza="changePizza"
        ></cart-list>
        <cart-additional
          :additionals="additionals"
          @onChangeAdditional="changeAdditional"
        ></cart-additional>
        <cart-form :delivery="delivery"></cart-form>
      </div>
    </main>
    <cart-popup v-if="showModal" @close="closePopup"></cart-popup>
    <cart-footer
      :totalPrice="getTotalPrice"
      @createOrder="showModal = true"
      @createNewPizza="createNewPizza"
    ></cart-footer>
  </div>
</template>

<script>
import CartList from "@/modules/cart/components/CartList";
import CartAdditional from "@/modules/cart/components/CartAdditional";
import CartForm from "@/modules/cart/components/CartForm";
import CartFooter from "@/modules/cart/components/CartFooter";
import CartPopup from "@/modules/cart/components/CartPopup";

import {
  UPDATE_COUNT_ADDITIONAL,
  UPDATE_COUNT_PIZZA,
  CHANGE_PIZZA,
  SET_PIZZA,
  CLEAR_CART,
} from "@/store/mutations-types";

import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "Cart",
  components: {
    CartList,
    CartAdditional,
    CartForm,
    CartFooter,
    CartPopup,
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    ...mapGetters("Cart", ["getPizzas", "getTotalPrice"]),
    ...mapState("Cart", ["additionals", "delivery"]),
  },
  methods: {
    ...mapMutations("Cart", {
      changeAdditional: UPDATE_COUNT_ADDITIONAL,
      changeCountPizza: UPDATE_COUNT_PIZZA,
      clearCart: CLEAR_CART,
    }),
    ...mapMutations("Builder", {
      changePizza: CHANGE_PIZZA,
      createNewPizza: SET_PIZZA,
    }),
    closePopup() {
      this.createNewPizza();
      this.clearCart();
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app.scss";
</style>
