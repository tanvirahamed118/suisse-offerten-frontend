import PropTypes from "prop-types";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

function ImageBox({ setFormData }) {
  const { t } = useTranslation();
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
  const maxTotalSizeMB = 10;
  const maxImageCount = 5;

  const handleFileInputChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const validFiles = selectedFiles.filter((file) =>
      allowedTypes.includes(file.type)
    );

    // Check total number of files after adding new ones
    if (files.length + validFiles.length > maxImageCount) {
      toast.error(`You can upload a maximum of ${maxImageCount} images.`);
      return;
    }

    // Calculate total file size for the selected files and existing files
    const totalSizeMB = validFiles.reduce(
      (acc, file) => acc + file.size / (1024 * 1024),
      0
    );
    const currentSizeMB = files.reduce(
      (acc, file) => acc + file.size / (1024 * 1024),
      0
    );

    if (totalSizeMB + currentSizeMB > maxTotalSizeMB) {
      toast.error(`Total file size should not exceed ${maxTotalSizeMB}MB.`);
      return;
    }

    // Filter out unsupported files and show a message if any were filtered
    if (validFiles.length < selectedFiles.length) {
      toast.error("Only JPG, JPEG, or PNG files are allowed.");
    }

    // Update state with valid files and their previews
    const newImageUrls = validFiles.map((file) => URL.createObjectURL(file));
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
        {t("image_mainnote")}
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
      <p className="text-xs mt-3 font-normal text-black text-center w-10/12 m-auto lg:w-6/12">
        {t("image_sortNote")}
      </p>
      <Toaster />
    </div>
  );
}

ImageBox.propTypes = {
  setFormData: PropTypes.func, // Expecting a function to handle file changes
};

export default ImageBox;
