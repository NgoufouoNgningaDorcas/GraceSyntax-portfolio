import React, { useEffect, useState } from 'react';

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<GraceSyntax.init() />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#030303] text-zinc-100 flex flex-col items-center justify-center font-mono">
      <div className="mb-4 text-2xl md:text-4xl font-bold tracking-tighter">
        {text} <span className="animate-blink ml-1 text-blue-500">_</span>
      </div>

      <div className="w-[240px] h-[2px] bg-zinc-900 rounded-full relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-loading"></div>
      </div>
      
      <div className="mt-8 text-zinc-600 text-xs uppercase tracking-[0.2em] animate-pulse">
        System Calibration in Progress
      </div>
    </div>
  );
};
