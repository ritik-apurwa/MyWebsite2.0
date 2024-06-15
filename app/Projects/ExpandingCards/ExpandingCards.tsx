import React, { useState } from "react";

const ExpandingCards: React.FC = () => {
  const images: string[] = [
    "https://cdn.pixabay.com/photo/2020/10/19/19/16/man-5668774_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/01/12/10/21/ai-generated-8503627_640.jpg",
    "https://cdn.pixabay.com/photo/2023/06/02/22/18/tattoo-8036552_640.jpg",
    "https://cdn.pixabay.com/photo/2015/03/22/18/43/bodybuilding-685077_640.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handlePanelClick = (index: number): void => {
    setActiveIndex(index);
  };

  const getPanelClassName = (index: number): string => {
    return index === activeIndex ? "flex-[5]" : "flex-[1]";
  };

  return (
    <div className="flex flex-col gap-y-10">
      <div className="prose dark:prose-invert p-6 lg:pt-10">
        <h1>Expanding Cards</h1>
        <p>Click on the images to expand them</p>
      </div>
      <div className="flex overflow-hidden w-full">
        {images.map((image, index) => (
          <div
            key={index}
            id="panel"
            className={`${getPanelClassName(index)}
           bg-top bg-cover bg-no-repeat h-[70vh] rounded-3xl border-2
            text-white cursor-pointer relative
             transition-[flex] duration-700
              ease-in-out `}
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => handlePanelClick(index)}
          >
            <h3
              className={`text-[24px] absolute bottom-[20px] left-[20px] m-0 ${
                index === activeIndex
                  ? "opacity-100 transition-opacity duration-300 ease-in delay-400"
                  : "opacity-0"
              }`}
            >
              Panel {index + 1}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ExpandingCards;
export const ExpandingCardsCodeString = `
import React, { useState } from "react";

export const JavaScriptIntro: React.FC = () => {
  const images: string[] = [
    "https://cdn.pixabay.com/photo/2020/10/19/19/16/man-5668774_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/01/12/10/21/ai-generated-8503627_640.jpg",
    "https://cdn.pixabay.com/photo/2023/06/02/22/18/tattoo-8036552_640.jpg",
    "https://cdn.pixabay.com/photo/2015/03/22/18/43/bodybuilding-685077_640.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handlePanelClick = (index: number): void => {
    setActiveIndex(index);
  };

  const getPanelClassName = (index: number): string => {
    return index === activeIndex ? "flex-[5]" : "flex-[1]";
  };

  return (
    <div className="flex flex-col gap-y-10">
      <div className="prose dark:prose-invert p-6 lg:pt-10">
        <h1>Expanding Cards</h1>
        <p>Click on the images to expand them</p>
      </div>
      <div className="flex overflow-hidden w-full">
        {images.map((image, index) => (
          <div
            key={index}
            id="panel"
            className={\`$\{getPanelClassName(index)}
           bg-top bg-cover bg-no-repeat h-[70vh] rounded-3xl border-2
            text-white cursor-pointer relative
             transition-[flex] duration-700
              ease-in-out \`}
            style={{ backgroundImage: \`url($\{image})\` }}
            onClick={() => handlePanelClick(index)}
          >
            <h3
              className={\`text-[24px] absolute bottom-[20px] left-[20px] m-0 \${
                index === activeIndex
                  ? "opacity-100 transition-opacity duration-300 ease-in delay-400"
                  : "opacity-0"
              }\`}
            >
              Panel {index + 1} 
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

`;
