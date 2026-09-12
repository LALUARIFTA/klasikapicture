"use client";

import React, { useState, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export const AmbientAudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.25;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={togglePlay}
        className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-full backdrop-blur-xl border transition-all duration-300 shadow-xl cursor-pointer ${
          isPlaying
            ? "bg-red-500/20 border-red-500/50 text-white"
            : "bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-white"
        }`}
        aria-label="Toggle studio ambient audio"
      >
        {isPlaying ? (
          <>
            <div className="flex items-center gap-0.5 h-3">
              <span className="w-0.5 h-3 bg-red-400 animate-pulse rounded-full" />
              <span className="w-0.5 h-2 bg-red-400 animate-ping rounded-full" />
              <span className="w-0.5 h-3.5 bg-red-400 animate-pulse rounded-full" />
            </div>
            <Volume2 className="w-4 h-4 text-red-400" />
            <span className="text-xs font-medium pr-1 text-neutral-200">Studio Ambience</span>
          </>
        ) : (
          <>
            <Music className="w-3.5 h-3.5 text-neutral-400" />
            <VolumeX className="w-4 h-4" />
            <span className="text-xs font-medium pr-1">Musik Studio</span>
          </>
        )}
      </button>
    </div>
  );
};
