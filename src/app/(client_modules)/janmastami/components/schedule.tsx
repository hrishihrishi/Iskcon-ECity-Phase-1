import React from 'react';

// --- Types & Sample Data ---

type EventBlock = {
  time: string;
  title: string;
  subtitle?: string;
};

type ScheduleCardData = {
  id: string;
  icon: string; // Replace with actual SVGs or Image components in production
  events: EventBlock[];
  isHighlighted?: boolean;
};

export const sampleScheduleData: ScheduleCardData[] = [
  {
    id: '1',
    icon: '📿',
    events: [{ time: '5:00 AM - 7:00 AM', title: 'Mantra Meditation' }]
  },
  {
    id: '2',
    icon: '🪔',
    events: [{ time: '7:00 AM - 7:40 AM', title: 'Mangal Aarti' }]
  },
  {
    id: '3',
    icon: '🏆',
    events: [
      { time: '4:00 PM - 4:30 PM', title: 'Fancy Dress Competition', subtitle: 'Prize Distribution' }
    ]
  },
  {
    id: '4',
    icon: '✨',
    events: [{ time: '12:00 MIDNIGHT', title: 'Maha Aarti' }],
  }
];

// --- Component ---

export function ScheduleGrid({ schedule = sampleScheduleData }: { schedule?: ScheduleCardData[] }) {
  return (
    <div className="bg-[#fdfaf1] py-16 px-8 font-serif">
      <div className="text-center mb-12">
        <p className="text-[#1c4d43] tracking-[0.2em] text-sm mb-3">PROGRAMME</p>
        <h2 className="text-[#5c2a41] text-4xl font-bold">The Day at a Glance</h2>
        <div className="text-[#d0a34b] text-2xl mt-2">★</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {schedule.map((card) => (
          <div 
            key={card.id} 
            className={`rounded-2xl p-6 shadow-sm border ${
              card.isHighlighted 
                ? 'bg-[#3b1126] border-[#3b1126] text-[#ebd197]' 
                : 'bg-[#fffdf8] border-[#f0e4c8] text-[#5c2a41]'
            }`}
          >
            {/* Icon Block */}
            <div className="bg-gradient-to-br from-[#f4d485] to-[#d0a34b] w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm">
              {card.icon}
            </div>

            {/* Events Mapping */}
            <div className="space-y-6">
              {card.events.map((evt, idx) => (
                <div key={idx}>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-sans mb-2 border ${
                    card.isHighlighted 
                      ? 'border-[#ebd197] text-[#ebd197]' 
                      : 'bg-[#eef3f0] text-[#1c4d43] border-transparent'
                  }`}>
                    {evt.time}
                  </div>
                  <h4 className="text-xl font-semibold mb-1">{evt.title}</h4>
                  {evt.subtitle && <p className="text-sm opacity-80 mt-2">{evt.subtitle}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}