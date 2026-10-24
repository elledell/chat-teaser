import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LiveChatGrid from "./components/LiveChatGrid";
import EarningsTicker from "./components/EarningsTicker";
import HotelReviewsGrid from "./components/HotelReviewsGrid";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import FloatingWithdrawals from "./components/FloatingWithdrawals";
import Footer from "./components/Footer";

export default function App() {
  const primaryColor = import.meta.env.VITE_PRIMARY_COLOR || "#069367";
  const accentColor = import.meta.env.VITE_ACCENT_COLOR || "#ff6b5b";

  return (
    <div
      className="min-h-screen bg-[#f8fafc] font-sans text-slate-800"
      style={{
        "--primary": primaryColor,
        "--accent": accentColor,
      }}
    >
      <Navbar />
     
      <Hero />
      <LiveChatGrid />
       <EarningsTicker /> 
       <HotelReviewsGrid />
       <HowItWorks />
       <Testimonials />
       <Faq />
       <Footer />
       {/* Floating UI Elements */}
      <FloatingWithdrawals />
    </div>
  );
}