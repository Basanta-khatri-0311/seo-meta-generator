import React, { useState } from "react";
import MetaForm from "../components/MetaForm";
import PreviewTabs from "../components/PreviewTabs";
import MetaOutput from "../components/MetaOutput";

const Home = () => {
  const [metaData, setMetaData] = useState({
    title: "",
    description: "",
    image: "",
    url: "",
  });

  return (
    <div className="flex flex-col md:flex-row gap-8 px-4 sm:px-6 py-6 max-w-7xl mx-auto bg-white dark:bg-[#1c1c1c] text-black dark:text-white transition-colors">
      {/* Left: Form */}
      <div className="w-full md:w-1/3">
        <MetaForm metaData={metaData} setMetaData={setMetaData} />
      </div>

      {/* Middle: Preview */}
      <div className="w-full md:w-1/3">
        <PreviewTabs metaData={metaData} />
      </div>

      {/* Right: Generated Meta Tags */}
      <div className="w-full md:w-1/3">
        <MetaOutput metaData={metaData} />
      </div>
    </div>
  );
};

export default Home;
