
import React from 'react';
import { InvitationData } from '../types';

interface InvitationCardProps {
  data: InvitationData;
}

export const InvitationCard: React.FC<InvitationCardProps> = ({ data }) => {
  return (
    <div className="relative min-h-screen w-full bg-[#050505] flex items-center justify-center p-4 py-12 overflow-hidden select-none">
      
      {/* 3D Moving Grid Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] animate-grid"
          style={{ height: '200%', top: '-50%' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
        </div>
        
        {/* Dynamic Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      {/* Main Container with Floating Animation */}
      <div className="relative w-full max-w-[360px] md:max-w-md animate-float">
        
        {/* Tech Decorative Brackets around the card */}
        <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-cyan-500/50"></div>
        <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-cyan-500/50"></div>
        <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-pink-500/50"></div>
        <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-pink-500/50"></div>

        {/* The Invitation Card */}
        <div className="relative bg-black/60 backdrop-blur-2xl border border-white/10 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] neon-border-pulse scanlines">
          
          {/* Animated Scanning Bar */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_10px_#00ffff] animate-[scan_3s_ease-in-out_infinite] z-10"></div>
          <style>{`
            @keyframes scan {
              0% { top: 0%; opacity: 0; }
              50% { opacity: 1; }
              100% { top: 100%; opacity: 0; }
            }
          `}</style>

          <div className="p-6 md:p-10 space-y-8 relative z-30">
            {/* Header Section */}
            <div className="text-center space-y-3">
              <div className="flex justify-between items-center px-4 opacity-40">
                <span className="text-[8px] font-mono tracking-tighter">LVN-SYS v2.6</span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-cyan-400"></div>
                  <div className="w-4 h-1 bg-cyan-400"></div>
                </div>
                <span className="text-[8px] font-mono tracking-tighter">STATUS: ACTIVE</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-black font-orbitron text-white tracking-tighter uppercase">
                <span className="block text-sm text-cyan-400 tracking-[0.5em] mb-1 font-bold">Protocol</span>
                <span className="relative inline-block">
                  Kỉ Yếu 2026
                  <span className="absolute -inset-1 bg-cyan-500/10 blur-md -z-10"></span>
                </span>
              </h1>
              
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            </div>

            {/* Content Body */}
            <div className="space-y-6">
              {/* Recipient HUD */}
              <div className="relative group">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-pink-500 shadow-[0_0_10px_#ff00ff]"></div>
                <div className="pl-4">
                  <h3 className="text-[9px] uppercase tracking-[0.3em] text-pink-500 font-bold mb-1">Subject: Recipient</h3>
                  <p className="text-2xl md:text-3xl font-orbitron font-black text-white neon-text-pink">{data.recipient}</p>
                </div>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded border-l border-cyan-500/50">
                  <h3 className="text-[8px] uppercase tracking-widest text-cyan-400 mb-2">Time Delta</h3>
                  <p className="text-sm font-bold text-white font-orbitron">{data.time}</p>
                  <p className="text-[10px] text-gray-400">{data.date}</p>
                </div>
                <div className="bg-white/5 p-4 rounded border-r border-pink-500/50 text-right">
                  <h3 className="text-[8px] uppercase tracking-widest text-pink-500 mb-2">Uniform Info</h3>
                  <p className="text-sm font-bold text-white font-orbitron">{data.dressCode}</p>
                  <p className="text-[8px] text-gray-500 mt-1 italic uppercase">Mandatory</p>
                </div>
              </div>

              {/* Location HUD */}
              <div className="border border-white/10 p-4 rounded-lg bg-gradient-to-r from-transparent to-white/5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-[8px] uppercase tracking-widest text-gray-500">Coordinates</h3>
                  <div className="flex gap-1">
                    <div className="w-2 h-[2px] bg-cyan-500"></div>
                    <div className="w-1 h-[2px] bg-cyan-500"></div>
                  </div>
                </div>
                <p className="text-sm font-bold text-white">{data.location}</p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[9px] text-cyan-400 font-mono tracking-tighter uppercase">Verified Location // {data.school}</span>
                </div>
              </div>

              {/* Personal Message */}
              <div className="relative pt-6">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-pink-500/50"></div>
                 <div className="text-center italic text-sm md:text-base text-gray-200 font-medium px-2 py-4">
                    <span className="text-pink-500 font-bold text-lg leading-none">“</span>
                    {data.aiMessage}
                    <span className="text-pink-500 font-bold text-lg leading-none">”</span>
                 </div>
              </div>
            </div>

            {/* Footer Interactive Elements */}
            <div className="pt-4 flex flex-col items-center gap-4">
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full bg-cyan-500 shadow-[0_0_10px_#00ffff] w-2/3 animate-[loading_5s_infinite_linear]"></div>
              </div>
              <style>{`
                @keyframes loading {
                  0% { left: -100%; }
                  100% { left: 100%; }
                }
              `}</style>
              <p className="text-[8px] text-gray-600 font-mono tracking-[0.6em] uppercase animate-pulse">
                Establishing Memory Stream... 100%
              </p>
            </div>
          </div>

          {/* Glitch Overlay (appears randomly) */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 bg-cyan-500/20 mix-blend-overlay z-50"></div>
        </div>

        {/* Small Data Labels around card */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:block">
           <div className="rotate-90 text-[8px] text-cyan-500/30 font-mono tracking-[1em] whitespace-nowrap">
             MEMORIES_RECONSTRUCTION_IN_PROGRESS
           </div>
        </div>
      </div>

      {/* Background Floating Cubes/Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-sm animate-pulse"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 4}s`,
              opacity: Math.random() * 0.5,
              filter: 'blur(1px)'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
