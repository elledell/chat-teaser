import { useState, useEffect } from "react";

const PROFILES = [
  { id: 1, cc: "US", name: "Margaret W.", age: 58, country: "USA", img: "https://i.pravatar.cc/150?u=margaret" },
  { id: 2, cc: "GB", name: "Robert H.", age: 62, country: "UK", img: "https://i.pravatar.cc/150?u=robert" },
  { id: 3, cc: "DE", name: "Helga S.", age: 55, country: "Germany", img: "https://i.pravatar.cc/150?u=helga" },
  { id: 4, cc: "CA", name: "James M.", age: 64, country: "Canada", img: "https://i.pravatar.cc/150?u=james" },
  { id: 5, cc: "AU", name: "Karen P.", age: 51, country: "Australia", img: "https://i.pravatar.cc/150?u=karen" },
  { id: 6, cc: "SE", name: "Lars E.", age: 60, country: "Sweden", img: "https://i.pravatar.cc/150?u=lars" },
  { id: 7, cc: "NO", name: "Ingrid O.", age: 57, country: "Norway", img: "https://i.pravatar.cc/150?u=ingrid" },
  { id: 8, cc: "FR", name: "Pierre D.", age: 63, country: "France", img: "https://i.pravatar.cc/150?u=pierre" },
  { id: 9, cc: "IT", name: "Sofia R.", age: 54, country: "Italy", img: "https://i.pravatar.cc/150?u=sofia" },
  { id: 10, cc: "NL", name: "Anouk V.", age: 56, country: "Netherlands", img: "https://i.pravatar.cc/150?u=anouk" },
  { id: 11, cc: "US", name: "William T.", age: 67, country: "USA", img: "https://i.pravatar.cc/150?u=william" },
  { id: 12, cc: "GB", name: "Diane K.", age: 59, country: "UK", img: "https://i.pravatar.cc/150?u=diane" },
];

export default function LiveChatGrid() {
  const [typingIds, setTypingIds] = useState([]);
  const refLink = import.meta.env.VITE_REF_LINK || "#";

  // Randomly toggle the "typing..." status for 3-4 random profiles every 3.5 seconds
  useEffect(() => {
    const randomizeTyping = () => {
      const shuffled = [...PROFILES].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, Math.floor(Math.random() * 2) + 3).map(p => p.id);
      setTypingIds(selected);
    };
    
    randomizeTyping();
    const interval = setInterval(randomizeTyping, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12">
      {/* Section Header */}
      <div className="mb-6 flex flex-col gap-1">
        <h2 className="flex items-center gap-2 text-2xl font-extrabold text-slate-800">
          <svg className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Live Foreigners Online
        </h2>
        <p className="text-sm text-slate-500">Tap any profile to start a paid chat now.</p>
      </div>

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROFILES.map((profile) => {
          const isTyping = typingIds.includes(profile.id);

          return (
            <div key={profile.id} className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
              
              {/* Avatar with online indicator */}
              <div className="relative shrink-0">
                <img src={profile.img} alt={profile.name} className="h-14 w-14 rounded-full object-cover shadow-xs" />
                <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
              </div>

              {/* Profile Details */}
              <div className="flex flex-col flex-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[11px] font-extrabold text-slate-500">{profile.cc}</span>
                  <span className="text-sm font-bold text-slate-800">{profile.name}</span>
                  <span className="text-xs text-slate-400">· {profile.age}</span>
                </div>
                
                <div className="mt-0.5 flex items-center gap-1.5 text-[11px]">
                  <span className="text-slate-500">{profile.country}</span>
                  {isTyping ? (
                    <span className="font-bold animate-pulse" style={{ color: "var(--primary)" }}>
                      ••• typing...
                    </span>
                  ) : (
                    <span className="italic text-slate-500">Looking to talk 💬</span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="mt-2.5 flex items-center gap-2">
                  <a href={refLink} className="rounded-full px-4 py-1 text-[11px] font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "var(--primary)" }}>
                    Start
                  </a>
                  <a href={refLink} className="rounded-full border border-gray-200 bg-white px-4 py-1 text-[11px] font-bold text-slate-700 transition-colors hover:bg-gray-50">
                    Watch
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Link */}
      <div className="mt-8 text-center">
        <a href={refLink} className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: "var(--primary)" }}>
          👉 + 26 more active — <span className="underline underline-offset-4 decoration-dotted">join to chat</span>
        </a>
      </div>
    </section>
  );
}