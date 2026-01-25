"use client";
import React, { Suspense } from "react";
import { Layout } from "@/components/Layout";
import { Box, Skeleton } from "@mui/material";
import OurServices from "@/components/ServiceSection/services";
import ServiceHighlightSection from "@/components/ServiceSection/ServiceHighlightSection";
import FAQSection from "@/components/ServiceSection/FAQSection";
import TestimonialsSection from "@/components/ServiceSection/TestimonialsSection";

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
        <OurServices />
        <ServiceHighlightSection
        title="Experience Service Like Never Before"
        subtitle="Join thousands of businesses that trust Nepal Can Group for logistics, technology, and workforce solutions."
        buttonText="Partner With Us"
        buttonLink="/contact"
      />
      <TestimonialsSection/>
      <FAQSection/>
      </Layout>
    </Suspense>
  );
}
