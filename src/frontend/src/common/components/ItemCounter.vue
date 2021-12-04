<template>
  <div class="counter counter--orange ingridients__counter">
    <button
      type="button"
      class="counter__button counter__button--disabled counter__button--minus"
      :disabled="isMinusDisabled"
      @click="counterMinus()"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="counterValue"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      :disabled="isPlusDisabled"
      @click="counterPlus()"
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
  data() {
    return {
      counterValue: JSON.parse(this.value),
    };
  },
  methods: {
    counterPlus() {
      this.counterValue += 1;
      this.$emit("plus", this.counterValue);
    },
    counterMinus() {
      this.counterValue -= 1;
      this.$emit("minus", this.counterValue);
    },
  },
  computed: {
    isMinusDisabled() {
      return this.counterValue <= this.min;
    },
    isPlusDisabled() {
      return this.counterValue >= this.max;
    },
  },
};
</script>
