import React from "react";

const PreviewCard = ({ platform, metaData }) => {
  const { title, description, image, url } = metaData;

  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white max-w-full sm:max-w-md">
      <img
        src={image || "https://via.placeholder.com/600x300?text=Image+Preview"}
        alt="Preview"
        className="h-40 sm:h-48 w-full object-cover mb-3 rounded"
      />
      <h2 className="font-bold text-base sm:text-lg truncate">
        {title || "Your title will appear here"}
      </h2>
      <p className="text-sm text-gray-600 mt-1">
        {description || "This is where your meta description will be previewed."}
      </p>
      <span className="text-xs text-blue-600 block mt-2">
        {url || "https://your-website.com"}
      </span>
      <div className="text-right mt-2 text-xs italic text-gray-400">
        {platform} Preview
      </div>
    </div>
  );
};

export default PreviewCard;
