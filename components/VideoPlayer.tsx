
import React from 'react';

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  // If videoUrl is the placeholder or empty, we'll still attempt to render the video tag.
  // The browser will show its native error for an invalid src, which is acceptable.
  // Configuration instructions are now in README.md.
  const isPlaceholderUrl = !videoUrl || videoUrl.trim() === '' || videoUrl === 'YOUR_VIDEO_URL_HERE.mp4';

  return (
    <div className={`bg-black p-1 sm:p-2 rounded-xl shadow-2xl ${isPlaceholderUrl ? 'shadow-red-500/30 ring-2 ring-red-500' : 'shadow-emerald-500/30 ring-2 ring-emerald-500'}`}>
      <div className="aspect-video overflow-hidden rounded-lg">
        <video 
          key={videoUrl} // Add key to force re-render if URL changes
          src={videoUrl} 
          controls 
          autoPlay 
          muted // Muted is often necessary for autoplay to work in browsers
          loop  // Optional: if the video should loop
          className="w-full h-full object-contain bg-black"
          playsInline // Important for iOS
          aria-label="Special video playing because it's the chosen day"
        >
          Your browser does not support the video tag. Please try a different browser to view this content.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
