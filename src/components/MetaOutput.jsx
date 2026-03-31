import React, { useState } from "react";

const MetaOutput = ({ metaData }) => {
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);
  const { title, description, image, url } = metaData || {};

  const htmlCode = `<!-- Primary Meta Tags -->
<title>${title || ""}</title>
<meta name="title" content="${title || ""}">
<meta name="description" content="${description || ""}">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="${url || ""}">
<meta property="og:title" content="${title || ""}">
<meta property="og:description" content="${description || ""}">
<meta property="og:image" content="${image || ""}">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="${url || ""}">
<meta property="twitter:title" content="${title || ""}">
<meta property="twitter:description" content="${description || ""}">
<meta property="twitter:image" content="${image || ""}">`;

  const jsonCode = JSON.stringify(metaData, null, 2);

  const handleCopyHtml = () => {
    navigator.clipboard.writeText(htmlCode);
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2000);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(jsonCode);
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <div className="flex flex-col gap-8 w-full border border-gray-200 dark:border-dark-border p-10 bg-white dark:bg-dark-card animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <h2 className="text-xl font-black uppercase tracking-tighter text-gray-900 dark:text-white flex items-center gap-3">
            <i className="ri-code-line text-brand-primary"></i>
            Generated_Protocol
          </h2>
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Copy or export your metadata stack</p>
        </div>
        
        <button
          onClick={handleCopyHtml}
          className={`btn-primary !px-6 !py-3 !text-[10px] ${
            copiedHtml 
            ? "!bg-green-500 !border-green-500 !text-white" 
            : ""
          }`}
        >
          <i className={copiedHtml ? "ri-check-line" : "ri-clipboard-line"}></i>
          {copiedHtml ? "PROTOCOL_COPIED" : "COPY_MARKUP"}
        </button>
      </div>

      <div className="relative">
        <pre className="w-full h-[400px] p-8 bg-gray-50 dark:bg-dark-surface text-gray-500 dark:text-gray-400 text-[13px] overflow-auto font-mono custom-scrollbar border border-gray-100 dark:border-dark-border">
          <code>{htmlCode}</code>
        </pre>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
        <button 
          onClick={handleCopyJson}
          className={`flex items-center justify-center gap-3 py-4 text-[10px] font-black uppercase tracking-widest transition-all border ${
            copiedJson 
            ? "bg-green-500 text-white border-green-500" 
            : "bg-transparent text-gray-400 hover:text-brand-primary border-gray-200 dark:border-dark-border hover:border-brand-primary"
          }`}
        >
          <i className={copiedJson ? "ri-check-line" : "ri-file-code-line"}></i>
          {copiedJson ? "JSON_DATA_COPIED" : "COPY_JSON_STREAM"}
        </button>
        <button className="flex items-center justify-center gap-3 py-4 bg-transparent text-gray-400 hover:text-brand-primary border border-gray-200 dark:border-dark-border text-[10px] font-black uppercase tracking-widest transition-all hover:border-brand-primary">
          <i className="ri-download-2-line"></i>
          DOWNLOAD_PROTO.TXT
        </button>
      </div>
    </div>
  );
};

export default MetaOutput;
