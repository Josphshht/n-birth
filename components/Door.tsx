
import React from 'react';

interface DoorProps {
  imageUrl: string;
}

const Door: React.FC<DoorProps> = ({ imageUrl }) => {
  return (
    <div className="bg-slate-800/50 p-3 sm:p-4 rounded-xl shadow-2xl transition-all duration-300 ease-in-out hover:shadow-emerald-600/30 ring-1 ring-slate-700/50 hover:ring-emerald-500/70">
      <div className="aspect-[4/3] overflow-hidden rounded-lg">
        <img 
          src={imageUrl} 
          alt="A mysterious closed door" 
          className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
          aria-label="A mysterious closed door, awaiting a special day to open"
        />
      </div>
    </div>
  );
};

export default Door;
