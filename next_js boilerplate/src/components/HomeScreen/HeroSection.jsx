"use client";

import React, { useState, useEffect } from "react";
import { Button, Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      src: "/heroSection/landTransport.jpg",
      title: "Logistics Across Nepal",
      subtitle: "Connecting the Himalayas with reliable land transport.",
      alt: "Nepal Can Move Truck",
    },
    {
      src: "/heroSection/cargo.jpg",
      title: "Global Air Cargo",
      subtitle: "Your bridge to international markets and beyond.",
      alt: "International Cargo",
    },
    {
      src: "/heroSection/packaging.jpg",
      title: "Smart Packaging",
      subtitle: "Secure warehousing and professional packing solutions.",
      alt: "Packaging Solutions",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Slider Container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                style={{
                  transition: "transform 8s ease-out",
                  transform: index === activeSlide ? "scale(1.15)" : "scale(1)",
                }}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <Container
        maxWidth="lg"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 20,
          pointerEvents: "none",
        }}
      >
        <Box sx={{ maxWidth: "700px", pointerEvents: "auto" }}>
          {/* Animated Badge */}
          <Typography
            variant="overline"
            sx={{
              color: "var(--custom-red)",
              fontWeight: 800,
              letterSpacing: 2,
              display: "block",
              mb: 1,
              opacity: 0.9,
            }}
          >
            NEPAL CAN GROUP
          </Typography>

          {/* Dynamic Animated Title */}
          <Box sx={{ overflow: "hidden", mb: 2 }}>
            <Typography
              key={`title-${activeSlide}`}
              variant="h1"
              className="animate-slideUp"
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
                fontWeight: 900,
                color: "white",
                lineHeight: 1.1,
              }}
            >
              {slides[activeSlide].title}
            </Typography>
          </Box>

          {/* Dynamic Animated Subtitle */}
          <Typography
            key={`sub-${activeSlide}`}
            variant="h5"
            className="animate-fadeIn"
            sx={{
              mb: 5,
              color: "rgba(255,255,255,0.8)",
              fontSize: { xs: "1rem", md: "1.25rem" },
              fontWeight: 400,
              maxWidth: "500px",
            }}
          >
            {slides[activeSlide].subtitle}
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="/aboutus">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "var(--custom-red)",
                  px: 4,
                  py: 1.5,
                  borderRadius: "4px",
                  fontWeight: 700,
                  "&:hover": { bgcolor: "#b01832" },
                }}
              >
                Learn More
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  px: 4,
                  py: 1.5,
                  borderRadius: "4px",
                  "&:hover": { bgcolor: "white", color: "black" },
                }}
              >
                Contact Us
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>

      {/* Clean Global Animations */}
      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
