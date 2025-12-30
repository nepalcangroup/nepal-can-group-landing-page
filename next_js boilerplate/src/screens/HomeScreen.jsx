"use client";

import React from "react";
import HeroSection from "@/components/HomeScreen/HeroSection";
import StatCounter from "@/components/HomeScreen/StatCounter";
import LegacySection from "@/components/HomeScreen/LegacySection";
import ServicesPreview from "@/components/HomeScreen/ServicesPreview";
import CTASection from "@/components/HomeScreen/CTASection";

export const HomeScreen = () => {
  return (
    <main>
      <HeroSection/>
      <StatCounter/>
      <ServicesPreview/>
      <LegacySection/>
      <CTASection/>
    </main>
  )
};
