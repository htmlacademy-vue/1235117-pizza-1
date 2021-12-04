<template>
  <label :class="className">
    <input
      type="radio"
      :name="name"
      :value="value"
      :checked="checked"
      class="visually-hidden"
      @change="$emit('onChange', $event.target.value)"
    />
    <slot></slot>
  </label>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },

    value: {
      type: String,
      required: true,
    },

    checked: {
      type: Boolean,
      required: false,
    },

    className: {
      type: String,
      required: false,
    },
  },
};
</script>
