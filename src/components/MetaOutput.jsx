import React from "react";
import { generateMetaTags } from "../utils/metaBuilder";
import jsPDF from "jspdf";

const MetaOutput = ({ metaData }) => {
  const isMetaDataValid = () => {
    if (!metaData) return false;
    if (!metaData.title || !metaData.description) return false;
    return true;
  };

  const handleCopy = () => {
    const tags = generateMetaTags(metaData);
    navigator.clipboard.writeText(tags);
    alert("✅ Meta tags copied to clipboard!");
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const tags = generateMetaTags(metaData);
    doc.setFont("Courier");
    doc.setFontSize(12);
    doc.text(tags, 10, 10);
    doc.save("meta-tags.pdf");
  };

  const handleSaveProject = () => {
    localStorage.setItem("metalabs_metaData", JSON.stringify(metaData));
    alert("✅ Project saved locally!");
  };

  return (
    <div className="w-full mt-8">
      <h3 className="font-semibold text-lg mb-2">Generated Meta Tags</h3>
      <pre className="bg-[#1e1e1e] text-green-200 p-4 rounded-md text-sm overflow-auto whitespace-pre-wrap font-mono border border-gray-700 shadow-inner">
        {generateMetaTags(metaData)}
      </pre>
      <div className="flex gap-2 mt-2">
        <button
          disabled={!isMetaDataValid()}
          onClick={handleCopy}
          className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Copy Meta Tags
        </button>
        <button
          disabled={!isMetaDataValid()}
          onClick={handleDownloadPDF}
          className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Download PDF
        </button>
        <button
          disabled={!isMetaDataValid()}
          onClick={handleSaveProject}
          className="flex-1 bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition"
        >
          Save Project
        </button>
      </div>
    </div>
  );
};

export default MetaOutput;
