import React from "react";

export default function Footer() {
  const siteName = import.meta.env.VITE_SITE_NAME || "DeniChat.Site";
  const refLink = import.meta.env.VITE_REF_LINK || "#";

  // Split name for the two-tone logo effect matching the Navbar
  const nameParts = siteName.split(".");
  const prefix = nameParts[0];
  const suffix = nameParts.length > 1 ? `.${nameParts[1]}` : "";

  return (
    <footer className="w-full bg-slate-900 px-4 py-12 text-slate-400 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Brand & About */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--primary)] text-white">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                {prefix}
                {suffix && <span style={{ color: "var(--accent)" }}>{suffix}</span>}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              {siteName} connects users across Africa with real opportunities to earn daily through chatting, surveys, hotel reviews, and networking.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:mx-auto">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={refLink} className="transition-colors hover:text-white">
                  Create Account
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="transition-colors hover:text-white">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-white">
                  FAQ & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Earnings Disclaimer */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
          <p className="mt-2 text-[10px] text-slate-600 sm:mt-0 max-w-sm text-center sm:text-right">
            Earnings depend on individual effort, time spent, and network activity. Withdrawals are processed instantly via integrated mobile money partners.
          </p>
        </div>
      </div>
    </footer>
  );
}