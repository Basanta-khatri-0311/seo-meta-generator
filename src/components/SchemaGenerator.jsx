import React, { useState } from "react";

const SchemaGenerator = () => {
  const [schemaType, setSchemaType] = useState("Organization");
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    logo: "",
    description: "",
    contact: "",
  });
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateSchema = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": schemaType,
      "name": formData.name || "Company Name",
      "url": formData.url || "https://example.com",
      "logo": formData.logo || "https://example.com/logo.png",
      "description": formData.description || "Company description goes here.",
    };

    if (schemaType === "Organization" && formData.contact) {
      jsonLd.contactPoint = {
        "@type": "ContactPoint",
        "telephone": formData.contact,
        "contactType": "customer service"
      };
    }

    return `<script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n</script>`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateSchema());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-right-8 duration-700 pb-20">
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="glass-card p-8 rounded-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20">
              <i className="ri-node-tree text-white text-2xl"></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Schema Architect</h2>
              <p className="text-sm text-gray-500">Generate JSON-LD structured data</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 px-1">Schema Type</label>
              <select 
                value={schemaType}
                onChange={(e) => setSchemaType(e.target.value)}
                className="input-premium appearance-none bg-no-repeat bg-[right_1.25rem_center]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundSize: '1.2em' }}
              >
                <option value="Organization">Organization</option>
                <option value="WebSite">WebSite</option>
                <option value="LocalBusiness">Local Business</option>
                <option value="Person">Person</option>
              </select>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 px-1">Entity Name</label>
                <input name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Acme Corp" className="input-premium" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 px-1">Official URL</label>
                <input name="url" value={formData.url} onChange={handleChange} placeholder="https://acme.com" className="input-premium" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 px-1">Logo URL</label>
                <input name="logo" value={formData.logo} onChange={handleChange} placeholder="https://acme.com/logo.png" className="input-premium" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 px-1">Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} rows={3} placeholder="Tell search engines what you do..." className="input-premium resize-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="glass-card p-8 rounded-3xl h-full flex flex-col min-h-[500px]">
           <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <i className="ri-braces-line text-purple-500"></i>
                JSON-LD Markup
              </h3>
              <button
                onClick={handleCopy}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${copied ? 'bg-green-500 text-white' : 'bg-gray-100 dark:bg-dark-surface text-gray-500 hover:bg-purple-500 hover:text-white'}`}
              >
                <i className={copied ? "ri-check-line" : "ri-clipboard-line"}></i>
                {copied ? "Copied" : "Copy Code"}
              </button>
           </div>

           <pre className="flex-1 w-full p-6 rounded-2xl bg-[#0f1419] text-gray-300 text-[13px] overflow-auto font-mono custom-scrollbar border border-white/5 shadow-2xl">
              <code>{generateSchema()}</code>
           </pre>

           <div className="mt-6 p-4 bg-purple-500/5 border border-purple-500/10 rounded-2xl">
              <p className="text-xs text-purple-600 dark:text-purple-400 leading-relaxed">
                <i className="ri-information-line mr-1"></i>
                Paste this script into the <code>&lt;head&gt;</code> or <code>&lt;body&gt;</code> of your website. Google recommends JSON-LD for structured data.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SchemaGenerator;
