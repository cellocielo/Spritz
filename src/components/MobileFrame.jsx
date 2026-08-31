import React from 'react';

export default function MobileFrame({ isMobileFrame, children }) {
  if (!isMobileFrame) {
    return (
      <div className="min-h-screen bg-[#faf9f6] text-stone-900 flex flex-col justify-between">
        <div className="w-full max-w-xl mx-auto min-h-screen flex flex-col bg-[#faf9f6]">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-900 py-6 px-2 flex items-center justify-center">
      {/* Smartphone Mockup Container */}
      <div className="w-full max-w-[430px] h-[912px] bg-[#faf9f6] rounded-[50px] border-[10px] border-stone-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col relative text-stone-900">
        
        {/* iOS Dynamic Island / Notch */}
        <div className="w-full bg-stone-900 pt-3 pb-1 px-7 flex items-center justify-between shrink-0 z-50 border-b border-stone-800">
          <span className="text-[11px] font-semibold text-stone-200 font-mono tracking-tight">9:41</span>
          <div className="w-24 h-4 bg-black rounded-full border border-stone-800 flex items-center justify-end px-2 gap-1.5 shadow-inner">
            <div className="w-2.5 h-2.5 rounded-full bg-stone-800" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          </div>
          <div className="flex items-center gap-1 text-[10px] text-stone-300 font-mono">
            <span>5G</span>
            <div className="w-4 h-2 border border-stone-300 rounded-sm p-[1px] flex items-center">
              <div className="h-full w-full bg-stone-200 rounded-px" />
            </div>
          </div>
        </div>

        {/* Scrollable App Viewport */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col relative scroll-smooth bg-[#faf9f6]">
          {children}
        </div>

        {/* iOS Home Indicator Bar */}
        <div className="w-full bg-[#faf9f6] py-2 flex justify-center shrink-0 border-t border-stone-200">
          <div className="w-32 h-1 bg-stone-400 rounded-full" />
        </div>

      </div>
    </div>
  );
}
