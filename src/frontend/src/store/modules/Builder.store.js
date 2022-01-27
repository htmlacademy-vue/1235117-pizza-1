import { uniqueId, cloneDeep } from "lodash";
import pizza from "@/static/pizza.json";
import {
  SET_PIZZA_DATA,
  SET_PIZZA,
  SET_DOUGH,
  SET_SAUCE,
  SET_SIZE,
  SET_PIZZA_NAME,
  CHANGE_PIZZA,
  UPDATE_PIZZA_INGREDIENT,
  ADD_ENTITY,
} from "@/store/mutations-types";
import {
  normilizeDough,
  normilizeIngredients,
  normilizeSauce,
  normilizeSize,
} from "@/common/helpers";

export default {
  namespaced: true,
  state: () => ({
    data: {},
    pizzaConstructor: {
      name: "",
      ingredients: [],
      dough: null,
      sauce: null,
      size: null,
    },
  }),
  actions: {
    setPizza({ commit }) {
      //todo get pizza from api
      pizza.ingredients = pizza.ingredients.map((item) =>
        normilizeIngredients(item)
      );
      pizza.dough = pizza.dough.map((item) => normilizeDough(item));
      pizza.sauces = pizza.sauces.map((item) => normilizeSauce(item));
      pizza.sizes = pizza.sizes.map((item) => normilizeSize(item));

      commit("SET_PIZZA_DATA", pizza);
      commit("SET_PIZZA");
    },
    post({ state, getters, commit }) {
      let pizza = cloneDeep(state.pizzaConstructor);

      commit(
        ADD_ENTITY,
        {
          module: "Cart",
          entity: "pizzas",
          value: {
            ...pizza,
            price: getters["pizzaPrice"],
            count: 1,
            id: uniqueId(),
          },
        },
        { root: true }
      );
    },
  },
  getters: {
    pizza(state) {
      return state.data;
    },
    pizzaConstructor(state) {
      return state.pizzaConstructor;
    },
    pizzaPrice(state) {
      let ingredientPrice = state.pizzaConstructor.ingredients.reduce(
        (accumulator, ingredient) => {
          return accumulator + ingredient.price * ingredient.count;
        },
        0
      );
      return (
        state.pizzaConstructor.size.multiplier *
        (state.pizzaConstructor.dough.price +
          state.pizzaConstructor.sauce.price +
          ingredientPrice)
      );
    },
    ingredientsList(state) {
      return state.pizzaConstructor.ingredients.filter(
        (item) => item.count > 0
      );
    },
    isDisablePriceCounter(state, getters) {
      return Boolean(
        state.pizzaConstructor.name.length && getters.ingredientsList.length
      );
    },
  },

  mutations: {
    [SET_PIZZA_DATA](state, pizza) {
      state.data = pizza;
    },
    [SET_PIZZA](state) {
      state.pizzaConstructor.name = "";
      state.pizzaConstructor.dough = state.data.dough[0];
      state.pizzaConstructor.size = state.data.sizes[1];
      state.pizzaConstructor.sauce = state.data.sauces[0];
      state.pizzaConstructor.ingredients = state.data.ingredients.map(
        (item) => {
          item.count = 0;
          return item;
        }
      );
    },
    [CHANGE_PIZZA](state, pizza) {
      state.pizzaConstructor.name = pizza.name;
      state.pizzaConstructor.dough = pizza.dough;
      state.pizzaConstructor.size = pizza.size;
      state.pizzaConstructor.sauce = pizza.sauce;
      state.pizzaConstructor.ingredients = pizza.ingredients;
    },
    [SET_DOUGH](state, dough) {
      state.pizzaConstructor.dough = dough;
    },
    [SET_SAUCE](state, sauce) {
      state.pizzaConstructor.sauce = sauce;
    },
    [SET_SIZE](state, size) {
      state.pizzaConstructor.size = size;
    },
    [SET_PIZZA_NAME](state, pizzaName) {
      state.pizzaConstructor.name = pizzaName;
    },
    [UPDATE_PIZZA_INGREDIENT](state, ingredientData) {
      let ingredient = state.pizzaConstructor.ingredients.find(
        (item) => item.value === ingredientData.value
      );

      ingredient.count = ingredientData.count;
    },
  },
};
