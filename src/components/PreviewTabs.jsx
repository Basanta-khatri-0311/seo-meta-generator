import React, { useState } from "react";
import PreviewCard from "./PreviewCard";

const tabs = ["Google", "Facebook", "Twitter"];

const PreviewTabs = ({ metaData }) => {
  const [active, setActive] = useState("Google");
  return (
    <div className="w-full">
      <div className="flex gap-4 border-b border-gray-300 dark:border-gray-700 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`pb-2 whitespace-nowrap text-sm sm:text-base transition-colors ${
              active === tab
                ? "border-b-2 border-blue-600 font-semibold text-blue-700 dark:text-blue-400"
                : "text-gray-500 dark:text-gray-400  dark:hover:text-blue-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <PreviewCard platform={active} metaData={metaData} />
      </div>
    </div>
  );
};

export default PreviewTabs;
