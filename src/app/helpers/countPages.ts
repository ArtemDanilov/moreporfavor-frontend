import { Meta } from "../ts/types";

const countPages = (entries: Meta[], entriesPerPage: number) => {
  return Math.ceil(entries.length / entriesPerPage);
};

export default countPages;
