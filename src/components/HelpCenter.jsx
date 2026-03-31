import React from "react";

const HelpCenter = () => {
  const sections = [
    {
      title: "1. What is this Studio?",
      desc: "A complete toolkit to help search engines (Google, Bing) and social media (Facebook, X) understand exactly what your website is about.",
      icon: "ri-briefcase-line",
      color: "text-brand-primary"
    },
    {
      title: "2. Why do I need Meta Tags?",
      desc: "Meta tags control how your site looks when shared. Without them, your site might look like a broken link on social media. Good tags also help you rank higher on Google.",
      icon: "ri-seo-line",
      color: "text-brand-primary"
    },
    {
      title: "3. What are Sitemaps & Robots.txt?",
      desc: "Sitemaps are a 'map' for Google to find all your hidden pages. Robots.txt are 'instructions' for search bots to know which areas to visit or stay away from.",
      icon: "ri-robot-2-line",
      color: "text-yellow-500"
    },
    {
      title: "4. What about Schema?",
      desc: "Schema (Rich Results) tells search engines specific details like 'this is my logo' or 'this is our price'. It's how you get those fancy star ratings in search results.",
      icon: "ri-node-tree",
      color: "text-purple-500"
    },
    {
      title: "5. Where do I put the code?",
      desc: "Everything you generate here should be pasted inside the <head> section of your website's HTML. The Robots.txt and Sitemap files should be uploaded to your site's root folder.",
      icon: "ri-code-s-slash-line",
      color: "text-green-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-700 pb-20">
      {sections.map((s, i) => (
        <div key={i} className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border p-8 hover:border-brand-primary transition-colors group">
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-12 h-12 bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-dark-border flex items-center justify-center text-2xl ${s.color}`}>
              <i className={s.icon}></i>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tighter text-gray-900 dark:text-white leading-none">
              {s.title}
            </h3>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
            {s.desc}
          </p>
        </div>
      ))}
      
      <div className="md:col-span-2 bg-brand-primary p-12 text-center border border-brand-primary">
         <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 italic">Ready to rank #1?</h2>
         <p className="text-white/80 uppercase tracking-widest text-xs font-bold mb-8">All tools are synced and optimized for current search engine protocols.</p>
         <div className="flex justify-center gap-4">
            <div className="px-6 py-3 border border-white/30 text-white text-[10px] font-black tracking-widest uppercase">Protocol_V2.0.4</div>
            <div className="px-6 py-3 border border-white/30 text-white text-[10px] font-black tracking-widest uppercase">Verified Studio</div>
         </div>
      </div>
    </div>
  );
};

export default HelpCenter;
