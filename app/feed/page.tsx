"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Aside from "@/components/aside";
import Form from "@/components/form";
import FeedCard from "@/components/feedcard";
import Feed from "@/components/feed";

const FeedPage = () => {
  const [login, setLogin] = useState(false);
  const router = useRouter(); // Access the router instance

  // Check for the token when the component mounts
  React.useEffect(() => {
    const token = Cookies.get("token"); // Get the token from cookies or your state
    if (!token) {
      // Redirect to the login page if there's no token
      router.push("/login");
    } else {
      setLogin(true);
    }
  }, []);

  return (
    <div className="w-full flex flex-row flex-wrap">
      <div className="w-full bg-black h-screen flex flex-row flex-wrap justify-center">
        <Aside />
        <div className="w-full md:w-1/2 p-3 md:px-12 lg:24 border-gray-700 border h-full overflow-auto antialiased m-3 rounded-xl">
          {login ? (
            // Tampilkan konten jika sudah login
            <>
              <Form />
              <Feed />
            </>
          ) : (
            // Tampilkan pesan "Login terlebih dahulu" jika belum login
            <div className="bg-red-500 p-4 text-white font-semibold">
              Login terlebih dahulu.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedPage;


