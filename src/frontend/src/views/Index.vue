<template>
  <div>
    <router-view />
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>

          <div class="content__dough">
            <div class="sheet">
              <builder-dough-selector
                :doughs="pizza.dough"
                :selectedDough="pizzaConstructor.dough.value"
                @onChange="setDough"
              ></builder-dough-selector>
            </div>
          </div>

          <div class="content__diameter">
            <div class="sheet">
              <builder-size-selector
                :sizes="pizza.sizes"
                :selectedSize="pizzaConstructor.size.value"
                @onChange="setSize"
              ></builder-size-selector>
            </div>
          </div>

          <div class="content__ingridients">
            <div class="sheet">
              <builder-ingredients-selector
                :ingredients="pizzaConstructor.ingredients"
                :sauces="pizza.sauces"
                :selectedSauce="pizzaConstructor.sauce.value"
                @onChangeSauce="setSauce"
                @onChangeIngredient="changeIngredient"
              ></builder-ingredients-selector>
            </div>
          </div>

          <div class="content__pizza">
            <builder-pizza-view
              :name="pizzaConstructor.name"
              :dough="pizzaConstructor.dough.value"
              :sauce="pizzaConstructor.sauce.value"
              :ingredients="ingredientsList"
              @setName="setPizzaName"
              @onAddIngredient="changeIngredient"
            ></builder-pizza-view>
            <builder-price-counter
              :total="pizzaPrice"
              :isDisable="isDisablePriceCounter"
              @addCart="addCart"
            ></builder-price-counter>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";
import BuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter";

import { mapGetters, mapActions, mapMutations } from "vuex";
import {
  SET_DOUGH,
  SET_SAUCE,
  SET_SIZE,
  SET_PIZZA_NAME,
  UPDATE_PIZZA_INGREDIENT,
} from "@/store/mutations-types";

export default {
  name: "Index",
  components: {
    BuilderDoughSelector,
    BuilderIngredientsSelector,
    BuilderSizeSelector,
    BuilderPizzaView,
    BuilderPriceCounter,
  },
  methods: {
    ...mapActions("Builder", ["post"]),
    ...mapMutations("Builder", {
      setDough: SET_DOUGH,
      setSize: SET_SIZE,
      setSauce: SET_SAUCE,
      setPizzaName: SET_PIZZA_NAME,
      changeIngredient: UPDATE_PIZZA_INGREDIENT,
    }),
    addCart() {
      this.post();
    },
  },
  computed: {
    ...mapGetters("Builder", [
      "pizza",
      "pizzaConstructor",
      "ingredientsList",
      "pizzaPrice",
      "isDisablePriceCounter",
    ]),
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/mixins/mixins.scss";
@import "~@/assets/scss/layout/content.scss";
@import "~@/assets/scss/layout/sheet.scss";
@import "~@/assets/scss/blocks/ingridients.scss";
@import "~@/assets/scss/blocks/pizza.scss";
@import "~@/assets/scss/blocks/filling.scss";
@import "~@/assets/scss/blocks/diameter.scss";
@import "~@/assets/scss/blocks/dough.scss";
@import "~@/assets/scss/blocks/title.scss";
@import "~@/assets/scss/blocks/button.scss";
@import "~@/assets/scss/blocks/input.scss";
@import "~@/assets/scss/blocks/counter.scss";
</style>
