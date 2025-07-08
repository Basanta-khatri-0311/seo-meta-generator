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
    <form className="space-y-4 w-full">
      <input
        name="title"
        value={metaData.title}
        onChange={handleChange}
        type="text"
        className="w-full p-3 border rounded-lg text-sm sm:text-base focus:outline-blue-500"
        placeholder="Title"
      />
      <textarea
        name="description"
        value={metaData.description}
        onChange={handleChange}
        rows={3}
        className="w-full p-3 border rounded-lg text-sm sm:text-base focus:outline-blue-500 resize-none"
        placeholder="Description"
      ></textarea>
      <input
        name="url"
        value={metaData.url}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg text-sm sm:text-base focus:outline-blue-500"
        placeholder="URL"
      />
      <input
        name="image"
        value={metaData.image}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg text-sm sm:text-base focus:outline-blue-500"
        placeholder="Image URL"
      />
      <button
        type="buton"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Copy Meta Tags
      </button>
    </form>
  );
};

export default MetaForm;
