import React from "react";

const HOTELS = [
  {
    id: 1,
    name: "The Maasai Mara Lodge",
    location: "Narok, Kenya",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    reviews: 342,
    step: "1/2",
  },
  {
    id: 2,
    name: "Diani Beach Resort",
    location: "Mombasa, Kenya",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=600&q=80",
    rating: 4.5,
    reviews: 890,
    step: "1/2",
  },
  {
    id: 3,
    name: "Serengeti Oasis",
    location: "Serengeti, Tanzania",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    reviews: 512,
    step: "1/2",
  },
  {
    id: 4,
    name: "Zanzibar Retreat Spa",
    location: "Zanzibar, Tanzania",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    reviews: 624,
    step: "1/2",
  },
  {
    id: 5,
    name: "Cape Town Boutique",
    location: "Cape Town, SA",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    reviews: 418,
    step: "1/2",
  },
  {
    id: 6,
    name: "Accra Luxury Suites",
    location: "Accra, Ghana",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=600&q=80",
    rating: 4.4,
    reviews: 275,
    step: "1/2",
  },
];

export default function HotelReviewsGrid() {
  const refLink = import.meta.env.VITE_REF_LINK || "#";

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12">
      {/* Section Header */}
      <div className="mb-6 flex flex-col gap-1">
        <h2 className="flex items-center gap-2 text-2xl font-extrabold text-slate-800">
          <svg className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          Available Hotel Reviews
        </h2>
        <p className="text-sm text-slate-500">
          Select a hotel below, leave your honest rating, and get paid instantly.
        </p>
      </div>

      {/* Hotel Cards Grid: 2 columns on mobile, 3 columns on laptop */}
      <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
        {HOTELS.map((hotel) => (
          <div key={hotel.id} className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
            
            {/* Hotel Image */}
            <div className="relative h-32 w-full sm:h-48">
              <img src={hotel.image} alt={hotel.name} className="h-full w-full object-cover" />
            </div>

            {/* Card Content */}
            <div className="flex flex-1 flex-col p-3 sm:p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm sm:text-lg font-bold text-slate-800 leading-tight line-clamp-1">
                  {hotel.name}
                </h3>
                <span className="hidden sm:block shrink-0 rounded-md bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-500">
                  {hotel.step}
                </span>
              </div>

              {/* Location */}
              <div className="mt-1 sm:mt-2 flex items-center gap-1 text-[11px] sm:text-sm text-slate-500 line-clamp-1">
                <svg className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="truncate">{hotel.location}</span>
              </div>

              {/* Star Rating Section */}
              <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-1 sm:gap-1.5">
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-700">{hotel.rating}</span>
                  <span className="text-[9px] sm:text-xs text-slate-400">({hotel.reviews})</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={refLink}
                className="mt-4 sm:mt-6 flex w-full items-center justify-center rounded-lg sm:rounded-xl py-2 sm:py-3 text-xs sm:text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--primary)" }}
              >
                Write Review
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}