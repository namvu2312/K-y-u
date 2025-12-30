
import React, { useState, useEffect } from 'react';

interface DramaticIntroProps {
  onComplete: () => void;
}

const lines = [
  "> INITIALIZING SYSTEM...",
  "> ACCESSING YEARBOOK_DATA_2026...",
  "> SCANNING TEMPORAL COORDINATES...",
  "> RECIPIENT FOUND: HUYEN TRANG",
  "> LOCATION: THPT LE VAN THINH",
  "> UPLOADING NEON_PROTOCOL...",
  "> CONNECTION ESTABLISHED.",
  "> WELCOME TO THE FUTURE."
];

export const DramaticIntro: React.FC<DramaticIntroProps> = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState<string[]>([]);

  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => [...prev, lines[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentLine, onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-start justify-center p-8 font-mono overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
      
      <div className="w-full max-w-lg">
        {displayText.map((text, index) => (
          <div 
            key={index} 
            className={`mb-2 text-sm md:text-lg ${index === lines.length - 1 ? 'text-cyan-400 font-bold animate-pulse' : 'text-green-500'}`}
          >
            {text}
          </div>
        ))}
        <div className="mt-4 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-cyan-500 transition-all duration-500 ease-out" 
            style={{ width: `${(currentLine / lines.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <div className="absolute bottom-8 right-8 text-xs text-gray-600 animate-pulse">
        SYSTEM v3.0 // NEON-CORE
      </div>
    </div>
  );
};
