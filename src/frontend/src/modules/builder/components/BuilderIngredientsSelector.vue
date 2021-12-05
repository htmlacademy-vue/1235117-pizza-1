<template>
  <div>
    <h2 class="title title--small sheet__title">Выберите ингридиенты</h2>

    <div class="sheet__content ingridients">
      <div class="ingridients__sauce">
        <p>Основной соус:</p>
        <radio-button
          v-for="sauce in sauces"
          :key="sauce.value"
          :name="'sauce'"
          :value="sauce.value"
          :checked="sauce.value == selectedSauce"
          :class="'radio ingridients__input'"
          @onChange="selectedSauceChange(sauce)"
        >
          <span>{{ sauce.name }}</span>
        </radio-button>
      </div>

      <div class="ingridients__filling">
        <p>Начинка:</p>

        <ul class="ingridients__list">
          <li
            v-for="ingredient in ingredients"
            :key="ingredient.value"
            class="ingridients__item"
          >
            <app-drag :transferData="ingredient" :draggable="true">
              <selector-item
                :title="ingredient.name"
                :className="`filling filling--${ingredient.value}`"
              ></selector-item>
            </app-drag>
            <item-counter
              :min="0"
              :max="3"
              :value="ingredient.count"
              @plus="addIngredient($event, ingredient)"
              @minus="removeIngredient($event, ingredient)"
            ></item-counter>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import AppDrag from "@/common/components/AppDrag.vue";
import RadioButton from "@/common/components/RadioButton.vue";
import ItemCounter from "@/common/components/ItemCounter.vue";
import SelectorItem from "@/common/components/SelectorItem.vue";

export default {
  components: {
    AppDrag,
    RadioButton,
    ItemCounter,
    SelectorItem,
  },
  props: {
    ingredients: {
      type: Array,
      default: () => [],
    },

    sauces: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedSauce: "tomato",
    };
  },
  methods: {
    selectedSauceChange(sauce) {
      this.selectedSauce = sauce.value;
      this.$emit("onChangeSauce", sauce);
    },

    addIngredient(event, ingredient) {
      ingredient.count = event;
      this.$emit("onAddIngredient", ingredient);
    },

    removeIngredient(event, ingredient) {
      ingredient.count = event;
      this.$emit("onRemoveIngredient", ingredient);
    },
  },
};
</script>
