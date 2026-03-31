import React, { useState } from "react";

const SitemapTool = () => {
  const [urls, setUrls] = useState("");
  const [generatedSitemap, setGeneratedSitemap] = useState("");
  const [copied, setCopied] = useState(false);

  const generateSitemap = () => {
    const urlList = urls.split("\n").filter((u) => u.trim() !== "");
    const date = new Date().toISOString().split("T")[0];
    
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    
    urlList.forEach((url) => {
      const cleanUrl = url.trim().startsWith("http") ? url.trim() : `https://${url.trim()}`;
      xml += `  <url>\n    <loc>${cleanUrl}</loc>\n    <lastmod>${date}</lastmod>\n    <priority>0.80</priority>\n  </url>\n`;
    });
    
    xml += `</urlset>`;
    setGeneratedSitemap(xml);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedSitemap);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadSitemap = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedSitemap], { type: "text/xml" });
    element.href = URL.createObjectURL(file);
    element.download = "sitemap.xml";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in duration-500 pb-20">
      <div className="space-y-6">
        <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border p-8 h-full">
          <div className="flex items-center gap-3 mb-8">
             <div className="w-12 h-12 bg-green-500 flex items-center justify-center">
                <i className="ri-map-2-line text-white text-2xl"></i>
             </div>
             <div>
                <h2 className="text-xl font-bold uppercase tracking-tight text-gray-900 dark:text-white">Sitemap Builder</h2>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">List your pages for search engines</p>
             </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block px-1">
                Enter URLs (one per line)
              </label>
              <textarea
                value={urls}
                onChange={(e) => setUrls(e.target.value)}
                placeholder="example.com&#10;example.com/about"
                rows={10}
                className="input-premium resize-none font-mono text-[13px]"
              ></textarea>
            </div>
            
            <button
              onClick={generateSitemap}
              className="w-full btn-primary bg-green-600 border-green-600"
            >
              Generate Sitemap
            </button>
          </div>
        </div>
      </div>

      <div className="h-full">
        {generatedSitemap ? (
          <div className="bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border p-8 h-full flex flex-col min-h-[500px]">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">XML Output</h3>
               <div className="flex gap-2">
                  <button
                    onClick={copyToClipboard}
                    className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${copied ? 'bg-green-500 text-white border-green-500' : 'border border-gray-300 dark:border-dark-border text-gray-500 hover:text-green-600 hover:border-green-600'}`}
                  >
                    {copied ? "Copied" : "Copy Code"}
                  </button>
                  <button
                    onClick={downloadSitemap}
                    className="p-2 border border-gray-300 dark:border-dark-border text-gray-500 hover:text-green-600 hover:border-green-600 transition-all bg-white dark:bg-dark-surface"
                  >
                    <i className="ri-download-2-line"></i>
                  </button>
               </div>
            </div>
            
            <div className="flex-1 overflow-hidden border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-surface p-6">
              <pre className="w-full h-full text-gray-700 dark:text-gray-300 text-xs font-mono overflow-auto custom-scrollbar whitespace-pre-wrap break-all">
                <code>{generatedSitemap}</code>
              </pre>
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border p-8 h-full flex flex-col items-center justify-center opacity-30 border-dashed">
             <i className="ri-xml-line text-5xl mb-3"></i>
             <p className="text-[10px] font-bold uppercase tracking-widest">Awaiting generation...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SitemapTool;
