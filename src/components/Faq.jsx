import { useState } from "react";

export default function Faq() {
  const siteName = import.meta.env.VITE_SITE_NAME || "DeniChat.Site";

  // Default to the first question being open (index 0)
  const [openIndex, setOpenIndex] = useState(0);

  const FAQS = [
    {
      question: `How much can I earn on ${siteName}?`,
      answer:
        "Most active chatters in Kenya earn between KSh 5,000 – KSh 20,000 per month. Top performers earn more.",
    },
    {
      question: `Is ${siteName} legitimate?`,
      answer:
        "Yes. We have paid out millions of dollars to users across Africa with instant withdrawals to M-Pesa and other methods.",
    },
    {
      question: "Do I need experience?",
      answer:
        "No prior experience is required. Just be friendly, responsive, and ready to engage in meaningful conversations.",
    },
    {
      question: "How do withdrawals work?",
      answer:
        "You can withdraw your earnings instantly to your local mobile money (like M-Pesa or MoMo), PayPal, or directly to your bank account once you reach the minimum threshold.",
    },
    {
      question: "Is my data safe?",
      answer:
        "Absolutely. Your privacy and security are our top priorities. Your personal information is encrypted and never shared with third parties.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-16">
      {/* Section Header */}
      <div className="mb-10 text-left sm:text-center">
        <h2 className="text-2xl font-extrabold text-slate-800 sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Everything you need to know before you start chatting and earning on {siteName}.
        </p>
      </div>

      {/* FAQ Accordion List */}
      <div className="mx-auto max-w-3xl flex flex-col">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="flex flex-col">
              {/* Question Button */}
              <button
                onClick={() => toggleFaq(index)}
                className={`flex w-full items-center justify-between py-4 text-left transition-all duration-200 ${
                  isOpen
                    ? "rounded-lg border-2 border-slate-900 px-4 mt-2" // The black outlined box when active
                    : "border-b border-gray-200 px-2 hover:text-[var(--primary)]" // Standard bottom border when inactive
                }`}
              >
                <span
                  className={`text-[15px] sm:text-base font-bold ${
                    isOpen ? "text-slate-900 underline underline-offset-4" : "text-slate-800"
                  }`}
                >
                  {faq.question}
                </span>
                
                {/* Chevron Icon */}
                <svg
                  className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer Content */}
              {isOpen && (
                <div className="px-2 pt-3 pb-6 text-sm text-slate-500 leading-relaxed sm:text-[15px]">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}