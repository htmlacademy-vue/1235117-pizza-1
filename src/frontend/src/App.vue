<template>
  <div id="app">
    <AppLayout />
    <Index />
  </div>
</template>

<script>
import Index from "@/views/Index";
import AppLayout from "@/layouts/AppLayout";

export default {
  name: "App",
  components: {
    Index,
    AppLayout,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/libs/normalize.scss";
@import "~@/assets/scss/fonts.scss";
@import "~@/assets/scss/scaffolding.scss";
@import "~@/assets/scss/visually-hidden.scss";
</style>
