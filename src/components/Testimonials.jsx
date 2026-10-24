import React from "react";

export default function Testimonials() {
  const siteName = import.meta.env.VITE_SITE_NAME || "DeniChat.Site";
  const refLink = import.meta.env.VITE_REF_LINK || "#";

  const REVIEWS = [
    {
      initials: "KO",
      bg: "bg-teal-700",
      cc: "KE",
      name: "Kelvin O.",
      earnings: "$1,240 last week",
      quote: "I cleared my rent in 9 days. M-Pesa hits in seconds.",
    },
    {
      initials: "AN",
      bg: "bg-orange-500",
      cc: "NG",
      name: "Amaka N.",
      earnings: "$860 this month",
      quote: "Best side hustle I've ever had. Foreigners are kind.",
    },
    {
      initials: "KB",
      bg: "bg-green-600",
      cc: "GH",
      name: "Kwame B.",
      earnings: "$420 this week",
      quote: "MoMo withdrawal came through in 14 seconds. Wild.",
    },
    {
      initials: "SD",
      bg: "bg-purple-500",
      cc: "ZA",
      name: "Sipho D.",
      earnings: "$1,510 this month",
      quote: `I quit my night job. ${siteName} pays better.`,
    },
  ];

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-16">
      {/* Testimonials Header */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-extrabold text-slate-800 sm:text-3xl">
          Real members. Real money.
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          A few of our top earners this month.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {REVIEWS.map((review, index) => (
          <div
            key={index}
            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              {/* Initials Circle */}
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${review.bg}`}
              >
                {review.initials}
              </div>

              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[11px] font-extrabold text-slate-800">
                    {review.cc}
                  </span>
                  <span className="text-sm font-bold text-slate-800">
                    {review.name}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[13px] font-bold text-green-600">
                  <span>💰</span> {review.earnings}
                </div>
              </div>
            </div>
            
            <p className="mt-4 text-[14px] text-slate-600">
              "{review.quote}"
            </p>
          </div>
        ))}
      </div>

      {/* Large Bottom CTA Banner */}
      <div
        className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-[2rem] px-6 py-12 text-center shadow-lg sm:px-12 sm:py-16"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Ready to start earning?
        </h2>
        <p className="mt-3 text-sm text-white/90 sm:text-base">
          Create your account in 30 seconds and get matched with chatters waiting now.
        </p>

        <a
          href={refLink}
          className="mt-8 inline-block rounded-full px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition-transform hover:scale-105"
          style={{
            backgroundColor: "var(--accent)",
            boxShadow: "0 8px 25px -5px var(--accent)",
          }}
        >
          CREATE YOUR CHATTING ACCOUNT →
        </a>

        {/* Security & Trust Subtext */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] text-white/80 sm:text-xs">
          <span className="flex items-center gap-1">
            <span>🔒</span> Free signup
          </span>
          <span>·</span>
          <span>Instant payouts</span>
          <span>·</span>
          <span>4.9★ trust score</span>
        </div>
      </div>
    </section>
  );
}