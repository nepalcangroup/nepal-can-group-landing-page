"use client";
import React, { Suspense } from "react";
import { Layout } from "@/components/Layout";
import { Box, Skeleton } from "@mui/material";
import BlogDetailScreen from "@/components/Blog/BlogDetailScreen";

export default function BlogDetailPage({ params }) {
  const resolvedParams = React.use(params);

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
        <BlogDetailScreen blogId={resolvedParams.id} />
      </Layout>
    </Suspense>
  );
}
