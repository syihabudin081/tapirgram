import { PhotoIcon } from "@heroicons/react/24/outline";
import React, { ChangeEvent, useState } from "react";
import Cookies from "js-cookie";

function Form() {
  const [image, setImage] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setImage(file);
  };

  const handleCaptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCaption(e.target.value);
  };

  const isSubmitDisabled = !image || !caption;

  const handleSubmit = () => {
    if (isSubmitDisabled) {
      setError("Harap isi baik caption dan pilih gambar.");
      return;
    }

    const token = Cookies.get("token");
    const formData = new FormData();
    formData.append("file_input", image);
    formData.append("caption", caption);

    fetch("http://localhost:8080/api/v1/photos/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Handle a successful response from the server
          console.log("Image and caption uploaded successfully");
          // Reset form state if needed
          setImage(null);
          setCaption("");
          setError(null);
        } else {
          // Handle errors
          console.error("Error uploading image and caption");
        }
      })
      .catch((error) => {
        // Handle network errors
        console.error("Network error:", error);
      });
  };

  return (
    <div className="bg-black p-4 shadow-md  border-b border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-white">Post</h2>

      <div className="mb-4">
        <textarea
          placeholder="Tulis caption Anda di sini..."
          rows={2}
          className="w-full p-2 border rounded-md text-black"
          value={caption}
          onChange={handleCaptionChange}
        />
      </div>
      <div className="">
        <label htmlFor="imageInput" className="text-white mr-2">
          <PhotoIcon width={32} height={32} />
        </label>
        <input
          type="file"
          accept="image/*"
          id="imageInput"
          onChange={handleImageChange}
          hidden
        />
        {image && <span className="text-white">{image.name}</span>}
      </div>
      {error && <p className="text-red-600">{error}</p>}
      <button
        className="bg-white rounded-lg text-black font-semibold px-4 py-2"
        onClick={handleSubmit}
        disabled={isSubmitDisabled} // Menonaktifkan tombol jika kondisi tidak terpenuhi
      >
        Bagikan
      </button>
    </div>
  );
}

export default Form;
