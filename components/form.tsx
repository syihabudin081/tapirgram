import { PhotoIcon } from '@heroicons/react/24/outline';
import React, { ChangeEvent, useState } from 'react'

function Form() {
    const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? [0] : null;
    // Handle the selected image here, you can display a preview or upload it to a server.
  };

  const handleCaptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCaption(e.target.value);
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
    </div>
    <button className="bg-white rounded-lg text-black font-semibold px-4 py-2 ">
      Bagikan
    </button>
  </div>
  )
}

export default Form