import React from "react";

const PreviewCard = ({ platform }) => {
  return (
    <div>
      <img
        src=""
        alt="preview"
        className="h-40 sm:h-48 w-full object-cover mb-3 rounded"
      />
      <h2 className="font-bold text-base sm:text-lg truncate">Example Title</h2>
      <p className="text-sm text-gray-600 mt-1">
        Description of  page that appears in the preview.
      </p>
      <span className="text-xs text-blue-600  block mt-2">
        https://example.com
      </span>
      <div className="text-right mt-2 text-xs italic text-gray-400">
        {platform} preview
      </div>
    </div>
  );
};

export default PreviewCard;
