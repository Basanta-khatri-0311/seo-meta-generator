import React, { useState, useEffect } from "react";
import MetaForm from "../components/MetaForm";
import PreviewTabs from "../components/PreviewTabs";
import MetaOutput from "../components/MetaOutput";
import SitemapTool from "../components/SitemapTool";
import SchemaGenerator from "../components/SchemaGenerator";
import RobotsTool from "../components/RobotsTool";
import HelpCenter from "../components/HelpCenter";

const Home = () => {
   const [activeTool, setActiveTool] = useState("meta"); // 'meta', 'sitemap', 'schema', 'robots', or 'help'
   const [metaData, setMetaData] = useState({
      title: "",
      description: "",
      image: "",
      url: "",
      uploadMode: false,
   });
   const [isDark, setIsDark] = useState(false);

   // Load preference from localStorage
   useEffect(() => {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
         document.documentElement.classList.add("dark");
         setIsDark(true);
      }
   }, []);

   // Toggle dark mode
   const toggleDarkMode = () => {
      const html = document.documentElement;
      if (html.classList.contains("dark")) {
         html.classList.remove("dark");
         localStorage.setItem("theme", "light");
         setIsDark(false);
      } else {
         html.classList.add("dark");
         localStorage.setItem("theme", "dark");
         setIsDark(true);
      }
   };

   const tools = [
    { id: "meta", name: "Meta Editor", icon: "ri-seo-line", desc: "Basic SEO tags", color: "border-brand-primary" },
    { id: "sitemap", name: "Sitemap Builder", icon: "ri-map-2-line", desc: "Sitemap generator", color: "border-green-500" },
    { id: "schema", name: "Schema Builder", icon: "ri-node-tree", desc: "Structured data", color: "border-purple-500" },
    { id: "robots", name: "Robots.txt", icon: "ri-robot-2-line", desc: "Crawler rules", color: "border-yellow-500" },
    { id: "help", name: "Help & Docs", icon: "ri-question-line", desc: "Manual", color: "border-gray-500" },
  ];

  return (
    <div className="flex h-screen bg-white dark:bg-dark-surface transition-colors overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-20 lg:w-72 h-full flex-shrink-0 bg-white dark:bg-dark-card border-r border-gray-200 dark:border-dark-border flex flex-col pt-8 pb-6 transition-all duration-300">
        <div className="px-8 mb-16 hidden lg:block">
           <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-brand-primary flex items-center justify-center text-white">
                 <i className="ri-command-fill"></i>
              </div>
              <h1 className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white uppercase leading-none">
                META<span className="text-brand-primary">lab</span>
              </h1>
           </div>
           <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-600">SEO Tools</h3>
        </div>
        
        <div className="flex-1 space-y-0.5 overflow-y-auto custom-scrollbar">
           {tools.map(tool => (
             <div 
               key={tool.id}
               onClick={() => setActiveTool(tool.id)}
               className={`sidebar-item group ${
                 activeTool === tool.id 
                 ? "bg-brand-primary text-white border-l-brand-primary" 
                 : "text-gray-500 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-dark-surface"
               }`}
             >
                <i className={`${tool.icon} text-lg`}></i>
                <div className="hidden lg:block">
                   <p className="font-bold leading-none">{tool.name}</p>
                </div>
             </div>
           ))}
        </div>

        <div className="px-6 space-y-4 pt-6 border-t border-gray-100 dark:border-dark-border mt-4">
           <button 
             onClick={toggleDarkMode}
             className="w-full sidebar-item border border-gray-200 dark:border-dark-border text-gray-400 hover:text-brand-primary px-4 bg-transparent"
           >
              <i className={isDark ? "ri-sun-line text-lg" : "ri-moon-line text-lg"}></i>
              <span className="hidden lg:block font-bold text-[10px]">{isDark ? "Light Mode" : "Dark Mode"}</span>
           </button>
           
           <div className="hidden lg:block">
              <p className="text-[10px] font-bold text-gray-300 dark:text-gray-600 tracking-widest uppercase">Version 2.0.4</p>
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto custom-scrollbar relative px-6 lg:px-16 py-12 transition-all duration-500">
        <div className="max-w-6xl mx-auto h-full flex flex-col">
          {activeTool === 'meta' && (
            <div className="space-y-16 h-full pb-20">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-gray-100 dark:border-dark-border pb-10">
                 <div>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight uppercase">Meta Tag Editor</h2>
                    <p className="text-xs text-gray-400 mt-2 font-medium uppercase tracking-widest">Optimizing your website for social sharing and search results.</p>
                 </div>
                 <div className="flex items-center gap-4 text-[10px] font-bold text-brand-primary uppercase tracking-widest border border-brand-primary/20 bg-brand-primary/5 px-4 py-2">
                    <span className="w-1.5 h-1.5 bg-brand-primary"></span> Live Sync
                 </div>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
                 <div className="xl:col-span-5 border border-gray-200 dark:border-dark-border">
                    <MetaForm metaData={metaData} setMetaData={setMetaData} />
                 </div>
                 <div className="xl:col-span-7 space-y-12">
                    <PreviewTabs metaData={metaData} />
                    <MetaOutput metaData={metaData} />
                 </div>
              </div>
            </div>
          )}

          {activeTool === 'sitemap' && (
            <div className="space-y-12 pb-20">
               <div className="border-b border-gray-100 dark:border-dark-border pb-10">
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight uppercase underline decoration-brand-primary decoration-4 underline-offset-8">Sitemap Builder</h2>
                  <p className="text-xs text-gray-400 mt-4 font-medium uppercase tracking-widest">Creating a list of all your pages for search engine crawlers.</p>
               </div>
               <div className="">
                  <SitemapTool />
               </div>
            </div>
          )}

          {activeTool === 'schema' && (
            <div className="space-y-12 pb-20">
               <div className="border-b border-gray-100 dark:border-dark-border pb-10">
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight uppercase underline decoration-purple-500 decoration-4 underline-offset-8">Schema Builder</h2>
                  <p className="text-xs text-gray-400 mt-4 font-medium uppercase tracking-widest">Generating structured data for rich search results.</p>
               </div>
               <div className="">
                  <SchemaGenerator />
               </div>
            </div>
          )}

          {activeTool === 'robots' && (
            <div className="space-y-12 pb-20">
               <div className="border-b border-gray-100 dark:border-dark-border pb-10">
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight uppercase underline decoration-yellow-500 decoration-4 underline-offset-8 font-black">Robots.txt Tools</h2>
                  <p className="text-xs text-gray-400 mt-4 font-medium uppercase tracking-widest">Giving instructions to search engine bots about which pages to visit.</p>
               </div>
               <div className="">
                  <RobotsTool />
               </div>
            </div>
          )}

          {activeTool === 'help' && (
            <div className="space-y-12 pb-20">
               <div className="border-b border-gray-100 dark:border-dark-border pb-10">
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight uppercase underline decoration-brand-primary decoration-4 underline-offset-8">Help Center & Documentation</h2>
                  <p className="text-xs text-gray-400 mt-4 font-medium uppercase tracking-widest">Learn how to use these tools to rank better.</p>
               </div>
               <div className="">
                  <HelpCenter />
               </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
