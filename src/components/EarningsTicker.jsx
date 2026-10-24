const EARNINGS_DATA = [
  "Akosua just earned $1.92",
  "Faith just earned $10.06",
  "Amaka just earned $6.05",
  "Blessing just earned $3.25",
  "Blessing just earned $9.38",
  "Mercy just earned $2.98",
  "Dennis just earned $9.06",
  "Amaka just earned $6.58",
  "Brian just earned $12.40",
  "Kofi just earned $4.15",
  "Joy just earned $7.80",
];

export default function EarningsTicker() {
  // Duplicate the array so the infinite CSS scroll loops seamlessly without snapping back
  const tickerItems = [...EARNINGS_DATA, ...EARNINGS_DATA];

  return (
    <div className="w-full overflow-hidden border-y border-gray-200 bg-white py-2.5">
      <div className="animate-ticker">
        {tickerItems.map((text, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className="text-[13px] font-bold" style={{ color: "var(--primary)" }}>
              {index === 2 && "💸 "} {/* Optional icon injection based on reference */}
              {text}
            </span>
            <span className="mx-3 text-lg font-bold text-gray-400">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}