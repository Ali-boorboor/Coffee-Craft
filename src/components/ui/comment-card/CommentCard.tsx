import React from "react";

type CommentCardProps = {
  commenter: string;
  commentBody: string;
  image: string;
};

const CommentCard = ({ commenter, commentBody, image }: CommentCardProps) => {
  return (
    <div className="bg-primary text-primary-foreground w-full border-2 border-primary-foreground rounded-md drop-shadow-xs drop-shadow-primary-foreground p-4 space-y-4">
      <div className="flex items-center gap-4">
        <img
          className="w-24 h-24 md:w-32 md:h-32 object-cover object-center rounded-md border-2 border-primary-foreground transform-gpu will-change-transform"
          src={image}
          alt="client-image"
        />
        <p className="md:text-lg font-bold transform-gpu will-change-transform capitalize">
          {commenter}
        </p>
      </div>
      <p className="leading-6 line-clamp-3 font-normal text-sm md:text-base transform-gpu will-change-transform">
        {commentBody}
      </p>
    </div>
  );
};

export default CommentCard;
