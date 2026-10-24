import { useState, useEffect } from "react";

const WITHDRAWALS = [
  { cc: "NG", name: "Amaka", country: "Nigeria", amount: "₦54,000", method: "Opay", time: "23 sec ago" },
  { cc: "RW", name: "Eric", country: "Rwanda", amount: "RWF 155,000", method: "MTN Mobile Money", time: "just now" },
  { cc: "UG", name: "Joseph", country: "Uganda", amount: "UGX 420,000", method: "Airtel Money", time: "8 sec ago" },
  { cc: "KE", name: "Faith", country: "Kenya", amount: "KSh 8,500", method: "M-Pesa", time: "12 sec ago" },
  { cc: "ZA", name: "Sipho", country: "South Africa", amount: "R 1,200", method: "Capitec Bank", time: "34 sec ago" },
  { cc: "GH", name: "Kwame", country: "Ghana", amount: "GH₵ 950", method: "MTN MoMo", time: "1 min ago" },
  { cc: "TZ", name: "Aisha", country: "Tanzania", amount: "TSh 115,000", method: "Tigo Pesa", time: "just now" },
  { cc: "KE", name: "Brian", country: "Kenya", amount: "KSh 12,400", method: "M-Pesa", time: "45 sec ago" },
  { cc: "NG", name: "Blessing", country: "Nigeria", amount: "₦85,000", method: "Palmpay", time: "2 min ago" },
  { cc: "UG", name: "Sarah", country: "Uganda", amount: "UGX 210,000", method: "MTN Mobile Money", time: "5 sec ago" },
];

export default function FloatingWithdrawals() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay before the first pop-up appears
    const startDelay = setTimeout(() => setIsVisible(true), 2500);

    const interval = setInterval(() => {
      // Fade out current message
      setIsVisible(false);

      // Wait 1.5 seconds while hidden, then change data and fade back in
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % WITHDRAWALS.length);
        setIsVisible(true);
      }, 1500);
      
    }, 6500); // 5 seconds visible + 1.5 seconds hidden

    return () => {
      clearTimeout(startDelay);
      clearInterval(interval);
    };
  }, []);

  const current = WITHDRAWALS[currentIndex];

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 ease-in-out sm:bottom-6 sm:left-6 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex max-w-[90vw] items-center gap-3 rounded-full border border-gray-100 bg-white py-2 pl-2 pr-4 shadow-xl sm:pr-5">
        {/* Light Green Checkmark Circle */}
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        {/* Text Details */}
        <div className="truncate text-[12px] sm:text-[13px] text-slate-500">
          <span className="mr-1 text-[10px] font-extrabold uppercase text-slate-800">{current.cc}</span>
          <span className="font-bold text-slate-800">{current.name}</span>{" "}
          <span>from {current.country} withdrew</span>{" "}
          <span className="font-bold text-green-600">{current.amount}</span>{" "}
          <span>via {current.method}</span>
          <span className="ml-2 sm:ml-3 text-[10px] sm:text-[11px] text-slate-400">{current.time}</span>
        </div>
      </div>
    </div>
  );
}