import React from "react";

const Loading = () => {
  const tags = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div>
      <div className="w-full h-96 mb-2 bg-mocha bg-opacity-40 rounded-lg animate-pulse"></div>
      <div className="space-y-2 mb-2 animate-pulse">
        <div className="w-full h-4 bg-mocha bg-opacity-40 rounded-md"></div>
        <div className="w-[90%] h-4 bg-mocha bg-opacity-40 rounded-md"></div>
        <div className="w-[80%] h-4 bg-mocha bg-opacity-40 rounded-md"></div>
      </div>
      <ul className="flex flex-wrap gap-2 animate-pulse">
        {tags.map((el) => (
          <li
            key={el}
            className="block w-14 h-4 bg-mocha bg-opacity-40 rounded-md"
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Loading;
