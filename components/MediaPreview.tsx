import Image from 'next/image';
import React from 'react'

const MediaPreview = ({ src }: { src: string }) => {
  const isVideo = src?.endsWith('.mp4') || src?.endsWith('.webm') || src?.endsWith('.ogg');

  return (
    <div className="w-full max-w-xl h-[400px] rounded overflow-hidden bg-black">
      {isVideo ? (
        <video src={src} controls className="w-full h-full object-cover" />
      ) : (
        <Image src={src} alt="Preview" width={500} height={500} className="w-full h-full object-cover" />
      )}
    </div>
  );
};

export default MediaPreview