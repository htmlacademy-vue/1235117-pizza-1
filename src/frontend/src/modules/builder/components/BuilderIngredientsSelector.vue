<template>
  <div>
    <h2 class="title title--small sheet__title">Выберите ингридиенты</h2>

    <div class="sheet__content ingridients">
      <div class="ingridients__sauce">
        <p>Основной соус:</p>
        <radio-button
          v-for="sauce in sauces"
          :key="sauce.value"
          name="sauce"
          :value="sauce.value"
          :checked="sauce.value == selectedSauce"
          :class="'radio ingridients__input'"
          @onChange="$emit('onChangeSauce', sauce)"
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
            <app-drag
              :transferData="{
                count: ingredient.count + 1,
                value: ingredient.value,
              }"
              :draggable="ingredient.count !== max"
            >
              <selector-item
                :title="ingredient.name"
                :className="`filling filling--${ingredient.value}`"
              ></selector-item>
            </app-drag>
            <item-counter
              :min="min"
              :max="max"
              :value="ingredient.count"
              @change="changeIngredient($event, ingredient.value)"
            ></item-counter>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { MIN_COUNT, MAX_COUNT } from "@/common/constants.js";
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

    selectedSauce: {
      type: String,
      default: "tomato",
    },
  },
  methods: {
    changeIngredient(count, value) {
      this.$emit("onChangeIngredient", { count, value });
    },
  },
  computed: {
    min() {
      return MIN_COUNT;
    },
    max() {
      return MAX_COUNT;
    },
  },
};
</script>
