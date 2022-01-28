<template>
  <div class="cart__additional">
    <ul class="additional-list">
      <li
        class="additional-list__item sheet"
        v-for="item in additionals"
        :key="item.name"
      >
        <p class="additional-list__description">
          <img :src="item.image" width="39" height="60" :alt="item.name" />
          <span>{{ item.name }}</span>
        </p>

        <div class="additional-list__wrapper">
          <item-counter
            :value="item.count"
            @change="changeCountAdditional($event, item)"
            class="additional-list__counter"
            :styleButtonPlus="'counter__button--orange'"
          ></item-counter>

          <div class="additional-list__price">
            <b>{{ item.price * item.count }} ₽</b>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ItemCounter from "@/common/components/ItemCounter.vue";

export default {
  name: "CartAdditional",
  components: {
    ItemCounter,
  },
  props: {
    additionals: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeCountAdditional(count, item) {
      this.$emit("onChangeAdditional", { count, item });
    },
  },
};
</script>
