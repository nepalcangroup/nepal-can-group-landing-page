"use client";

import React from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

export const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="w-full sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="flex-1 w-full">{children}</div>

      <Footer />
    </div>
  );
};
