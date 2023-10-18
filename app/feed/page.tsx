"use client";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Aside from "@/components/aside";
import Form from "@/components/form";
import FeedCard from "@/components/feedcard";

const Feed = () => {

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
