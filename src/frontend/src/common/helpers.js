import { DOUGH, INGREDIENTS, SAUCE, SIZE } from "./constants";

export const normilizeDough = (dough) => {
  return {
    ...dough,
    ...DOUGH.find(({ name }) => dough.name === name),
  };
};

export const normilizeIngredients = (ingredient) => {
  return {
    ...ingredient,
    ...INGREDIENTS.find(({ name }) => ingredient.name === name),
    count: 0,
  };
};

export const normilizeSauce = (souce) => {
  return {
    ...souce,
    ...SAUCE.find(({ name }) => souce.name === name),
  };
};

export const normilizeSize = (size) => {
  return {
    ...size,
    ...SIZE.find(({ name }) => size.name === name),
  };
};
