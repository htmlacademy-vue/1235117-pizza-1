import { DOUGH, INGREDIENTS, SAUCE, SIZE } from "./constants";
import colaImage from "@/assets/img/cola.svg";
import sauceImage from "@/assets/img/sauce.svg";
import potatoImage from "@/assets/img/potato.svg";

export const capitalize = (string) =>
  `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

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

let additionalImages = [colaImage, sauceImage, potatoImage];

export const normilizeAdditional = (additionals) => {
  return additionals.map((item, index) => {
    return {
      ...item,
      image: additionalImages[index],
      count: 0,
    };
  });
};
