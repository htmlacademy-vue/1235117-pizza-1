<template>
  <div>
    <h2 class="title title--small sheet__title">Выберите тесто</h2>
    <div class="sheet__content dough">
      <radio-button
        v-for="dough in doughs"
        :key="dough.value"
        name="dough"
        :value="dough.value"
        :checked="dough.value == selectedDough"
        :class-name="`dough__input dough__input--${dough.value}`"
        @onChange="$emit('onChange', dough)"
      >
        <b>{{ dough.name }}</b>
        <span>{{ dough.description }}</span>
      </radio-button>
    </div>
  </div>
</template>

<script>
import RadioButton from "@/common/components/RadioButton.vue";

export default {
  components: { RadioButton },
  props: {
    doughs: {
      type: Array,
      default: () => [],
    },

    selectedDough: {
      type: String,
      default: "light",
    },
  },
};
</script>

<style lang="scss" scoped></style>
