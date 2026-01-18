"use client";
import React, { Suspense } from "react";
import { Layout } from "@/components/Layout";
import { Box, Skeleton } from "@mui/material";
import SavedBlogsPage from "@/components/Blog/SavedBlogs";

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
        <SavedBlogsPage />
      </Layout>
    </Suspense>
  );
}
