// src/components/VideoCard.tsx
import { getYouTubeEmbedUrl } from '@/lib/utils';
import React from 'react';

interface VideoCardProps {
  videoUrl: string;
  title?: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({ videoUrl, title = 'YouTube Video' }) => {
  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <div className="w-full flex-shrink-0 snap-start px-2 sm:w-full md:w-1/2 lg:w-1/3">
      <div className="overflow-hidden rounded-xl bg-slate-900 shadow-md transition-shadow hover:shadow-xl border border-slate-800">
        <div className="relative aspect-video w-full">
          <iframe
            className="h-full w-full border-0"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <h1 className='font-bold text-black py-2 bg-amber-200 text-center text-2xl'>{title}</h1>
      </div>
    </div>
  );
};