import { DOUGH, INGREDIENTS, SAUCE, SIZE } from "./constans";

export const normilizeDough = (dough) => {
  return {
    ...dough,
    value: DOUGH.find(({ name }) => dough.name === name).value,
  };
};

export const normilizeIngredients = (ingredient) => {
  return {
    ...ingredient,
    value: INGREDIENTS.find(({ name }) => ingredient.name === name).value,
  };
};

export const normilizeSauce = (souce) => {
  return {
    ...souce,
    value: SAUCE.find(({ name }) => souce.name === name).value,
  };
};

export const normilizeSize = (size) => {
  return {
    ...size,
    value: SIZE.find(({ name }) => size.name === name).value,
  };
};
