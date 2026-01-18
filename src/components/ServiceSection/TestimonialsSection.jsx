"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ReactPlayer from "react-player";
import CloseIcon from "@mui/icons-material/Close";

const testimonials = [
  {
    name: "Rajesh Sharma",
    position: "CEO, TechHub Nepal",
    company: "Technology Partner",
    content:
      "Nepal Can Move has been instrumental in our logistics operations. Their reliable delivery service and real-time tracking have helped us serve our customers better across Nepal.",
    image: "/contact/building.jpg",
  },
  {
    name: "Sita Karki",
    position: "Operations Manager",
    company: "E-commerce Store",
    content:
      "The comprehensive solutions from Nepal Can Group have transformed our business. From packaging to delivery, everything is handled professionally and efficiently.",
    image: "/contact/building.jpg",
  },
  {
    name: "Bikram Gurung",
    position: "Founder",
    company: "Local Artisan Collective",
    content:
      "Nepal Can International helped us expand our reach globally. Their international shipping services are reliable, affordable, and the customer support is exceptional.",
    image: "/contact/building.jpg",
  },
];

const videos = [
  {
    title: "xyz - E-commerce",
    src: "https://www.youtube.com/watch?v=Re1Ihm_ljLE",
  },
  {
    title: "abc - International Shipping",
    src: "https://www.youtube.com/watch?v=QFhRaskow4Y",
  },
  { title: "Video 3", src: "https://www.youtube.com/watch?v=IlPf9utJYbw" },
];

const TestimonialsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openVideo, setOpenVideo] = useState(null);

  // Scroll to active testimonial dot
  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.firstChild.offsetWidth + 16;
      container.scrollTo({ left: index * cardWidth, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  // Update active dot on scroll
  useEffect(() => {
    if (!isMobile) return;
    const container = scrollRef.current;
    const onScroll = () => {
      const cardWidth = container.firstChild.offsetWidth + 16;
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    };
    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box textAlign="center" mb={8}>
            <Typography
              variant="overline"
              sx={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "var(--custom-red)",
                mb: 2,
                display: "block",
              }}
            >
              TESTIMONIALS
            </Typography>

            <Typography
              variant="h2"
              fontWeight={800}
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                color: "#1e293b",
                mb: 3,
              }}
            >
              What Our{" "}
              <Box component="span" sx={{ color: "var(--custom-red)" }}>
                Partners Say
              </Box>
            </Typography>

            <Box
              sx={{
                width: 80,
                height: 4,
                bgcolor: "var(--custom-red)",
                borderRadius: 2,
                mx: "auto",
                mb: 4,
              }}
            />

            <Typography
              variant="h6"
              sx={{
                fontSize: "1.1rem",
                color: "#64748b",
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              Hear from our valued partners and clients about their experience
              working with Nepal Can Group.
            </Typography>
          </Box>
        </motion.div>

        {/* Video Grid */}
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={4}>
            {videos.map((video) => (
              <Grid key={video.title} item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                  }}
                  onClick={() => setOpenVideo(video.src)}
                >
                  <ReactPlayer
                    url={video.src}
                    controls
                    width="100%"
                    height={200}
                  />
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      fontWeight={700}
                      sx={{ textAlign: "center" }}
                    >
                      {video.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Fullscreen Overlay Video */}
        {openVideo && (
          <Box
            sx={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              bgcolor: "rgba(0,0,0,0.95)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <IconButton
              onClick={() => setOpenVideo(null)}
              sx={{ position: "absolute", top: 16, right: 16, color: "white" }}
            >
              <CloseIcon />
            </IconButton>
            <ReactPlayer
              url={openVideo}
              controls
              playing
              width="80%"
              height="80%"
            />
          </Box>
        )}

        {/* Testimonials */}
        <Box sx={{ position: "relative" }}>
          {isMobile ? (
            <Box
              ref={scrollRef}
              sx={{
                display: "flex",
                gap: 2,
                overflowX: "auto",
                scrollBehavior: "smooth",
                py: 2,
                cursor: "grab",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {testimonials.map((testimonial, idx) => (
                <Card
                  key={idx}
                  sx={{
                    minWidth: "80vw",
                    maxWidth: "90vw",
                    flexShrink: 0,
                    borderRadius: 4,
                    border: "1px solid #e2e8f0",
                    p: 3,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      flexGrow: 1,
                    }}
                  >
                    <FormatQuoteIcon
                      sx={{
                        fontSize: "3rem",
                        color: "rgba(220, 38, 38, 0.12)",
                        transform: "rotate(180deg)",
                      }}
                    />
                    <Typography
                      sx={{
                        color: "#475569",
                        fontStyle: "italic",
                        lineHeight: 1.5,
                        fontSize: "0.95rem",
                        overflow: "hidden",
                      }}
                    >
                      “{testimonial.content}”
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 3,
                      mt: 2,
                    }}
                  >
                    <Avatar
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{
                        width: 56,
                        height: 56,
                        border: "2px solid var(--custom-red)",
                      }}
                    />
                    <Box>
                      <Typography fontWeight={700} color="#1e293b">
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "var(--custom-red)", fontWeight: 600 }}
                      >
                        {testimonial.position}
                      </Typography>
                      <Typography variant="caption" color="#64748b">
                        {testimonial.company}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Box>
          ) : (
            <Grid container spacing={4}>
              {testimonials.map((testimonial, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Card
                    sx={{
                      borderRadius: 4,
                      border: "1px solid #e2e8f0",
                      p: 3,
                      boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        flexGrow: 1,
                      }}
                    >
                      <FormatQuoteIcon
                        sx={{
                          fontSize: "3rem",
                          color: "rgba(220, 38, 38, 0.12)",
                          transform: "rotate(180deg)",
                        }}
                      />
                      <Typography
                        sx={{
                          color: "#475569",
                          fontStyle: "italic",
                          lineHeight: 1.5,
                          fontSize: "0.95rem",
                          overflow: "hidden",
                        }}
                      >
                        “{testimonial.content}”
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                        mt: 2,
                      }}
                    >
                      <Avatar
                        src={testimonial.image}
                        alt={testimonial.name}
                        sx={{
                          width: 56,
                          height: 56,
                          border: "2px solid var(--custom-red)",
                        }}
                      />
                      <Box>
                        <Typography fontWeight={700} color="#1e293b">
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "var(--custom-red)", fontWeight: 600 }}
                        >
                          {testimonial.position}
                        </Typography>
                        <Typography variant="caption" color="#64748b">
                          {testimonial.company}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {/* Dots only on mobile */}
          {isMobile && (
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2 }}
            >
              {testimonials.map((_, idx) => (
                <Box
                  key={idx}
                  onClick={() => scrollToIndex(idx)}
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor:
                      idx === activeIndex ? "var(--custom-red)" : "#cbd5e1",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
