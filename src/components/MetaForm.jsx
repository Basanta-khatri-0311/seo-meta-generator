import React from "react";

const MetaForm = ({ metaData, setMetaData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMetaData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="space-y-5 w-full bg-white dark:bg-[#1c1c1c] p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
      <input
        name="title"
        value={metaData.title}
        onChange={handleChange}
        type="text"
        placeholder="Enter page title"
        className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1c1c1c] text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <textarea
        name="description"
        value={metaData.description}
        onChange={handleChange}
        rows={3}
        placeholder="Enter meta description"
        className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1c1c1c] text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition"
      ></textarea>
      <input
        name="url"
        value={metaData.url}
        onChange={handleChange}
        placeholder="https://example.com"
        className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1c1c1c] text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <input
        name="image"
        value={metaData.image}
        onChange={handleChange}
        placeholder="https://example.com/image.jpg"
        className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1c1c1c] text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
    </form>
  );
};

export default MetaForm;
