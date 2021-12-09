<template>
  <span :class="className">{{ title }} </span>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },

    className: {
      type: String,
      required: false,
    },
  },
};
</script>
