"use client";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Aside from "@/components/aside";
import Form from "@/components/form";
import FeedCard from "@/components/feedcard";

const Feed = () => {
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
    <div className="w-full flex flex-row flex-wrap">
      <div className="w-full bg-black h-screen flex flex-row flex-wrap justify-center ">
        <Aside />

        <div className="w-full md:w-1/2 p-3 md:px-12 lg:24 border-gray-700 border h-full overflow-auto antialiased m-3 rounded-xl">
          <Form />

          <FeedCard />
        </div>
      </div>
    </div>
  );
};

export default Feed;
