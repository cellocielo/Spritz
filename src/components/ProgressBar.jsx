import React from 'react';

export default function ProgressBar({ currentStep, totalSteps, stepTitles }) {
  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="w-full max-w-xl mx-auto px-4 pt-4 pb-2 text-[#1c1917]">
      <div className="flex items-center justify-between text-xs mb-2">
        <span className="text-[#1c1917] font-bold tracking-wide uppercase text-[11px] flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse inline-block" />
          Step {currentStep} of {totalSteps}: {stepTitles[currentStep - 1]}
        </span>
      </div>
      
      {/* Progress Track */}
      <div className="h-2 w-full bg-[#f4f0ea] rounded-full overflow-hidden border border-stone-300 p-[1px]">
        <div 
          className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-[#ff5500] rounded-full transition-all duration-500 ease-out shadow-xs"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
