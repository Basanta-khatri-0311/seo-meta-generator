import React, { useState } from "react";
import PreviewCard from "./PreviewCard";

const tabs = ["Google", "Facebook", "Twitter"];
const PreviewTabs = () => {
  const [active, setActive] = useState("Google");
  return (
    <div className="w-full">
      <div className="flex gap-4 border-b overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`pb-2 whitespace-nowrap text-sm sm:text-base ${
              active === tab
                ? "border-b-2 border-blue-600 font-semibold text-blue-700"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <PreviewCard platform={active} />
      </div>
    </div>
  );
};

export default PreviewTabs;
