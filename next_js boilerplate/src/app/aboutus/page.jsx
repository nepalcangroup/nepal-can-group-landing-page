"use client";
import React, { Suspense } from "react";
import { Layout } from "@/components/Layout";
import { Box, Skeleton } from "@mui/material";
import AboutUsSlider from "@/components/AboutUs/AboutUsSlider";
import NepalCanSection from "@/components/AboutUs/NepalCanSection";
import CoreValuesSection from "@/components/AboutUs/CoreValuesSection";
import LeadershipSection from "@/components/AboutUs/LeadershipSection";
import MilestonesSection from "@/components/AboutUs/MilestonesSection";
import ServiceHighlightSection from "@/components/ServiceSection/ServiceHighlightSection";

export default function Page() {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            animation="wave"
          />
        </Box>
      }
    >
      <Layout>
        <AboutUsSlider />
        <NepalCanSection/>
        <CoreValuesSection/>
        <LeadershipSection/>
        <MilestonesSection/>
        <ServiceHighlightSection
        title="Experience Service Like Never Before"
        subtitle="Join thousands of businesses that trust Nepal Can Group for logistics, technology, and workforce solutions."
        buttonText="Partner With Us"
        buttonLink="/contact"
      />
      </Layout>
    </Suspense>
  );
}
