import React from "react";
import Image from "next/image";
function CommentsFeed() {
  return (
    <div className="bg-black border-white rounded-b-lg shadow p-5 pl-0 text-sm text-white content-center font-semibold flex flex-row flex-wrap">
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex items-center gap-2 mb-4">
          <Image
            className="border border-indigo-100 shadow-lg rounded-full first-letter"
            src="/logo.jpg "
            alt="porfile"
            width={50}
            height={50}
          />

          <div className="w-full text-left text-sm text-white">
            @Some Person
          </div>
          {/* comments */}
        </div>
        <div className="text-sm font-normal">
          A Pretty Cool photo from the mountains. Image credit to @danielmirlea
          on Unsplash. A Pretty Cool photo from the mountains. Image credit to
          @danielmirlea on Unsplash.
        </div>
      </div>
    </div>
  );
}

export default CommentsFeed;
