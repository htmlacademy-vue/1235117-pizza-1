<template>
  <div>
    <app-layout-header :totalPrice="getTotalPrice" />
    <slot />
  </div>
</template>

<script>
import AppLayoutHeader from "./AppLayoutHeader.vue";
import { mapGetters } from "vuex";

export default {
  name: "AppLayoutDefault",
  components: { AppLayoutHeader },
  computed: {
    ...mapGetters("Cart", ["getTotalPrice"]),
  },
};
</script>
