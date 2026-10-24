import { useState, useEffect } from "react";

export default function HowItWorks() {
  const siteName = import.meta.env.VITE_SITE_NAME || "DeniChat.Site";

  // Dynamic stat counters[cite: 34, 35]
  const [stats, setStats] = useState({
    users: 81753,
    paidOut: 1311882,
    online: 1523,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        users: prev.users + Math.floor(Math.random() * 3),
        paidOut: prev.paidOut + Math.floor(Math.random() * 15),
        online: prev.online + Math.floor(Math.random() * 5) - 2, // Fluctuates up and down slightly
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16">
      {/* Header[cite: 34] */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-slate-800">How it works</h2>
        <p className="mt-2 text-sm text-slate-500">
          Three simple steps to start earning today.
        </p>
      </div>

      {/* 3 Steps Grid[cite: 34] */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Step 1 */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 border border-gray-100 text-xl">
            📝
          </div>
          <h3 className="text-lg font-bold text-slate-800">
            <span style={{ color: "var(--primary)" }}>1.</span> Sign up
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Create your free chatting account in 30 seconds.
          </p>
        </div>

        {/* Step 2 */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 border border-gray-100 text-xl">
            💬
          </div>
          <h3 className="text-lg font-bold text-slate-800">
            <span style={{ color: "var(--primary)" }}>2.</span> Chat
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Get matched with lonely foreigners and earn per message.
          </p>
        </div>

        {/* Step 3 */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 border border-gray-100 text-xl">
            💸
          </div>
          <h3 className="text-lg font-bold text-slate-800">
            <span style={{ color: "var(--primary)" }}>3.</span> Withdraw
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Cash out instantly to M-Pesa, MoMo, bank, or PayPal.
          </p>
        </div>
      </div>

      {/* Stats Banner[cite: 34, 35] */}
      <div 
        className="mt-12 overflow-hidden rounded-3xl p-2 sm:p-3"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          <div className="flex flex-col items-center justify-center rounded-2xl bg-black/15 py-4 text-white">
            <div className="flex items-center gap-1 text-2xl font-extrabold sm:text-3xl">
              {stats.users.toLocaleString()}
              <span className="text-[10px] text-green-400">▲3</span>
            </div>
            <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/80">
              Users
            </span>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl bg-black/15 py-4 text-white">
            <div className="flex items-center gap-1 text-2xl font-extrabold sm:text-3xl">
              ${stats.paidOut.toLocaleString()}
              <span className="text-[10px] text-green-400">▲58</span>
            </div>
            <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/80">
              Paid Out
            </span>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl bg-black/15 py-4 text-white">
            <div className="flex items-center gap-1.5 text-2xl font-extrabold sm:text-3xl">
              {stats.online.toLocaleString()}
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            </div>
            <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/80">
              Online Now
            </span>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl bg-black/15 py-4 text-white">
            <div className="text-2xl font-extrabold sm:text-3xl">
              4.9<span className="text-xl">★</span>
            </div>
            <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/80">
              Rating
            </span>
          </div>
        </div>
      </div>

      {/* Community / Why Members Love Box[cite: 34, 35] */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-extrabold text-slate-800 sm:text-3xl">
          Real Earnings from Real Kenyan & African Users
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500 sm:text-base">
          {siteName} has already paid out over $1.2 Million to chatters across Africa. Here's what our community is saying:
        </p>

        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-gray-100 bg-slate-50 p-6 text-left shadow-sm">
          <h3 className="font-bold text-slate-800">
            Why members love {siteName}:
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex items-center gap-2.5">
              <span className="text-lg">⚡</span> Fast and reliable withdrawals to M-Pesa
            </li>
            <li className="flex items-center gap-2.5">
              <span className="text-lg">💬</span> Genuine conversations with respectful foreigners
            </li>
            <li className="flex items-center gap-2.5">
              <span className="text-lg">🎧</span> 24/7 support when you need help
            </li>
            <li className="flex items-center gap-2.5">
              <span className="text-lg">🕒</span> Flexible hours — chat whenever you're free
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}