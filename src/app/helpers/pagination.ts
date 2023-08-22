import { Meta } from "../ts/types";

export const paginate = (
  entries: Meta[],
  pageNumber: number,
  pageSize: number
) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return entries.slice(startIndex, startIndex + pageSize);
};
