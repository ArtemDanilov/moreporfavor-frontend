import { Block } from "../ts/types";

import Content from "./blocks/Content";

const Blocks = ({ id, __component, ...rest }: Block) => {
  let Block: React.ComponentType<any> | null = null;

  switch (__component) {
    case "builder.content":
      Block = Content;
      break;
  }

  return Block ? <Block key={`index-${id}`} {...rest} /> : null;
};

export default Blocks;
