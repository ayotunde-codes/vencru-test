"use client";
import Image from "next/image";
import React, { FC } from "react";

interface AvatarProps {
  avatars: { picture: string }[];
  maxAvatars?: number;
}
const DEFAULT_MAX_AVATARS = 5;
const RenderRemaining: FC<AvatarProps> = ({
  avatars,
  maxAvatars = DEFAULT_MAX_AVATARS,
}) => {
  const remaining = avatars.length - maxAvatars;

  if (remaining < 1) return null;

  return (
    <div className="relative flex items-center justify-center -ml-1 border-2 border-white rounded-full bg-gray-50">
      <p className="flex items-center justify-center w-6 h-6 text-xs font-medium text-gray-600 ">{`+${remaining}`}</p>
    </div>
  );

  // <Avatar {...other} value={`+${remaining}`} color="gray" />
};

const Avatar: FC<AvatarProps> = ({
  avatars,
  maxAvatars = DEFAULT_MAX_AVATARS,
}) => {
  return (
    <div className="flex items-center">
      {avatars.slice(0, maxAvatars).map((v) => (
        <div className="relative w-6 h-6 -ml-1 min-w-6 min-h-6 first:ml-0">
          <Image
            src={v.picture}
            //   src="/assets/icons/Avatar.svg"
            alt="download"
            fill
            style={{ objectFit: "contain" }}
            className="border-2 border-white rounded-full "
          />
        </div>
      ))}
      <RenderRemaining avatars={avatars} />
    </div>
  );
};

export default Avatar;
