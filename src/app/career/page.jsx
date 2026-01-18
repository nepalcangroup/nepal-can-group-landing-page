"use client";
import React, { Suspense } from "react";
import { Layout } from "@/components/Layout";
import { Box, Skeleton } from "@mui/material";
import CompanyCultureSection from "@/components/Career/CompanyCultureSection";
import BenefitsSection from "@/components/Career/BenefitsSection";
import CareerOpportunitiesSection from "@/components/Career/CareerOpportunitiesSection";
import CareerSection from "@/components/Career/CareerSection";

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
        <CareerSection />
        <CompanyCultureSection />
        <BenefitsSection />
        <CareerOpportunitiesSection />
      </Layout>
    </Suspense>
  );
}
