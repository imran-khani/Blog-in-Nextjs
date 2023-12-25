"use client";

import { useState } from "react";

const EmojiCount = () => {
  const [emojiCount, setEmojiCount] = useState<number>(20);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    if (!isLiked) {
      setEmojiCount((prev) => prev + 1);
      setIsLiked(true);
    } else {
      setEmojiCount((prev) => prev - 1);
      setIsLiked(false);
    }
  };

  return (
    <div>
      <span
        onClick={handleLike}
        className={`inline-flex select-none items-center leading-none text-sm ${
          isLiked ? "text-yellow-500" : "text-gray-600"
        } cursor-pointer`}
      >
        <svg
          className="w-6 h-6 mr-1"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M16 12a4 4 0 01-8 0"></path>
        </svg>
        {emojiCount}
      </span>
    </div>
  );
};

export default EmojiCount;
