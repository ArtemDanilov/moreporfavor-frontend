import { Meta } from "../ts/types";

export const sortASC = (array: Meta[]) => {
  return [...array].sort(
    (a, b) => Number(new Date(a.publishedAt)) - Number(new Date(b.publishedAt))
  );
};

export const sortDESC = (array: Meta[]) => {
  return [...array].sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
};
