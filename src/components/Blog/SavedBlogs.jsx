"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  Grid,
  Fade,
  Button,
  IconButton,
  Skeleton,
  Alert,
  Chip,
} from "@mui/material";
import {
  CalendarToday,
  AccessTime,
  ArrowForward,
  BookmarkBorder,
  Delete,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import { useTheme, alpha } from "@mui/material";
import { getSafeImage } from "@/utils/image";

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

const estimateReadingTime = (content) => {
  if (!content) return "1 min read";
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

const removeBlogFromStorage = (blogId) => {
  if (typeof window === "undefined") return;

  try {
    const savedPosts = JSON.parse(localStorage.getItem("savedPosts") || "[]");
    const updatedPosts = savedPosts.filter((id) => id !== blogId);
    localStorage.setItem("savedPosts", JSON.stringify(updatedPosts));
  } catch (error) {
    console.error("Error removing blog from storage:", error);
  }
};

const fetchSavedBlogs = async () => {
  if (typeof window === "undefined") return { blogs: [] };

  try {
    const savedBlogIds = JSON.parse(localStorage.getItem("savedPosts") || "[]");

    if (savedBlogIds.length === 0) {
      return { blogs: [] };
    }

    // Fetch all blogs from the API
    const response = await fetch("http://localhost:5000/api/blogs", {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Failed to fetch blogs from API");
      return { blogs: [] };
    }

    const allBlogs = await response.json();

    // Filter blogs to only include saved ones
    const savedBlogs = allBlogs.filter((blog) =>
      savedBlogIds.includes(blog.id)
    );

    return { blogs: savedBlogs };
  } catch (error) {
    console.error("Error fetching saved blogs:", error);
    return { blogs: [] };
  }
};

export default function SavedBlogsPage() {
  const [savedBlogs, setSavedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [removing, setRemoving] = useState(null);
  const [mounted, setMounted] = useState(false);
  const theme = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    async function fetchSavedBlogsData() {
      try {
        if (typeof window === "undefined") {
          setLoading(false);
          return;
        }

        const { blogs } = await fetchSavedBlogs();
        setSavedBlogs(blogs);
      } catch (error) {
        console.error("Error fetching saved blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSavedBlogsData();
  }, []);

  const handleRemoveFromSaved = (blogId) => {
    setRemoving(blogId);

    removeBlogFromStorage(blogId);

    setSavedBlogs((prev) => prev.filter((blog) => blog.id !== blogId));
    setRemoving(null);
  };

  if (loading) {
    return (
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Skeleton height={60} width="40%" sx={{ mx: "auto", mb: 2 }} />
          <Skeleton height={30} width="60%" sx={{ mx: "auto" }} />
        </Box>
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

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 10, sm: 12, md: 18 } }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
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
          Your Collection
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            color: "#0B2B5B",
            mb: 3,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
          }}
        >
          Saved Articles
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "text.secondary",
            maxWidth: 600,
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Your personally curated collection of insights and stories from Nepal
          Can Group.
        </Typography>

        {/* Back to Blogs Link */}
        <Box sx={{ mt: 4 }}>
          <Link href="/blog" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              startIcon={<ArrowForward sx={{ transform: "rotate(180deg)" }} />}
              sx={{
                borderColor: "var(--custom-red)",
                color: "var(--custom-red)",
                "&:hover": {
                  bgcolor: "var(--custom-red)",
                  color: "white",
                },
              }}
            >
              Back to All Blogs
            </Button>
          </Link>
        </Box>
      </Box>

      {/* Saved Blogs Grid */}
      {savedBlogs.length > 0 ? (
        <Grid container spacing={4}>
          {savedBlogs.map((blog, index) => (
            <Grid item xs={12} md={6} lg={4} key={blog.id}>
              <Fade in timeout={600 + index * 100}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    position: "relative",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  {/* Remove Button */}
                  <IconButton
                    onClick={() => handleRemoveFromSaved(blog.id)}
                    disabled={removing === blog.id}
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      bgcolor: "rgba(255, 255, 255, 0.9)",
                      color: "var(--custom-red)",
                      zIndex: 2,
                      width: 40,
                      height: 40,
                      "&:hover": {
                        bgcolor: "var(--custom-red)",
                        color: "white",
                      },
                    }}
                  >
                    <Delete />
                  </IconButton>

                  {/* Image Section */}
                  <Box
                    sx={{
                      position: "relative",
                      height: { xs: 200, sm: 220, md: 240 },
                    }}
                  >
                    <Image
                      src={getSafeImage(blog.image)}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                      placeholder="blur"
                      blurDataURL="/aboutUs/partnership.jpg"
                    />

                    <Chip
                      icon={<BookmarkBorder sx={{ fontSize: 16 }} />}
                      label="Saved"
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        backgroundColor: "var(--custom-red)",
                        color: "white",
                        fontWeight: 600,
                      }}
                    />
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        <CalendarToday
                          sx={{ fontSize: 16, color: "text.secondary" }}
                        />
                        <Typography variant="caption" color="text.secondary">
                          {formatDate(blog?.createdAt || blog?.date)}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        <AccessTime
                          sx={{ fontSize: 16, color: "text.secondary" }}
                        />
                        <Typography variant="caption" color="text.secondary">
                          {estimateReadingTime(blog?.content || blog?.body)}
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
                      {blog.body || blog.content}
                    </Typography>

                    <Link
                      href={`/blog/${blog.id}`}
                      style={{ textDecoration: "none" }}
                    >
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
            </Grid>
          ))}
        </Grid>
      ) : (
        // Empty State
        <Box sx={{ textAlign: "center", py: 12 }}>
          <Box
            sx={{
              width: 120,
              height: 120,
              mx: "auto",
              mb: 4,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${alpha(
                theme.palette.primary.main,
                0.1
              )} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
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
            No Saved Articles Yet
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 500, mx: "auto" }}
          >
            Start building your personal collection by saving articles that
            interest you. Click the "Save" button on any blog post to add it
            here.
          </Typography>

          <Link href="/blog" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{
                bgcolor: "var(--custom-red)",
                "&:hover": { bgcolor: alpha("#C41230", 0.9) },
              }}
            >
              Explore Articles
            </Button>
          </Link>
        </Box>
      )}
    </Container>
  );
}
