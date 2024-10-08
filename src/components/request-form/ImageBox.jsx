import PropTypes from "prop-types";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function ImageBox({ setFormData }) {
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

  const handleFileInputChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const validFiles = selectedFiles.filter((file) =>
      allowedTypes.includes(file.type)
    );
    const newImageUrls = validFiles.map((file) => URL.createObjectURL(file));
    if (validFiles.length < selectedFiles.length) {
      toast.error("Only JPG, JPEG, or PNG files are allowed.");
    }
    setImages((prevImages) => [...prevImages, ...newImageUrls]);
    setFiles((prevFiles) => [...prevFiles, ...validFiles]);

    setFormData((prevFormData) => ({
      ...prevFormData,
      jobFiles: [...files, ...validFiles],
    }));
  };

  const handleDelete = (index) => {
    const updatedImages = images.filter((_, imgIndex) => imgIndex !== index);
    setImages(updatedImages);
    const updatedFiles = files.filter((_, fileIndex) => fileIndex !== index);
    setFiles(updatedFiles);
    setFormData((prevFormData) => ({
      ...prevFormData,
      jobFiles: updatedFiles,
    }));
  };

  return (
    <div className="bg-[#F4F4F4] p-5 w-full h-auto flex flex-col gap-3 items-center justify-center upContainer">
      <h2 className="text-sm md:text-xl font-normal text-black">
        Drop/insert files here, or{" "}
        <span className="text-[#1269cf]">import from</span> the following
        sources:
      </h2>
      <label
        htmlFor="upproduct"
        className="dropContainer h-24 md:h-52 cursor-pointer"
      >
        <i className="fa-solid fa-upload"></i>
        <p>
          {files.length > 0
            ? `${files.length} file(s) selected`
            : "Browse File"}
        </p>
        <input
          type="file"
          name="upproduct"
          id="upproduct"
          className="hidden"
          multiple
          required
          onChange={handleFileInputChange}
        />
      </label>

      <div className="mt-3 w-full flex flex-wrap gap-2">
        {images.map((src, index) => (
          <div key={index} className="relative">
            <img
              src={src}
              alt={`Uploaded Preview ${index + 1}`}
              className="w-24 h-24 object-cover rounded-md"
            />
            <button
              onClick={() => handleDelete(index)}
              className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      <p className="text-xs mt-3 font-normal text-black">
        You can add pictures, videos, or documents.
      </p>
      <Toaster />
    </div>
  );
}

ImageBox.propTypes = {
  setFormData: PropTypes.func, // Expecting a function to handle file changes
};

export default ImageBox;
