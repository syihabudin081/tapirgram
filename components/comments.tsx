import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
interface CommentsFeedProps {
  photoId: number;
}

interface CommentProps{
  id: number;
  created_at: string;
  updated_at: string;
  message: string;
  UserID: number;
  PhotoID: number;
  Photo: any | null; // Ganti 'any' dengan tipe yang sesuai jika Anda memiliki definisi Photo
  User: any;
}

function CommentsFeed({ photoId }: CommentsFeedProps) {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<CommentProps[]>([]) 
  const token = Cookies.get("token");

  const handleCommentSubmit = async () => {
    // Pastikan newComment tidak kosong sebelum mengirim komentar
    if (newComment.trim() === "") {
      return;
    }
  
    // Persiapkan data komentar baru
    const newCommentData = {
      message: newComment,
    
    };
  
    try {
      // Kirim komentar baru ke server
      const response = await fetch(`http://localhost:8080/api/v1/comments/create/${photoId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Pastikan Anda memiliki token yang sah
        },
        body: JSON.stringify(newCommentData),
      });
  
      if (response.ok) {
        // Komentar berhasil terkirim, refresh komentar
        fetchComments();
        setNewComment(""); // Mengosongkan input komentar
      } else {
        console.error("Gagal mengirim komentar");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  

  const fetchComments = async () => {
 
    let response = await fetch(`http://localhost:8080/api/v1/comments/get/photo/${photoId}`, {
      headers: {
        Authorization: `Bearer ${token}`, 
        "Content-Type": "application/json",
      },
      method: "GET"
    });
    console.log(response);
    setComments(await response.json());

  }



  useEffect(() => {
    fetchComments();
  
  }, []);

  return (
    <div className="bg-black border-white rounded-b-lg shadow p-5 pl-0 text-sm text-white content-center font-semibold flex flex-row flex-wrap">
      <div className="w-full mb-3 border-b border-gray-700 pb-4">
        <input
          type="text"
          placeholder="Tambahkan komentar..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="bg-white text-black rounded-lg w-full p-4 border-b border-gray-700"
        />
        <button
          onClick={handleCommentSubmit}
          className="text-black font-semibold bg-white py-1 px-2 rounded mt-2"
        >
          Kirim Komentar
        </button>
      </div>
      {comments.map((comment) => (
      <div key={comment.id} className="w-full flex flex-col border-b  mt-2 border-gray-700">
        <div className="w-full flex items-center gap-2 mb-2">
          <Image
            className="border border-indigo-100 shadow-lg rounded-full first-letter"
            src="/logo.jpg"
            alt="profile"
            width={32}
            height={32}
          />

          <div className="w-full text-left text-sm text-white">
            @{comment.User.username}
          </div>
        </div>
        <div className="text-sm text-left font-light mb-4">{comment.message}</div>
      </div>
    ))}
    </div>
  );
}

export default CommentsFeed;
