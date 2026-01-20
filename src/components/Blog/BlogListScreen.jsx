"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Fade,
  Skeleton,
} from "@mui/material";
import {
  CalendarToday,
  AccessTime,
  ArrowForward,
  BookmarkBorder,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { getSafeImage } from "@/utils/image";

// Format date function
const formatDate = (dateString) => {
  if (!dateString) return "January 18, 2026";

  try {
    const date = new Date(dateString);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  } catch (error) {
    return "January 18, 2026";
  }
};

// Blog card component
const BlogCard = ({ blog, index }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Fade in={loaded} timeout={600 + index * 100}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: { xs: 200, sm: 220, md: 240 },
            overflow: "hidden",
          }}
        >
          {blog.image ? (
            <Image
              src={getSafeImage(blog.image)}
              alt={blog.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4" color="white" fontWeight={600}>
                Blog
              </Typography>
            </Box>
          )}

          <Chip
            label="Blog"
            size="small"
            sx={{
              position: "absolute",
              top: 16,
              left: 16,
              bgcolor: "var(--custom-red)",
              color: "white",
              fontWeight: 600,
            }}
          />
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <CalendarToday sx={{ fontSize: 16, color: "text.secondary" }} />
              <Typography variant="caption" color="text.secondary">
                {formatDate(blog?.createdAt || blog?.date)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <AccessTime sx={{ fontSize: 16, color: "text.secondary" }} />
              <Typography variant="caption" color="text.secondary">
                5 min read
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 2,
              lineHeight: 1.3,
              color: "#0B2B5B",
              minHeight: 60,
            }}
          >
            {blog.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              mb: 3,
              lineHeight: 1.6,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {blog.body}
          </Typography>

          <Link href={`/blog/${blog.id}`} style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                color: "var(--custom-red)",
                fontWeight: 600,
                fontSize: "0.9rem",
                transition: "gap 0.2s ease",
                "&:hover": { gap: 2 },
              }}
            >
              Read More
              <ArrowForward sx={{ fontSize: 18 }} />
            </Box>
          </Link>
        </CardContent>
      </Card>
    </Fade>
  );
};

// Main blog list component
export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs`,
          {
            cache: "no-store",
          },
        );

        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        // Fallback mock data if API fails
        // setBlogs([
        //   {
        //     id: 1,
        //     title: "The Future of Logistics in Nepal",
        //     body: "Explore how technological innovations are reshaping the logistics landscape in Nepal, bringing efficiency and reliability to supply chain management across the region.",
        //     image: "/heroSection/cargo.jpg",
        //     date: "January 18, 2026",
        //   },
        //   {
        //     id: 2,
        //     title: "Sustainable Packaging Solutions",
        //     body: "Discover eco-friendly packaging options that are revolutionizing the industry while reducing environmental impact and meeting global sustainability standards.",
        //     image: "/heroSection/packaging.jpg",
        //     date: "January 17, 2026",
        //   },
        //   {
        //     id: 3,
        //     title: "Digital Transformation in Supply Chain",
        //     body: "Learn how digital technologies are transforming traditional supply chain operations, enabling real-time tracking and improved customer experiences.",
        //     image: "/heroSection/landTransport.jpg",
        //     date: "January 16, 2026",
        //   },
        // ]);
      } finally {
        setLoading(false);
      }
    }

    getBlogs();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Grid item xs={12} md={6} lg={4} key={item}>
              <Skeleton
                variant="rectangular"
                height={400}
                sx={{ borderRadius: 3 }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  if (!loading && blogs.length === 0) {
    return (
      <Container maxWidth="xl" sx={{ py: { xs: 12, md: 20 } }}>
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 600,
            mx: "auto",
          }}
        >
          <Box
            sx={{
              width: 120,
              height: 120,
              mx: "auto",
              mb: 4,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, rgba(196,18,48,0.1), rgba(11,43,91,0.1))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BookmarkBorder sx={{ fontSize: 48, color: "text.secondary" }} />
          </Box>

          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 2, color: "#0B2B5B" }}
          >
            No Blogs Available
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, lineHeight: 1.6 }}
          >
            We’re working on publishing insightful articles for you. Please
            check back soon for updates from Nepal Can Group.
          </Typography>

          <Button
            variant="outlined"
            component={Link}
            href="/"
            sx={{
              borderColor: "var(--custom-red)",
              color: "var(--custom-red)",
              px: 4,
              py: 1.2,
              borderRadius: "50px",
              fontWeight: 600,
              "&:hover": {
                bgcolor: "var(--custom-red)",
                color: "white",
              },
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 12, sm: 12, md: 12, lg: 18 } }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: { xs: 6, sm: 8, md: 10 } }}>
        <Typography
          variant="overline"
          sx={{
            color: "var(--custom-red)",
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            mb: 2,
            display: "block",
          }}
        >
          Our Blog
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            color: "#0B2B5B",
            mb: 3,
            fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
          }}
        >
          Insights & Stories
        </Typography>

        {/* Saved Articles Button */}
        <Box sx={{ mt: { xs: 2, sm: 3 }, mb: { xs: 3, sm: 4 } }}>
          <Button
            variant="outlined"
            startIcon={<BookmarkBorder />}
            component={Link}
            href="/saved-blogs"
            sx={{
              borderColor: "var(--custom-red)",
              color: "var(--custom-red)",
              px: 3,
              py: 1,
              borderRadius: "50px",
              fontWeight: 600,
              fontSize: "0.9rem",
              "&:hover": {
                bgcolor: "var(--custom-red)",
                color: "white",
                borderColor: "var(--custom-red)",
              },
            }}
          >
            View Saved Articles
          </Button>
        </Box>

        <Typography
          variant="h6"
          sx={{
            color: "text.secondary",
            maxWidth: 600,
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Discover the latest trends, innovations, and success stories from
          Nepal Can Group and the logistics industry.
        </Typography>
      </Box>

      {/* Blog Grid */}
      <Grid container spacing={{ xs: 3, sm: 4, md: 5 }}>
        {blogs.map((blog, index) => (
          <Grid item xs={12} md={6} lg={4} key={blog.id}>
            <BlogCard blog={blog} index={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
