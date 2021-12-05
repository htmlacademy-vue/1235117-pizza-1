<template>
  <div>
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        @input="$emit('setName', $event.target.value)"
      />
    </label>

    <app-drop @drop="onDrop">
      <div class="content__constructor">
        <div :class="`pizza pizza--foundation--${doughName}-${sauceName}`">
          <div class="pizza__wrapper">
            <div
              v-for="(className, index) in ingredientsClasses"
              :key="index"
              class="pizza__filling"
              :class="className"
            ></div>
          </div>
        </div>
      </div>
    </app-drop>
  </div>
</template>

<script>
import AppDrop from "@/common/components/AppDrop.vue";

export default {
  components: {
    AppDrop,
  },
  props: {
    dough: {
      type: String,
      default: "light",
    },

    sauce: {
      type: String,
      default: "tomato",
    },

    ingredients: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ingredientsClasses() {
      let ingredients = [];
      return this.ingredients.map((ingredient) => {
        let classes = [`pizza__filling--${ingredient.value}`];
        ingredients.push(ingredient.value);

        let countIngredient = ingredients.filter(
          (i) => i === ingredient.value
        ).length;

        if (countIngredient === 2) {
          classes.push("pizza__filling--second");
        } else if (countIngredient === 3) {
          classes.push("pizza__filling--third");
        }
        return classes.join(" ");
      });
    },

    doughName() {
      return this.dough === "large" ? "big" : "small";
    },

    sauceName() {
      return this.sauce === "creamy" ? "creamy" : "tomato";
    },
  },
  methods: {
    onDrop(ingredient) {
      this.$emit("onAddIngredient", ingredient);
    },
  },
};
</script>
