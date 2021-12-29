<template>
  <div>
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>

          <div class="content__dough">
            <div class="sheet">
              <builder-dough-selector
                :doughs="doughs"
                @onChange="setDough"
              ></builder-dough-selector>
            </div>
          </div>

          <div class="content__diameter">
            <div class="sheet">
              <builder-size-selector
                :sizes="sizes"
                @onChange="setSize"
              ></builder-size-selector>
            </div>
          </div>

          <div class="content__ingridients">
            <div class="sheet">
              <builder-ingredients-selector
                :ingredients="ingredients"
                :sauces="sauces"
                @onChangeSauce="setSauce"
                @onChangeIngredient="changeIngredient"
              ></builder-ingredients-selector>
            </div>
          </div>

          <div class="content__pizza">
            <builder-pizza-view
              :dough="dough.value"
              :sauce="sauce.value"
              :ingredients="ingredientsList"
              @setName="setPizzaName"
              @onAddIngredient="changeIngredient"
            ></builder-pizza-view>
            <builder-price-counter
              :total="total"
              :isDisable="isDisablePriceCounter"
            ></builder-price-counter>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import pizza from "@/static/pizza.json";
import {
  normilizeDough,
  normilizeIngredients,
  normilizeSauce,
  normilizeSize,
} from "@/common/helpers";
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";
import BuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter";

export default {
  name: "Index",
  data() {
    return {
      dough: { price: 300 },
      sauce: { price: 50 },
      size: 2,
      pizzaName: "",
      ingredients: pizza.ingredients.map((item) => normilizeIngredients(item)),
    };
  },
  components: {
    BuilderDoughSelector,
    BuilderIngredientsSelector,
    BuilderSizeSelector,
    BuilderPizzaView,
    BuilderPriceCounter,
  },
  methods: {
    setDough(dough) {
      this.dough = dough;
    },
    setSauce(sauce) {
      this.sauce = sauce;
    },
    setSize(multiplier) {
      this.size = multiplier;
    },
    setPizzaName(pizzaName) {
      this.pizzaName = pizzaName;
    },
    changeIngredient(event) {
      let ingredient = this.ingredients.find(
        (item) => item.value === event.value
      );
      ingredient.count = event.count;
    },
  },
  computed: {
    ingredientsList() {
      return this.ingredients.filter((item) => item.count > 0);
    },
    doughs() {
      return pizza.dough.map((item) => normilizeDough(item));
    },
    sauces() {
      return pizza.sauces.map((item) => normilizeSauce(item));
    },
    sizes() {
      return pizza.sizes.map((item) => normilizeSize(item));
    },
    isDisablePriceCounter() {
      return Boolean(this.pizzaName.length && this.ingredientsList.length);
    },
    total() {
      let ingredientPrice = this.ingredientsList.reduce(
        (accumulator, ingredient) => {
          return accumulator + ingredient.price * ingredient.count;
        },
        0
      );
      return (
        this.size * (this.dough.price + this.sauce.price + ingredientPrice)
      );
    },
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
