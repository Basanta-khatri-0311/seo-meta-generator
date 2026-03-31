import React from "react";

const PreviewCard = ({ platform, metaData }) => {
  const { title, description, image, url } = metaData;
  const placeholderImage = "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop";
  const displayUrl = url ? url.replace(/^https?:\/\//, '').split('/')[0] : "your-site.com";

  const handleImageError = (e) => {
    e.target.src = placeholderImage;
    e.target.classList.add("opacity-50", "grayscale");
  };

  const renderGooglePreview = () => (
    <div className="bg-white dark:bg-dark-card p-6 rounded-3xl border border-gray-100 dark:border-dark-border shadow-sm transition-all animate-in fade-in duration-500">
      <div className="flex items-center gap-2 mb-2">
         <div className="w-7 h-7 bg-gray-100 dark:bg-dark-surface rounded-full flex items-center justify-center text-[10px] text-gray-500">G</div>
         <div className="text-xs text-gray-500">Google Search</div>
      </div>
      <p className="text-[#1a0dab] dark:text-[#8ab4f8] text-xl font-medium hover:underline cursor-pointer mb-1 truncate">
        {title || "Enter a compelling title for search results"}
      </p>
      <p className="text-[#006621] dark:text-[#34a853] text-sm mb-1 truncate">
        {url || "https://your-website.com"}
      </p>
      <p className="text-[#4d5156] dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
        {description || "A well-written description helps users find your content and improves search ranking."}
      </p>
    </div>
  );

  const renderFacebookPreview = () => (
    <div className="bg-white dark:bg-dark-card rounded-3xl border border-gray-200 dark:border-dark-border shadow-2xl overflow-hidden transition-all animate-in zoom-in-95 duration-500 group">
      <div className="p-3 border-b border-gray-100 dark:border-dark-border flex items-center gap-2">
        <div className="w-8 h-8 bg-[#1877F2] rounded-full flex items-center justify-center shadow-lg"><i className="ri-facebook-fill text-white"></i></div>
        <span className="text-xs font-semibold dark:text-white">Facebook Preview</span>
      </div>
      <div className="relative aspect-video bg-gray-50 dark:bg-dark-surface/50 overflow-hidden">
        <img
          src={image || placeholderImage}
          alt="Facebook Preview"
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-4 bg-[#f0f2f5] dark:bg-[#1c202a]">
        <p className="text-[11px] text-gray-500 uppercase font-medium mb-1 tracking-wider">
          {displayUrl}
        </p>
        <h2 className="font-bold text-base text-gray-900 dark:text-gray-100 line-clamp-1">
          {title || "Facebook Shared Title"}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mt-1 leading-relaxed italic opacity-80">
          {description || "Facebook description preview text goes here..."}
        </p>
      </div>
    </div>
  );

  const renderTwitterPreview = () => (
    <div className="bg-[#0b0d11] text-white rounded-3xl border border-white/10 shadow-2xl overflow-hidden transition-all animate-in slide-in-from-right-4 duration-500 group">
      <div className="p-3 flex items-center gap-2 border-b border-white/5">
        <div className="w-8 h-8 bg-black border border-white/10 rounded-full flex items-center justify-center">
           <i className="ri-twitter-x-fill text-sm"></i>
        </div>
        <span className="text-xs font-medium opacity-70">Post Preview</span>
      </div>
      <div className="relative aspect-video bg-white/5 overflow-hidden">
        <img
          src={image || placeholderImage}
          alt="Twitter Preview"
          onError={handleImageError}
          className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] border border-white/10 tracking-widest font-bold">
          {displayUrl}
        </div>
      </div>
      <div className="p-4 bg-gradient-to-b from-transparent to-black/20">
        <h2 className="font-bold text-base mb-1 line-clamp-1 tracking-tight">
          {title || "Post Title for X"}
        </h2>
        <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed opacity-80">
          {description || "Meta description optimized for the X feed."}
        </p>
      </div>
    </div>
  );

  const renderLinkedInPreview = () => (
    <div className="bg-white dark:bg-dark-card rounded-3xl border border-gray-200 dark:border-dark-border shadow-xl overflow-hidden transition-all animate-in slide-in-from-bottom-4 duration-500 group">
      <div className="aspect-video relative bg-gray-50 dark:bg-dark-surface/50 overflow-hidden">
        <img
          src={image || placeholderImage}
          alt="LinkedIn Preview"
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-4 border-t border-gray-100 dark:border-dark-border bg-[#f3f6f8] dark:bg-[#1c202a]">
        <h2 className="font-bold text-sm text-gray-900 dark:text-gray-100 line-clamp-2 mb-1 leading-snug">
          {title || "LinkedIn Article Title"}
        </h2>
        <p className="text-xs text-gray-500 dark:text-gray-400 truncate opacity-70">
          {displayUrl}
        </p>
      </div>
    </div>
  );


  const renderWhatsAppPreview = () => (
    <div className="bg-[#e7fce3] dark:bg-[#0b141a] p-3 rounded-2xl border-l-[6px] border-[#25d366] shadow-md max-w-[280px] transition-all animate-in fade-in duration-700">
      <div className="flex gap-3">
        <div className="flex-1 min-w-0">
           <h2 className="font-bold text-[13px] text-[#075e54] dark:text-[#25d366] truncate mb-0.5">
            {title || "WhatsApp Preview"}
          </h2>
          <p className="text-[11px] text-gray-600 dark:text-gray-400 line-clamp-2 mb-1">
            {description || "Shared via WhatsApp description..."}
          </p>
          <span className="text-[10px] text-[#34b7f1] italic">{url || "your-site.com"}</span>
        </div>
        <img
          src={image || placeholderImage}
          alt="WhatsApp"
          className="w-14 h-14 object-cover rounded-lg flex-shrink-0"
        />
      </div>
    </div>
  );

  if (platform === "Google") return renderGooglePreview();
  if (platform === "Facebook") return renderFacebookPreview();
  if (platform === "Twitter") return renderTwitterPreview();
  if (platform === "LinkedIn") return renderLinkedInPreview();
  if (platform === "WhatsApp") return renderWhatsAppPreview();

  return null;
};

export default PreviewCard;

