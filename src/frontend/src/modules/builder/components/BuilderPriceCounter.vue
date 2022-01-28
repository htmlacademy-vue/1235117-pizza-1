<template>
  <div class="content__result">
    <p>Итого: {{ total }} ₽</p>
    <button
      type="button"
      class="button"
      :class="isDisable ? '' : 'button--disabled'"
      :disabled="!isDisable"
      @click="$emit('addCart')"
    >
      Готовьте!
    </button>
  </div>
</template>

<script>
export default {
  props: {
    total: { type: Number, default: 0 },
    isDisable: { type: Boolean, default: false },
  },
};
</script>
