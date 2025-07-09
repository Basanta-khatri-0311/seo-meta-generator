import React from "react";

const PreviewCard = ({ platform, metaData }) => {
  const { title, description, image, url } = metaData;
  const placeholderImage =
    "https://via.placeholder.com/600x300?text=Image+Preview";

  const renderGooglePreview = () => (
    <div className="border border-blue-600 dark:border-gray-700 p-4 bg-white dark:bg-[#1c1c1c] rounded shadow max-w-full sm:max-w-md transition-colors">
      <h2 className="text-blue-700 dark:text-blue-400 text-lg font-semibold">
        {title || "Your Page Title"}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
        {url || "https://your-site.com"}
      </p>
      <p className="text-gray-800 dark:text-gray-300 text-sm mt-2">
        {description || "Your meta description will appear here."}
      </p>
      <p className="text-xs italic text-right text-gray-400 dark:text-gray-500 mt-2">
        Google Search Preview
      </p>
    </div>
  );

  const renderFacebookPreview = () => (
    <div className="bg-white dark:bg-[#1c1c1c] border  border-blue-600 dark:border-gray-700 rounded shadow max-w-full sm:max-w-md overflow-hidden transition-colors">
      <img
        src={image || placeholderImage}
        alt="Facebook Preview"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
          {url || "https://your-site.com"}
        </p>
        <h2 className="font-bold text-lg dark:text-white">
          {title || "Facebook Title"}
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
          {description || "Facebook description..."}
        </p>
        <p className="text-xs italic text-right text-gray-400 dark:text-gray-500 mt-2">
          Facebook Open Graph Preview
        </p>
      </div>
    </div>
  );

  const renderTwitterPreview = () => (
    <div className="bg-white dark:bg-[#1c1c1c] border  border-blue-600 dark:border-gray-700 rounded shadow max-w-full sm:max-w-md p-4 transition-colors">
      <div className="flex flex-col gap-2">
        <span className="text-gray-500 dark:text-gray-400 text-xs">
          {url || "https://your-site.com"}
        </span>
        <h2 className="font-semibold text-base dark:text-white">
          {title || "Twitter Card Title"}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description || "Twitter card description..."}
        </p>
        <img
          src={image || placeholderImage}
          alt="Twitter Preview"
          className="w-full h-36 object-cover rounded mt-2"
        />
      </div>
      <p className="text-xs italic text-right text-gray-400 dark:text-gray-500 mt-2">
        Twitter Card Preview
      </p>
    </div>
  );

  if (platform === "Google") return renderGooglePreview();
  if (platform === "Facebook") return renderFacebookPreview();
  if (platform === "Twitter") return renderTwitterPreview();

  return null;
};

export default PreviewCard;
