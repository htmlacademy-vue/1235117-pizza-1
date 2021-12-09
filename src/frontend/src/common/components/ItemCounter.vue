<template>
  <div class="counter counter--orange ingridients__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :class="{ 'counter__button--disabled': value === min }"
      :disabled="value === min"
      @click="$emit('change', value - 1)"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input type="text" name="counter" class="counter__input" :value="value" />
    <button
      type="button"
      class="counter__button counter__button--plus"
      :class="{ 'counter__button--disabled': value === max }"
      :disabled="value === max"
      @click="$emit('change', value + 1)"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: 3,
    },

    value: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/mixins/mixins.scss";
@import "~@/assets/scss/blocks/counter.scss";
</style>
