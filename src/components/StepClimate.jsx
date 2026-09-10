import React from 'react';
import { Sun, Snowflake, ThermometerSun } from 'lucide-react';

export default function StepClimate({ climate, setClimate, onNext, onPrev }) {
  const climateOptions = [
    {
      id: 'summer',
      title: 'Warm & Humid',
      subtitle: 'Citrus, aquatic, and fresh greens that thrive in heat',
      icon: Sun,
      badge: 'Summer / Heat'
    },
    {
      id: 'all-year',
      title: 'Temperate / Moderate',
      subtitle: 'Versatile woods, clean musks, and balanced aromatic notes',
      icon: ThermometerSun,
      badge: 'All-Year'
    },
    {
      id: 'winter',
      title: 'Crisp & Cold',
      subtitle: 'Warm vanilla, rich tobacco, amber, and deep woods',
      icon: Snowflake,
      badge: 'Fall / Winter'
    }
  ];

  return (
    <div className="space-y-6 text-[#1c1917]">
      
      <div className="text-center space-y-1">
        <h2 className="text-2xl sm:text-3xl font-serif text-[#1c1917] font-bold tracking-wide">
          Climate & Location
        </h2>
        <p className="text-xs text-stone-600 max-w-sm mx-auto font-medium">
          Choose the primary weather condition where you'll wear this scent.
        </p>
      </div>

      <div className="space-y-3">
        {climateOptions.map((opt) => {
          const Icon = opt.icon;
          const isSelected = climate === opt.id;

          return (
            <div
              key={opt.id}
              onClick={() => setClimate(opt.id)}
              className={`p-4 rounded-3xl cursor-pointer transition-all border ${
                isSelected 
                  ? 'bg-[#1c1917] text-white border-[#1c1917] shadow-md' 
                  : 'bg-[#f4f0ea] text-[#1c1917] border-stone-200 hover:border-stone-400 hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`p-3 rounded-2xl border shrink-0 ${isSelected ? 'bg-stone-800 border-stone-700 text-white' : 'bg-white border-stone-300 text-[#1c1917]'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-0.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-base font-bold">
                      {opt.title}
                    </h3>
                    <span className={`text-[10px] uppercase font-sans tracking-wider px-2 py-0.5 rounded-full border font-bold ${isSelected ? 'bg-stone-800 text-stone-200 border-stone-700' : 'bg-white text-stone-700 border-stone-300'}`}>
                      {opt.badge}
                    </span>
                  </div>
                  <p className={`text-xs font-medium ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                    {opt.subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-4 flex items-center gap-3">
        <button
          onClick={onPrev}
          className="w-1/3 py-3.5 rounded-2xl bg-[#f4f0ea] border border-stone-300 text-[#1c1917] font-semibold text-xs hover:bg-stone-200 transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          className="w-2/3 py-3.5 rounded-2xl bg-[#1c1917] text-white font-bold text-sm shadow-md hover:bg-stone-800 transition-all"
        >
          Next: Purpose & Occasion →
        </button>
      </div>

    </div>
  );
}
