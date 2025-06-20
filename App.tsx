
import React, { useState, useEffect } from 'react';
import { TARGET_MONTH, TARGET_DAY, CLOSED_DOOR_IMAGE_URL, VIDEO_URL } from './constants';
import Door from './components/Door';
import VideoPlayer from './components/VideoPlayer';

const App: React.FC = () => {
  const [isSpecialDay, setIsSpecialDay] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const today = new Date();
    const currentMonth = today.getMonth(); // 0-indexed (0 for January, 11 for December)
    const currentDay = today.getDate();   // 1-indexed (1 to 31)

    // Compare with TARGET_MONTH (0-indexed) and TARGET_DAY (1-indexed) from constants.ts
    if (currentMonth === TARGET_MONTH && currentDay === TARGET_DAY) {
      setIsSpecialDay(true);
    }
    // Simulate a slight delay for the mystery, or if date checking was async
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // 0.5 second delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-900">
        <svg className="animate-spin h-10 w-10 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900 p-4">
      <main className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl">
        {isSpecialDay ? (
          <VideoPlayer videoUrl={VIDEO_URL} />
        ) : (
          <Door imageUrl={CLOSED_DOOR_IMAGE_URL} />
        )}
      </main>
    </div>
  );
};

export default App;
