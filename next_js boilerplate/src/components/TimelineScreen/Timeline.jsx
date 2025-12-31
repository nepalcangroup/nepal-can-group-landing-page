"use client";

import React, { useState } from "react";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const timelineData = [
  {
    year: "2010s",
    title: "Founding & Vision",
    description: `Nepal Can Group was founded in the 2010s by visionary leaders (including Ganga Thapa, Manish Acharya, Sudeep Acharya, and Sujeet Acharya), with a mission to drive progress across Nepal through innovation, efficiency, and trusted services spanning logistics, digital, and delivery solutions.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    image: "/timeline/founding.jpg",
  },
  {
    year: "2018",
    title: "Early Business Launch",
    description:
      "The Group begins operational activities in logistics, freight and related services, positioning itself as a reliable partner for transportation and supply chain needs in Nepal.",
    image: "/timeline/businessLaunch.jpg",
  },
  {
    year: "2020",
    title: "Brand & Network Growth",
    description:
      "Nepal Can Group expands its brand presence with a growing network of service offerings, including logistics and digital solutions for businesses and individuals across multiple Nepali cities.",
    image: "/timeline/network_connection.jpg",
  },
  {
    year: "2021",
    title: "Technology Integration",
    description:
      "Focus on integrating digital tools and platforms to streamline operations, enhance customer experience, and support e‑commerce and delivery ecosystems.",
    image: "/timeline/technology_integration.jpg",
  },
  {
    year: "2023",
    title: "Growing Service Portfolio",
    description:
      "Multiple business verticals under the CAN umbrella continue expansion — including Nepal Can Transport, Nepal Can Packaging, and Nepal Can Code — reflecting diversification in logistics and digital services.",
    image: "/timeline/growing_service.jpg",
  },
  {
    year: "2024",
    title: "Leadership and Regional Expansion",
    description:
      "The Group broadens its reach with increased branch and service coverage across provinces, strengthening its workforce and strategic footprint in the national logistics and services market.",
    image: "/timeline/can_expansion.png",
  },
  {
    year: "2025",
    title: "Celebrating 7 Years",
    description:
      "Nepal Can Group publicly celebrates seven years of growth since inception, highlighting achievements in operational expansion and brand development across Nepal's commerce and supply chain sectors.",
    image: "/timeline/celebration.jpg",
  },
];

const TimelineSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box className="relative min-h-screen bg-slate-900 flex items-center overflow-hidden py-20">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${timelineData[activeIndex].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />

      <Container maxWidth="lg" className="relative z-20">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={3} md={2}>
            <Stack
              spacing={4}
              className="border-l border-slate-700/50 ml-4 relative"
            >
              {timelineData.map((item, index) => (
                <Box
                  key={item.year}
                  className="relative pl-8 cursor-pointer group"
                  onClick={() => setActiveIndex(index)}
                >
                  <div
                    className={`absolute left-[-5px] top-1/2 -translate-y-1/2 w-[9px] h-[9px] rounded-full transition-colors duration-300 ${
                      activeIndex === index
                        ? "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]"
                        : "bg-slate-600 group-hover:bg-slate-400"
                    }`}
                  />

                  <Typography
                    className={`text-sm font-bold tracking-widest transition-all duration-300 ${
                      activeIndex === index
                        ? "text-amber-500 scale-110"
                        : "text-slate-500 group-hover:text-slate-300"
                    }`}
                  >
                    {item.year}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Content Area */}
          <Grid item xs={9} md={7}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h3"
                  className="text-amber-500 leading-tight"
                  sx={{
                    fontSize: { xs: "1.75rem", md: "2.5rem" },
                    mb: 3,
                  }}
                >
                  {timelineData[activeIndex].title}
                </Typography>

                <Box
                  sx={{
                    maxHeight: { xs: "220px", md: "none" },
                    overflowY: { xs: "auto", md: "visible" },
                    pr: 1,
                  }}
                >
                  <Typography
                    className="text-slate-300 text-lg leading-relaxed max-w-xl"
                    sx={{ whiteSpace: "pre-line" }}
                  >
                    {timelineData[activeIndex].description}
                  </Typography>
                </Box>
              </motion.div>
            </AnimatePresence>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TimelineSection;
