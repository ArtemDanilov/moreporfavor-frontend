"use client";

import { useState } from "react";

type Props = {
  text: string;
  length?: number;
};

const Truncate = ({ text, length = 200 }: Props) => {
  const truncated = text.slice(0, length);
  const [content, setContent] = useState<string>(truncated);

  const showFullText = (e: React.MouseEvent): void => {
    const target = e.target as HTMLButtonElement;
    target.remove();
    setContent(text);
  };

  return (
    <p className="whitespace-pre-line font-sans text-normal text-base p-2">
      {content}
      {text.length > length && (
        <button
          onClick={(e) => showFullText(e)}
          className="bg-[#ececec] px-4 rounded-xl ml-1 leading-tight"
        >
          ...
        </button>
      )}
    </p>
  );
};

export default Truncate;
