"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { Search, Menu, User, Globe2 } from "lucide-react";

export default function Header() {
  const [message, setMessage] = useState("");
  const announce = (text: string) => {
    setMessage(text);
    window.setTimeout(() => setMessage(""), 2200);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-airbnb-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[74px] max-w-[1180px] items-center justify-between px-5 sm:px-8">
        
        {/* Logo */}
        <button className="brand-button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Return to top">
          <img src="/images/listing/Airbnb_Logo.webp" alt="airbnb" />
        </button>

        {/* Search Bar */}
        <button className="header-search" onClick={() => announce("Search is ready for this stay")} aria-label="Search stays">
          <img className="search-house" src="/images/listing/searchbar-house.png" alt="" />
          <div className="search-segment font-semibold">Anywhere</div>
          <div className="search-segment font-semibold">Anytime</div>
          <div className="search-segment text-airbnb-secondary">Add guests</div>
            <span className="search-submit">
            <Search size={16} />
            </span>
          </button>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          <button className="header-host" onClick={() => announce("Hosting tools are coming soon")}>
            Airbnb your home
          </button>
          <button className="header-globe" onClick={() => announce("Language and currency settings")} aria-label="Language and currency">
            <Globe2 size={18} />
          </button>
          <button className="account-button" onClick={() => announce("Account menu")} aria-label="Open account menu">
            <Menu size={18} className="ml-1" />
            <div className="rounded-full bg-airbnb-primary p-1 text-white">
              <User size={17} />
            </div>
          </button>
        </div>

      </div>
      {message && <div className="header-toast" role="status">{message}</div>}
    </header>
  );
}
