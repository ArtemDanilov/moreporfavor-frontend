import fs from "fs/promises";
import path from "path";
import { getPlaiceholder } from "plaiceholder";

const convertToBase64 = async (url: string) => {
  try {
    const buffer = await fs.readFile(path.join("public", url));
    const { base64 } = await getPlaiceholder(buffer);

    return base64;
  } catch (err) {
    console.log(err);
    return "";
  }
};

export default convertToBase64;
