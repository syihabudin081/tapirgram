import React, { useEffect, useState } from "react";
import FeedCard from "./feedcard"; // Import the FeedCard component
import Cookies from "js-cookie";

interface FeedData {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  photo_url: string;
  caption: string;
  UserID: number;
  User: any;
}

function Feed() {
  const [data, setData] = useState<FeedData[]>([]);

  const fetchFeed = async () => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/photos/get",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, 
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
         
          setData(data); 
        } else {
       
          console.error("Gagal memuat Data Photo:", response.status);
        }
      } catch (error) {
  
        console.error("Kesalahan dalam permintaan Photo:", error);
      }
    } else {
      console.error("Tidak ada token otorisasi.");
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <FeedCard key={item.id} data={item} />
      ))}
    </div>
  );
}

export default Feed;
