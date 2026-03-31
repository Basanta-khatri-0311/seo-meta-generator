import React, { useState } from "react";
import PreviewCard from "./PreviewCard";

const PreviewTabs = ({ metaData }) => {
  const platforms = [
    { name: "Google", icon: "ri-google-line", color: "text-blue-500" },
    { name: "Facebook", icon: "ri-facebook-fill", color: "text-[#1877F2]" },
    { name: "Twitter", icon: "ri-twitter-x-fill", color: "text-black dark:text-white" },
    { name: "LinkedIn", icon: "ri-linkedin-fill", color: "text-[#0A66C2]" },
    { name: "WhatsApp", icon: "ri-whatsapp-line", color: "text-[#25D366]" },
  ];
  const [activeTab, setActiveTab] = useState("Google");

  return (
    <div className="flex flex-col gap-8 w-full animate-in fade-in duration-500">
      <div className="flex flex-wrap gap-0 border border-gray-200 dark:border-dark-border w-fit h-fit overflow-hidden">
        {platforms.map((p) => (
          <button
            key={p.name}
            onClick={() => setActiveTab(p.name)}
            className={`flex items-center gap-3 px-6 py-4 text-[10px] font-black uppercase tracking-widest transition-all duration-200 border-r border-gray-100 dark:border-dark-border last:border-r-0 ${
              activeTab === p.name
                ? "bg-brand-primary text-white"
                : "text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-dark-card"
            }`}
          >
            <i className={`${p.icon} text-lg`}></i>
            <span className="hidden lg:inline">{p.name}</span>
          </button>
        ))}
      </div>

      <div className="w-full">
        <PreviewCard platform={activeTab} metaData={metaData} />
      </div>

      <div className="p-5 bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-dark-border">
        <p className="text-[10px] text-gray-500 dark:text-gray-400 font-black uppercase tracking-widest flex items-center gap-2">
          <i className="ri-information-line text-brand-primary"></i>
          SIMULATION_MODE_ENABLED : PLATFORM_VARIANCES_MAY_OCCUR
        </p>
      </div>
    </div>
  );
};

export default PreviewTabs;
