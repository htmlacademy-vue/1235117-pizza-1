<template>
  <div>
    <h2 class="title title--small sheet__title">Выберите тесто</h2>
    <div class="sheet__content dough">
      <radio-button
        v-for="dough in doughs"
        :key="dough.value"
        :name="'dough'"
        :value="dough.value"
        :checked="dough.value == selectedDough"
        :class-name="`dough__input dough__input--${dough.value}`"
        @onChange="onSelectedDough(dough)"
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
  },
  data() {
    return {
      selectedDough: "light",
    };
  },
  methods: {
    onSelectedDough(dough) {
      this.selectedDough = dough.value;
      this.$emit("onChange", dough);
    },
  },
};
</script>

<style lang="scss" scoped></style>
