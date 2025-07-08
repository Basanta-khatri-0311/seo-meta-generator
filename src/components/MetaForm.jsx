import React from "react";

const MetaForm = () => {
  return (
    <form className="space-y-4 w-full">
      <input
        type="text"
        className="w-full p-3 border rounded-lg text-sm sm:text-base focus:outline-blue-500"
        placeholder="Title"
      />
      <textarea
        rows={3}
        className="w-full p-3 border rounded-lg text-sm sm:text-base focus:outline-blue-500 resize-none"
        placeholder="Description"
      ></textarea>
      <input
        className="w-full p-3 border rounded-lg text-sm sm:text-base focus:outline-blue-500"
        placeholder="URL"
      />
      <input
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
