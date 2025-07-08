import React from "react";
import { generateMetaTags } from "../utils/metaBuilder";

const MetaOutput = ({ metaData }) => {
  return (
    <div className="w-full mt-8">
      <h3 className="font-semibold text-lg mb-2">Generated Meta Tags</h3>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto whitespace-pre-wrap">
        {generateMetaTags(metaData)}
      </pre>
    </div>
  );
};

export default MetaOutput;
