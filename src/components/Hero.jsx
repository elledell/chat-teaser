import { useState, useEffect } from "react";

// Dynamic content blocks for the entire Hero section
const ACTIVITIES = [
  {
    headline: "Chat with Foreigners",
    sectionTitle: "Chatting",
    description: "connecting you with genuine foreigners who want meaningful conversations.",
    checks: [
      "Chat at your own pace",
      "Get paid per message",
      "Withdraw instantly to M-Pesa, MoMo, PayPal or bank",
      "No experience needed — just be friendly and engaging"
    ]
  },
  {
    headline: "Review Hotels",
    sectionTitle: "Reviewing Hotels",
    description: "partnering you with top hospitality brands that pay for your honest feedback and ratings.",
    checks: [
      "Review at your own pace",
      "Get paid per completed rating",
      "Withdraw instantly to M-Pesa, MoMo, PayPal or bank",
      "No experience needed — just share your honest opinion"
    ]
  },
  {
    headline: "Complete Surveys",
    sectionTitle: "Taking Surveys",
    description: "matching you with global market research companies seeking your daily consumer opinions.",
    checks: [
      "Answer questions anytime",
      "Get paid per survey completion",
      "Withdraw instantly to M-Pesa, MoMo, PayPal or bank",
      "No experience needed — your opinion is what matters"
    ]
  },
  {
    headline: "Invite Friends",
    sectionTitle: "Building a Network",
    description: "rewarding you for sharing the platform with friends and building an active earning community.",
    checks: [
      "Share your unique link",
      "Earn bonuses per active invite",
      "Withdraw instantly to M-Pesa, MoMo, PayPal or bank",
      "No experience needed — just share on social media"
    ]
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  
  const siteName = import.meta.env.VITE_SITE_NAME || "DeniChat.Site";
  const refLink = import.meta.env.VITE_REF_LINK || "#";
  const whatsappLink = import.meta.env.VITE_WHATSAPP_LINK || "#";

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ACTIVITIES.length);
        setFade(true); 
      }, 300); 
    }, 4500); // Slowed down slightly so users can read the dynamic paragraphs

    return () => clearInterval(interval);
  }, []);

  const currentActivity = ACTIVITIES[currentIndex];

  return (
    <section className="flex flex-col items-center px-4 pt-10 pb-12 text-center sm:pt-14">
      {/* Top Trust Pill */}
      <div className="mb-5 flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-1 shadow-sm">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: "var(--accent)" }}
        />
        <span className="text-[11px] font-semibold text-slate-600">
          Trusted by 80,000+ Africans
        </span>
      </div>

      {/* Main Dynamic Headline */}
      <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl md:text-5xl">
        Get Paid To{" "}
        <span
          className={`inline-block transition-opacity duration-300 bg-gradient-to-r bg-clip-text text-transparent ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: "linear-gradient(to right, var(--primary), var(--accent))",
          }}
        >
          {currentActivity.headline}
        </span>
      </h1>

      {/* Subheadline */}
      <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
        Join 80,000+ Africans earning daily. Withdraw to M-Pesa, MoMo, bank, or
        crypto.
      </p>

      {/* Glowing CTA Button */}
      <a
        href={refLink}
        className="mt-6 rounded-full px-7 py-3 text-sm font-extrabold text-white transition-transform hover:scale-105"
        style={{
          backgroundColor: "var(--accent)",
          boxShadow: "0 8px 20px -6px var(--accent)",
        }}
      >
        START EARNING NOW →
      </a>

      {/* Trust Checkmarks */}
      <div className="mt-5 flex flex-wrap justify-center gap-3 sm:gap-5 text-[11px] font-medium text-slate-500">
        {["Instant withdrawals", "24/7 support", "No experience needed"].map(
          (item) => (
            <div key={item} className="flex items-center gap-1.5">
              <div className="flex h-3.5 w-3.5 items-center justify-center rounded-sm bg-green-500 text-white">
                <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {item}
            </div>
          )
        )}
      </div>

      {/* Dynamic Training Channel Banner */}
      <div className="mx-auto mt-10 w-full max-w-4xl px-2 sm:px-0">
        <div
          className="flex flex-col items-center justify-between gap-4 rounded-3xl px-6 py-3.5 sm:flex-row sm:rounded-full"
          style={{ backgroundColor: "var(--primary)" }}
        >
          <div className="flex items-center gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-green-500 shadow-sm">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.124.551 4.192 1.597 6.015L.152 24l6.113-1.603a11.96 11.96 0 005.766 1.48h.005c6.646 0 12.028-5.384 12.028-12.031S18.678 0 12.031 0zm0 21.848c-1.797 0-3.559-.484-5.105-1.401l-.367-.217-3.794.996 1.016-3.7-.238-.379A9.975 9.975 0 012.028 12.03c0-5.513 4.487-10 10.003-10s10 4.487 10 10-4.487 10-10.003 10zm5.495-7.511c-.301-.151-1.785-.883-2.062-.984-.277-.101-.479-.151-.68.151-.202.302-.78 1.004-.956 1.205-.176.202-.353.227-.654.076-1.353-.68-2.42-1.282-3.414-2.736-.257-.378.256-.353.852-1.543.076-.151.038-.277-.038-.428-.076-.151-.68-1.638-.93-2.242-.244-.588-.492-.508-.68-.517-.176-.008-.378-.008-.58-.008s-.529.076-.806.378c-.277.302-1.057 1.033-1.057 2.519s1.082 2.923 1.233 3.124c.151.202 2.13 3.25 5.158 4.557 2.051.884 2.87.755 3.951.629 1.134-.131 3.528-1.442 4.025-2.836.497-1.394.497-2.589.346-2.841-.151-.252-.553-.403-.854-.554z" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="text-sm font-bold text-white">
                Join Training Channel 📱
              </h3>
              <p className="text-[11px] text-white/90">
                Get training updates & connect with other earners
              </p>
            </div>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-white px-5 py-2 text-xs font-bold text-slate-800 transition-colors hover:bg-gray-100"
          >
            Join Now
          </a>
        </div>
      </div>

      {/* Dynamic Content Section added below the banner */}
      <div className="mx-auto mt-12 w-full max-w-4xl text-left px-4 sm:px-8">
        <h2 className={`text-2xl sm:text-3xl font-bold text-slate-800 transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
          Discover Real Opportunities to Earn by {currentActivity.sectionTitle}
        </h2>
        
        <p className={`mt-4 text-[15px] leading-relaxed text-slate-600 transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
          {siteName} is Kenya's and Africa's leading platform {currentActivity.description} Whether you're in Nairobi, Accra, Lagos or Kampala, you can start earning real money from the comfort of your phone.
        </p>

        <ul className={`mt-6 space-y-2.5 transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
          {currentActivity.checks.map((checkText, i) => (
            <li key={i} className="flex items-center gap-2.5 text-[14.5px] text-slate-700">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-green-500 text-white">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {checkText}
            </li>
          ))}
        </ul>

        <p className={`mt-6 text-[14.5px] text-slate-600 transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
          Thousands of Africans are already earning extra income every week on {siteName}.
        </p>
      </div>
    </section>
  );
}