import { htmlAttributesList } from "@/constants/data/Index";
import React from "react";

const AttributeList = () => {
  return (
    <section className=" bg-secondary rounded-lg flex flex-col">
      <div className="prose-base p-3">
        <h1>Html Introduction </h1>
        <p>
          HTML, the backbone of the web, structures digital content seamlessly.
          Its tags and elements craft immersive experiences, from elegant
          portfolios to dynamic applications. Versatile and powerful, HTML
          empowers creators to innovate and captivate users with intuitive
          layouts and captivating visuals. Explore its boundless creative
          potential and shape the future of the web.
        </p>

        <ul className="list-disc list-inside">
          <li>It has tags and elements to define structure of content</li>
          <li>each tag has</li>
        </ul>
        <div className="flex flex-row flex-wrap gap-3">
          {htmlAttributesList.map((attr) => (
            <div className="bg-green-300/30 p-1 rounded-lg " key={attr.name}>
              {attr.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttributeList;
