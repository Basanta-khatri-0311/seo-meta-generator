import React, { useState } from "react";

const RobotsTool = () => {
  const [sitemapUrl, setSitemapUrl] = useState("");
  const [allowPaths, setAllowPaths] = useState("/");
  const [disallowPaths, setDisallowPaths] = useState("/admin\n/private");
  const [generated, setGenerated] = useState("");
  const [copied, setCopied] = useState(false);

  const generateRobots = () => {
    let content = "User-agent: *\n";
    allowPaths.split("\n").filter(p => p.trim()).forEach(p => {
      content += `Allow: ${p.trim()}\n`;
    });
    disallowPaths.split("\n").filter(p => p.trim()).forEach(p => {
      content += `Disallow: ${p.trim()}\n`;
    });
    if (sitemapUrl) {
      content += `\nSitemap: ${sitemapUrl.trim()}\n`;
    }
    setGenerated(content);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generated);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in duration-500 pb-20">
      {/* Input Section */}
      <div className="space-y-6">
        <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border p-10 h-full">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 bg-brand-primary flex items-center justify-center">
              <i className="ri-robot-2-line text-white text-xl"></i>
            </div>
            <div>
              <h2 className="text-xl font-bold uppercase tracking-tighter text-gray-900 dark:text-white">Robots Builder</h2>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Bot Control Protocol</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Sitemap File Location</label>
              <input 
                value={sitemapUrl}
                onChange={(e) => setSitemapUrl(e.target.value)}
                placeholder="https://your-website.com/sitemap.xml" 
                className="input-premium" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block px-1 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-brand-primary"></div>
                   Allowed Pages
                </label>
                <textarea 
                  value={allowPaths}
                  onChange={(e) => setAllowPaths(e.target.value)}
                  rows={6} 
                  placeholder="/" 
                  className="input-premium font-mono text-xs" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block px-1 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-gray-300"></div>
                   Blocked Pages
                </label>
                <textarea 
                  value={disallowPaths}
                  onChange={(e) => setDisallowPaths(e.target.value)}
                  rows={6} 
                  placeholder="/admin" 
                  className="input-premium font-mono text-xs" 
                />
              </div>
            </div>

            <button 
              onClick={generateRobots}
              className="w-full btn-primary"
            >
              Generate File
            </button>
          </div>
        </div>
      </div>

      {/* Output Section */}
      <div className="h-full">
        <div className="bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border p-10 h-full flex flex-col min-h-[500px]">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Code Output</h3>
            {generated && (
              <button
                onClick={handleCopy}
                className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${copied ? 'bg-green-500 text-white' : 'border border-gray-300 dark:border-dark-border text-gray-500 hover:text-brand-primary hover:border-brand-primary'}`}
              >
                {copied ? "Copied" : "Copy Tags"}
              </button>
            )}
          </div>

          <div className="flex-1 overflow-hidden border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-surface p-8">
            {generated ? (
              <pre className="w-full h-full text-gray-500 dark:text-gray-400 text-xs font-mono overflow-auto custom-scrollbar whitespace-pre-wrap break-all leading-relaxed">
                <code>{generated}</code>
              </pre>
            ) : (
              <div className="h-full flex flex-col items-center justify-center opacity-20">
                <i className="ri-file-code-line text-5xl mb-4"></i>
                <p className="text-[10px] font-bold uppercase tracking-widest">Awaiting Content</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotsTool;
