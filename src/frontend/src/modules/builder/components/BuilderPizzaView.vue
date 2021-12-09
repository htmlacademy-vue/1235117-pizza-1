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
            <template v-for="ingredient in ingredients">
              <div
                v-for="count in ingredient.count"
                :key="`${ingredient.value}-${count}`"
                class="pizza__filling"
                :class="`pizza__filling pizza__filling--${
                  ingredient.value
                } ${ingredientsClasses(count)}`"
              ></div>
            </template>
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
      return (number) => {
        let className = "";
        switch (number) {
          case 2:
            className = "pizza__filling--second";
            break;
          case 3:
            className = "pizza__filling--third";
            break;
        }
        return className;
      };
    },
    doughName() {
      return this.dough === "large" ? "big" : "small";
    },

    sauceName() {
      return this.sauce === "creamy" ? "creamy" : "tomato";
    },
  },
  methods: {
    onDrop(event) {
      this.$emit("onAddIngredient", event);
    },
  },
};
</script>
