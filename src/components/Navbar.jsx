import { useState, useEffect } from "react";

export default function Navbar() {
  const siteName = import.meta.env.VITE_SITE_NAME || "DeniChat.Site";
  const tagline = import.meta.env.VITE_TAGLINE || "Get paid to chat";
  const refLink = import.meta.env.VITE_REF_LINK || "#";

  // Split name at the dot (e.g., "DeniChat" and "Site") to color them differently
  const nameParts = siteName.split(".");
  const prefix = nameParts[0];
  const suffix = nameParts.length > 1 ? `.${nameParts[1]}` : "";

  // Dynamic counter state
  const [onlineCount, setOnlineCount] = useState(1634);
  const [recentAdded, setRecentAdded] = useState(1);

  useEffect(() => {
    let timeoutId;
    
    const simulateLogins = () => {
      // Generate a random number of new users joining (between 1 and 4)
      const newUsers = Math.floor(Math.random() * 4) + 1;
      
      setRecentAdded(newUsers);
      setOnlineCount((prevCount) => prevCount + newUsers);

      // Randomize the wait time for the next batch (between 3 to 7 seconds)
      const nextWaitTime = Math.floor(Math.random() * 4000) + 3000;
      timeoutId = setTimeout(simulateLogins, nextWaitTime);
    };

    // Start the simulation after the first 3 seconds
    timeoutId = setTimeout(simulateLogins, 3000);

    // Cleanup function to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-xs">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-2.5">
          {/* Placeholder for the app icon logo */}
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--primary)] text-white shadow-sm">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          
          <div className="flex flex-col leading-none">
            <div className="text-[17px] font-extrabold tracking-tight text-slate-800">
              {prefix}
              {suffix && <span className="text-[var(--accent)]">{suffix}</span>}
            </div>
            <span className="mt-0.5 text-[10px] text-slate-500">
              {tagline}
            </span>
          </div>
        </div>

        {/* Right: Status & CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1 text-[11px] font-semibold text-slate-600">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            {onlineCount.toLocaleString()} online
            {recentAdded > 0 && (
              <span className="ml-1 text-[9px] font-bold text-green-500 transition-all duration-300">
                ▲{recentAdded}
              </span>
            )}
          </div>
          
          <a
            href={refLink}
            className="rounded-full bg-[var(--accent)] px-4 py-1.5 text-xs font-bold text-white shadow-md transition-opacity hover:opacity-90"
          >
            Start Earning
          </a>
        </div>
        
      </div>
    </header>
  );
}