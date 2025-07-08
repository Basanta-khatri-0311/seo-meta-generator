import React, { useState } from "react";
import MetaForm from "../components/MetaForm";
import PreviewTabs from "../components/PreviewTabs";
import MetaOutput from "../components/MetaOutput";
import { generateMetaTags } from "../utils/metaBuilder";

const Home = () => {
  const [metaData, setMetaData] = useState({
    title: "",
    description: "",
    image: "",
    url: "",
  });
  return (
    <div className="flex flex-col md:flex-row gap-8 px-4 sm:px-6 py-6 max-w-7xl mx-auto">
      {/* Left:Form */}
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
