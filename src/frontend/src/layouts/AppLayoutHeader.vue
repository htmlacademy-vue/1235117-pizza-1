<template>
  <header class="header">
    <div class="header__logo">
      <router-link to="/" class="logo">
        <img
          src="@/assets/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
      /></router-link>
    </div>
    <div class="header__cart">
      <router-link to="cart">{{ total }} ₽</router-link>
    </div>
    <div class="header__user">
      <router-link to="profile" class="header__login"
        ><span>Войти</span></router-link
      >
    </div>
  </header>
</template>

<script>
export default {
  name: "AppLayoutHeader",
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/layout/header.scss";

.header__user a {
  padding-top: 23px;
  padding-right: 60px;
  padding-bottom: 21px;
  padding-left: 20px;
}
</style>
