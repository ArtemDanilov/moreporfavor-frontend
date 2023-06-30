import { typeBlock } from "../ts/types";

import Content from "./blocks/Content";
import Images from "./blocks/Images";

const Blocks = ({ id, __component, ...rest }: typeBlock) => {
  let Block: React.ComponentType<any> | null = null;

  switch (__component) {
    case "builder.content":
      Block = Content;
      break;
    case "builder.images":
      Block = Images;
      break;
  }

  return Block ? <Block key={`index-${id}`} {...rest} /> : null;
};

export default Blocks;
