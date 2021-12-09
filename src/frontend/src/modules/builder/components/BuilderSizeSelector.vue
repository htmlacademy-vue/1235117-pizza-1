<template>
  <div>
    <h2 class="title title--small sheet__title">Выберите размер</h2>
    <div class="sheet__content diameter">
      <radio-button
        v-for="size in sizes"
        :key="size.value"
        name="diameter"
        :value="size.value"
        :checked="size.value === selectedSize"
        :class-name="`diameter__input diameter__input--${size.value}`"
        @onChange="setSize(size.multiplier)"
      >
        <span>{{ size.name }}</span>
      </radio-button>
    </div>
  </div>
</template>

<script>
import RadioButton from "@/common/components/RadioButton.vue";

export default {
  components: { RadioButton },
  props: {
    sizes: {
      type: Array,
      default: () => [],
    },

    selectedSize: {
      type: String,
      default: "normal",
    },
  },
  methods: {
    setSize(multiplier) {
      this.$emit("onChange", multiplier);
    },
  },
};
</script>
