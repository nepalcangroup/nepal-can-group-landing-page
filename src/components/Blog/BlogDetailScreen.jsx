"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Chip,
  Avatar,
  Divider,
  Skeleton,
  IconButton,
  Fade,
  Paper,
  Card,
  CardContent,
  Grid,
  Button,
  useTheme,
  alpha,
  Menu,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  Person,
  AccessTime,
  ArrowBack,
  Share,
  Bookmark,
  NavigateNext,
  Category,
  Comment,
  TrendingUp,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import { getSafeImage } from "@/utils/image";

export default function BlogDetailScreen({ blogId }) {
  const [blog, setBlog] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/${blogId}`,
          {
            cache: "no-store",
          }
        );
        if (!res.ok) throw new Error("Blog not found");
        const data = await res.json();
        setBlog(data);

        // Check if this post is already saved
        const savedPosts = JSON.parse(
          localStorage.getItem("savedPosts") || "[]"
        );
        setIsSaved(savedPosts.includes(data.id));

        // Fetch related posts
        try {
          const relatedRes = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs`,
            {
              cache: "no-store",
            }
          );
          if (relatedRes.ok) {
            const allPosts = await relatedRes.json();
            // Ensure allPosts is an array before filtering
            const postsArray = Array.isArray(allPosts) ? allPosts : [];
            const filtered = postsArray
              .filter((post) => post.id !== blogId)
              .slice(0, 3);
            setRelatedPosts(filtered);
          }
        } catch (relatedErr) {
          console.error("Error fetching related posts:", relatedErr);
          // Fallback related posts
          // setRelatedPosts([
          //   {
          //     id: 2,
          //     title: "Sustainable Packaging Solutions",
          //     content:
          //       "Discover eco-friendly packaging options that are revolutionizing industry...",
          //     image: "/heroSection/packaging.jpg",
          //     author: "Nepal Can Group",
          //     date: "January 17, 2026",
          //     category: "logistics",
          //   },
          //   {
          //     id: 3,
          //     title: "Digital Transformation in Supply Chain",
          //     content:
          //       "Learn how digital technologies are transforming traditional supply chain...",
          //     image: "/heroSection/landTransport.jpg",
          //     author: "Nepal Can Group",
          //     date: "January 16, 2026",
          //     category: "technology",
          //   },
          // ]);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [blogId]);

  // Generate table of contents from headings
  const generateTableOfContents = (content) => {
    const paragraphs = content.split("\n\n");
    const headings = [];

    paragraphs.forEach((para, index) => {
      if (para.length < 100 && !para.includes(".")) {
        headings.push({
          title: para.trim(),
          id: `heading-${index}`,
        });
      }
    });

    return headings;
  };

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Generate categories from tags
  const generateCategories = (tags) => {
    if (!tags) return ["Logistics", "Technology"];
    return tags
      .split(",")
      .map((tag) => tag.trim())
      .slice(0, 4);
  };

  // Estimate reading time
  const estimateReadingTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

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

  // Share functionality
  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blog?.title || "Check out this article";

    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          title
        )}&url=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        setShowShareMenu(false);
        return;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
    setShowShareMenu(false);
  };

  // Save functionality
  const handleSave = () => {
    setIsSaved(!isSaved);
    const savedPosts = JSON.parse(localStorage.getItem("savedPosts") || "[]");
    if (!isSaved) {
      savedPosts.push(blog.id);
      localStorage.setItem("savedPosts", JSON.stringify(savedPosts));
    } else {
      const index = savedPosts.indexOf(blog.id);
      if (index > -1) {
        savedPosts.splice(index, 1);
        localStorage.setItem("savedPosts", JSON.stringify(savedPosts));
      }
    }
  };

  if (loading)
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Skeleton
          height={420}
          variant="rectangular"
          sx={{ mb: 4, borderRadius: 3 }}
        />
        <Skeleton height={60} sx={{ mb: 2 }} />
        <Skeleton height={30} width="50%" sx={{ mb: 4 }} />
        <Skeleton height={200} sx={{ mb: 2 }} />
        <Skeleton height={200} />
      </Container>
    );

  if (error || !blog)
    return (
      <Container
        maxWidth="md"
        sx={{ py: { xs: 12, sm: 12, md: 20 }, textAlign: "center" }}
      >
        <Typography variant="h5" gutterBottom>
          Blog not found
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4 }}>
          The blog you are looking for does not exist or was removed.
        </Typography>
        <Link href="/blog" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              color: "var(--custom-red)",
              fontWeight: 600,
            }}
          >
            <ArrowBack />
            Back to Blog
          </Box>
        </Link>
      </Container>
    );

  const tableOfContents = generateTableOfContents(
    blog?.content || blog?.body || ""
  );
  const categories = generateCategories(blog?.tags);
  const readingTime = estimateReadingTime(blog?.content || blog?.body || "");

  return (
    <Fade in timeout={600}>
      <Box
        sx={{
          bgcolor: alpha(theme.palette.background.default, 0.5),
          py: { xs: 12, sm: 12, md: 20 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Main Content */}
            <Grid item xs={12} lg={8}>
              {/* Back Navigation */}
              <Link href="/blog" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    color: "var(--custom-red)",
                    fontWeight: 600,
                    mb: 3,
                    transition: "all 0.2s ease",
                    "&:hover": { gap: 2 },
                  }}
                >
                  <ArrowBack /> Back to Blog
                </Box>
              </Link>

              {/* Article Header */}
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  mb: 4,
                  background: `linear-gradient(135deg, ${alpha(
                    theme.palette.primary.main,
                    0.05
                  )} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 3,
                    flexWrap: "wrap",
                  }}
                >
                  <Chip
                    label={blog?.category || "Featured Article"}
                    size="small"
                    sx={{
                      bgcolor: "var(--custom-red)",
                      color: "white",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      textTransform: "capitalize",
                    }}
                  />
                  <Chip
                    icon={<TrendingUp sx={{ fontSize: 16 }} />}
                    label="Trending"
                    size="small"
                    variant="outlined"
                    sx={{
                      borderColor: "var(--custom-red)",
                      color: "var(--custom-red)",
                      fontSize: "0.75rem",
                    }}
                  />
                  {blog?.slug && (
                    <Chip
                      label={`/${blog.slug}`}
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: alpha(theme.palette.primary.main, 0.3),
                        color: "text.secondary",
                        fontSize: "0.7rem",
                        fontFamily: "monospace",
                      }}
                    />
                  )}
                </Box>

                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    color: "#0B2B5B",
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    mb: 3,
                    lineHeight: 1.2,
                  }}
                >
                  {blog.title}
                </Typography>

                {/* Enhanced Meta Information */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: 3,
                    mb: 3,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: "var(--custom-red)",
                        width: 48,
                        height: 48,
                      }}
                    >
                      <Person />
                    </Avatar>
                    <Box>
                      <Typography fontWeight={700} fontSize="0.95rem">
                        {blog.author || "Nepal Can Group"}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {formatDate(
                          blog?.createdAt || blog?.date || "January 18, 2026"
                        )}
                      </Typography>
                    </Box>
                  </Box>

                  <Divider orientation="vertical" flexItem />

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <AccessTime
                        sx={{ fontSize: 16, color: "text.secondary" }}
                      />
                      <Typography variant="caption" color="text.secondary">
                        {readingTime}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Tags */}
                {blog?.tags && (
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}
                  >
                    {blog.tags.split(",").map((tag, index) => (
                      <Chip
                        key={index}
                        label={tag.trim()}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: alpha(theme.palette.primary.main, 0.2),
                          color: "text.secondary",
                          fontSize: "0.7rem",
                          "&:hover": {
                            borderColor: "var(--custom-red)",
                            color: "var(--custom-red)",
                          },
                        }}
                      />
                    ))}
                  </Box>
                )}

                {/* Action Buttons */}
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Share />}
                    onClick={(e) => setShowShareMenu(e.currentTarget)}
                    sx={{
                      borderColor: "var(--custom-red)",
                      color: "var(--custom-red)",
                      "&:hover": {
                        bgcolor: "var(--custom-red)",
                        color: "white",
                      },
                    }}
                  >
                    Share
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Bookmark />}
                    onClick={handleSave}
                    sx={{
                      borderColor: isSaved
                        ? "var(--custom-red)"
                        : "var(--custom-red)",
                      color: isSaved ? "white" : "var(--custom-red)",
                      bgcolor: isSaved ? "var(--custom-red)" : "transparent",
                      "&:hover": {
                        bgcolor: isSaved
                          ? alpha("#C41230", 0.9)
                          : "var(--custom-red)",
                        color: "white",
                      },
                    }}
                  >
                    {isSaved ? "Saved" : "Save"}
                  </Button>
                </Box>

                {/* Share Menu */}
                <Menu
                  anchorEl={showShareMenu}
                  open={Boolean(showShareMenu)}
                  onClose={() => setShowShareMenu(false)}
                  PaperProps={{
                    sx: {
                      mt: 1,
                      minWidth: 180,
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <MenuItem onClick={() => handleShare("facebook")}>
                    <Typography>Share on Facebook</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => handleShare("twitter")}>
                    <Typography>Share on Twitter</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => handleShare("linkedin")}>
                    <Typography>Share on LinkedIn</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => handleShare("copy")}>
                    <Typography>Copy Link</Typography>
                  </MenuItem>
                </Menu>
              </Paper>

              {/* Hero Image  */}
              {blog.image && (
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 280, md: 420 },
                    borderRadius: 3,
                    overflow: "hidden",
                    mb: 6,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.3) 100%)",
                      zIndex: 1,
                    },
                  }}
                >
                  <Image
                    src={getSafeImage(blog.image)}
                    alt={blog.title}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    onError={(e) => {
                      if (e?.target?.parentElement) {
                        e.target.style.display = "none";
                        e.target.parentElement.style.background =
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                      }
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                      color: "white",
                      zIndex: 2,
                    }}
                  >
                    <Typography variant="caption" sx={{ opacity: 0.9 }}>
                      Featured Image
                    </Typography>
                  </Box>
                </Box>
              )}

              {/* Table of Contents */}
              {tableOfContents.length > 0 && (
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    mb: 4,
                    background: alpha(theme.palette.background.paper, 0.8),
                    border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 2, color: "#0B2B5B" }}
                  >
                    Table of Contents
                  </Typography>
                  <Box component="nav">
                    {tableOfContents.map((heading, index) => (
                      <Button
                        key={index}
                        onClick={() => scrollToHeading(heading.id)}
                        sx={{
                          display: "block",
                          textAlign: "left",
                          color: "text.secondary",
                          py: 0.5,
                          px: 1,
                          borderRadius: 1,
                          fontSize: "0.9rem",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                            color: "var(--custom-red)",
                          },
                        }}
                      >
                        {index + 1}. {heading.title}
                      </Button>
                    ))}
                  </Box>
                </Paper>
              )}

              {/* Enhanced Content */}
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  background: alpha(theme.palette.background.paper, 0.9),
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                }}
              >
                <Box
                  sx={{
                    "& p": {
                      fontSize: "1.1rem",
                      lineHeight: 1.8,
                      mb: 3,
                      color: "text.secondary",
                      textAlign: "justify",
                    },
                    "& h2": {
                      mt: 5,
                      mb: 2,
                      fontWeight: 700,
                      color: "#0B2B5B",
                      fontSize: "1.5rem",
                      position: "relative",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: -20,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 4,
                        height: "70%",
                        bgcolor: "var(--custom-red)",
                        borderRadius: 2,
                      },
                    },
                    "& strong": {
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                    },
                  }}
                >
                  {(blog?.content || blog?.body || "")
                    .split("\n\n")
                    .map((block, i) => {
                      if (block.trim().length === 0) return null;

                      if (block.length < 100 && !block.includes(".")) {
                        return (
                          <Typography
                            key={i}
                            variant="h2"
                            id={`heading-${i}`}
                            sx={{ scrollMarginTop: 100 }}
                          >
                            {block.trim()}
                          </Typography>
                        );
                      }

                      return (
                        <Typography key={i} paragraph>
                          {block.trim()}
                        </Typography>
                      );
                    })}
                </Box>
              </Paper>
            </Grid>

            {/* Sidebar */}
            <Grid item xs={12} lg={4}>
              <Box sx={{ position: { lg: "sticky" }, top: 100 }}>
                {/* Author Card */}
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, sm: 4, md: 5 },
                    mb: 3,
                    mt: { xs: 2, sm: 4, md: 6 },
                    textAlign: "center",
                    background: `linear-gradient(135deg, ${alpha(
                      theme.palette.primary.main,
                      0.05
                    )} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    borderRadius: 3,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      mx: "auto",
                      mb: 2,
                      bgcolor: "var(--custom-red)",
                      fontSize: "2rem",
                    }}
                  >
                    <Person />
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {blog.author || "Nepal Can Group"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    Logistics Expert
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Sharing insights on logistics, supply chain management, and
                    industry innovations.
                  </Typography>
                </Paper>

                {/* Categories */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    mb: 3,
                    background: alpha(theme.palette.background.paper, 0.9),
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 2, color: "#0B2B5B" }}
                  >
                    Categories
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {categories.map((category, index) => (
                      <Chip
                        key={index}
                        label={category}
                        size="small"
                        icon={<Category sx={{ fontSize: 14 }} />}
                        variant="outlined"
                        sx={{
                          borderColor: alpha(theme.palette.primary.main, 0.3),
                          color: "text.secondary",
                          textTransform: "capitalize",
                          "&:hover": {
                            borderColor: "var(--custom-red)",
                            color: "var(--custom-red)",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      background: alpha(theme.palette.background.paper, 0.9),
                      border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, mb: 2, color: "#0B2B5B" }}
                    >
                      Related Articles
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      {relatedPosts.map((post) => (
                        <Link
                          key={post.id}
                          href={`/blog/${post.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Card
                            sx={{
                              transition: "all 0.2s ease",
                              "&:hover": {
                                transform: "translateX(8px)",
                                boxShadow: theme.shadows[4],
                              },
                            }}
                          >
                            <CardContent
                              sx={{ p: 2, "&:last-child": { p: 2 } }}
                            >
                              <Box sx={{ display: "flex", gap: 2 }}>
                                <Box
                                  sx={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 2,
                                    overflow: "hidden",
                                    flexShrink: 0,
                                    background:
                                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  {post.image && post.image.startsWith("/") ? (
                                    <Image
                                      src={post.image}
                                      alt={post.title}
                                      width={60}
                                      height={60}
                                      style={{ objectFit: "cover" }}
                                    />
                                  ) : (
                                    <Typography
                                      variant="caption"
                                      color="white"
                                      sx={{ fontSize: "0.6rem" }}
                                    >
                                      Blog
                                    </Typography>
                                  )}
                                </Box>
                                <Box sx={{ flex: 1, minWidth: 0 }}>
                                  <Typography
                                    variant="subtitle2"
                                    sx={{
                                      fontWeight: 600,
                                      mb: 0.5,
                                      color: "#0B2B5B",
                                      fontSize: "0.85rem",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      display: "-webkit-box",
                                      WebkitLineClamp: 2,
                                      WebkitBoxOrient: "vertical",
                                    }}
                                  >
                                    {post.title}
                                  </Typography>
                                  <Typography
                                    variant="caption"
                                    color="text.secondary"
                                  >
                                    {post.date}
                                  </Typography>
                                </Box>
                              </Box>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </Box>
                  </Paper>
                )}
              </Box>
            </Grid>
          </Grid>

          {/* Bottom CTA Section */}
          <Box sx={{ mt: 8, textAlign: "center" }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                background: `linear-gradient(135deg, ${alpha(
                  theme.palette.primary.main,
                  0.1
                )} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
                border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, mb: 2, color: "#0B2B5B" }}
              >
                Enjoyed this article?
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
              >
                Explore more insights and stay updated with the latest trends in
                logistics and supply chain management.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link href="/blog" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    endIcon={<NavigateNext />}
                    sx={{
                      bgcolor: "var(--custom-red)",
                      "&:hover": { bgcolor: alpha("#C41230", 0.9) },
                    }}
                  >
                    Read More Articles
                  </Button>
                </Link>
                {/* <Button
                  variant="outlined"
                  startIcon={<Comment />}
                  sx={{
                    borderColor: "var(--custom-red)",
                    color: "var(--custom-red)",
                    "&:hover": {
                      borderColor: alpha("#C41230", 0.9),
                      color: alpha("#C41230", 0.9),
                    },
                  }}
                >
                  Leave a Comment
                </Button> */}
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
    </Fade>
  );
}
