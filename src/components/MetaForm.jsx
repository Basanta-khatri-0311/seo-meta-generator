import React from "react";

const MetaForm = ({ metaData, setMetaData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMetaData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const titleLength = metaData.title.length;
  const descLength = metaData.description.length;

  return (
    <div className="flex flex-col gap-10 w-full p-10 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border animate-in fade-in duration-500">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-primary flex items-center justify-center">
            <i className="ri-edit-box-line text-white text-xl"></i>
          </div>
          <h2 className="text-xl font-bold uppercase tracking-tighter text-gray-900 dark:text-white">
            Meta Tag Editor
          </h2>
        </div>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
          Enter your website details below
        </p>
      </div>

      <div className="space-y-8">
        {/* Title Field */}
        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Page Title</label>
            <span className={`text-[10px] font-bold border px-2 py-0.5 ${
              titleLength > 60 ? 'border-red-500 text-red-500 bg-red-500/5' : 
              titleLength > 50 ? 'border-brand-primary text-brand-primary bg-brand-primary/5' : 'border-gray-200 dark:border-dark-border text-gray-500'
            }`}>
              {titleLength} / 60
            </span>
          </div>
          <input
            name="title"
            value={metaData.title}
            onChange={handleChange}
            type="text"
            placeholder="Main heading of your page"
            className="input-premium"
          />
        </div>

        {/* Description Field */}
        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Page Description</label>
            <span className={`text-[10px] font-bold border px-2 py-0.5 ${
              descLength > 160 ? 'border-red-500 text-red-500 bg-red-500/5' : 
              descLength > 150 ? 'border-brand-primary text-brand-primary bg-brand-primary/5' : 'border-gray-200 dark:border-dark-border text-gray-500'
            }`}>
              {descLength} / 160
            </span>
          </div>
          <textarea
            name="description"
            value={metaData.description}
            onChange={handleChange}
            rows={4}
            placeholder="A short summary of your page content..."
            className="input-premium resize-none"
          ></textarea>
        </div>

        {/* URL Field */}
        <div className="space-y-3">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Website URL</label>
          <div className="relative">
             <i className="ri-link text-gray-400 absolute left-5 top-1/2 -translate-y-1/2"></i>
             <input
              name="url"
              value={metaData.url}
              onChange={handleChange}
              placeholder="https://your-website.com"
              className="input-premium pl-12"
            />
          </div>
        </div>

        {/* Image Field */}
        <div className="space-y-4">
          <div className="flex justify-between items-end">
             <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Preview Image</label>
             <div className="flex border border-gray-200 dark:border-dark-border h-8">
                <button 
                  onClick={() => setMetaData(prev => ({ ...prev, uploadMode: false }))}
                  className={`px-3 text-[9px] font-bold uppercase tracking-widest transition-all ${!metaData.uploadMode ? 'bg-brand-primary text-white' : 'text-gray-400 hover:text-gray-600'}`}
                >Link</button>
                <button 
                  onClick={() => setMetaData(prev => ({ ...prev, uploadMode: true }))}
                  className={`px-3 text-[9px] font-bold uppercase tracking-widest transition-all ${metaData.uploadMode ? 'bg-brand-primary text-white' : 'text-gray-400 hover:text-gray-600'}`}
                >Upload</button>
             </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-1">
              {!metaData.uploadMode ? (
                <div className="relative">
                  <i className="ri-link text-gray-400 absolute left-5 top-1/2 -translate-y-1/2"></i>
                  <input
                    name="image"
                    value={metaData.image.startsWith('data:') ? '' : metaData.image}
                    onChange={handleChange}
                    placeholder="https://your-website.com/image.jpg"
                    className="input-premium pl-12"
                  />
                </div>
              ) : (
                <label className="flex items-center justify-center w-full h-[52px] border border-dashed border-gray-300 dark:border-dark-border bg-gray-50/50 dark:bg-dark-surface/50 cursor-pointer hover:border-brand-primary transition-colors group">
                  <input 
                    type="file" 
                    className="hidden" 
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setMetaData(prev => ({ ...prev, image: reader.result }));
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-brand-primary">
                    <i className="ri-upload-2-line text-lg"></i>
                    {metaData.image.startsWith('data:') ? "Image Selected" : "Click to Upload File"}
                  </div>
                </label>
              )}
            </div>

            <div className="w-[52px] h-[52px] bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border overflow-hidden flex-shrink-0 flex items-center justify-center p-1">
              {metaData.image ? (
                <img 
                  src={metaData.image} 
                  alt="Preview" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/100?text=Error";
                  }}
                />
              ) : (
                <i className="ri-image-2-line text-gray-300 text-xl"></i>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default MetaForm;

