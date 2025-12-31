"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const aboutSlides = [
  {
    image: "/aboutUs/innovation.jpg", 
    title: "Growing together through",
    highlight: "meaningful innovation",
    description: "Designed with scalability, security and adaptability at its core, our advanced tech stack is the cornerstone of how we help partner BFIs grow and thrive. Together, we create solutions that drive sustainable growth.",
  },
  {
    image: "/aboutUs/partnership.jpg",
    title: "Empowering businesses via",
    highlight: "strategic partnership",
    description: "We believe in the power of collaboration. By aligning our logistics expertise with your business goals, we create a seamless supply chain that transcends geographical boundaries.",
  },
  {
    image: "/timeline/technology_integration.jpg",
    title: "Transforming Nepal with",
    highlight: "digital excellence",
    description: "From national courier services to cutting-edge software development, we are committed to building the digital infrastructure that will power Nepal's future economy.",
  }
];

export default function AboutUsSlider() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % aboutSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box 
      component="section" 
      sx={{ 
        position: 'relative', 
        width: '100%', 
        height: { xs: '70vh', md: '80vh' }, 
        overflow: 'hidden',
        bgcolor: 'black' 
      }}
    >
      {/* BACKGROUND IMAGE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${index}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <Image
            src={aboutSlides[index].image}
            alt="Background"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <Box 
            sx={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'radial-gradient(circle, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)',
              zIndex: 1 
            }} 
          />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT AREA */}
      <Container 
        maxWidth="md" 
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          color: 'white'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            {/* Main Heading */}
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 800, 
                mb: 2, 
                fontSize: { xs: '2.2rem', md: '3.5rem' },
                lineHeight: 1.2
              }}
            >
              {aboutSlides[index].title} <br />
              <Box 
                component="span" 
                sx={{ 
                  color: 'var(--custom-red)', 
                  textShadow: '0px 0px 20px rgba(220, 30, 62, 0.3)'
                }}
              >
                {aboutSlides[index].highlight}
              </Box>
            </Typography>

            {/* Description */}
            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: '700px', 
                mx: 'auto', 
                opacity: 0.85, 
                lineHeight: 1.7,
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                fontWeight: 300
              }}
            >
              {aboutSlides[index].description}
            </Typography>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <Stack 
          direction="row" 
          spacing={1.5} 
          sx={{ position: 'absolute', bottom: 40 }}
        >
          {aboutSlides.map((_, i) => (
            <Box
              key={i}
              onClick={() => setIndex(i)}
              sx={{
                width: i === index ? 32 : 10,
                height: 10,
                borderRadius: '5px',
                bgcolor: i === index ? 'white' : 'rgba(255,255,255,0.3)',
                cursor: 'pointer',
                transition: 'all 0.4s ease'
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
