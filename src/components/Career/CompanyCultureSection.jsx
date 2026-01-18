"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Stack,
  alpha,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

import BusinessIcon from "@mui/icons-material/Business";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import HandshakeIcon from "@mui/icons-material/Handshake";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function CompanyCultureSection() {
  const brandBlue = "#0B2B5B";
  const brandRed = "#E31E24";

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const slidesPerView = isMobile ? 1 : isTablet ? 2 : 3;

  /* VALUES */
  const cultureValues = [
    {
      icon: <BusinessIcon />,
      title: "Innovation First",
      description: "Encouraging creative solutions in everything we do.",
    },
    {
      icon: <LightbulbIcon />,
      title: "Learning Culture",
      description: "Resources for growth at every professional stage.",
    },
    {
      icon: <HandshakeIcon />,
      title: "Collaborative Spirit",
      description: "Diverse perspectives driving collective success.",
    },
    {
      icon: <EmojiEventsIcon />,
      title: "Excellence Driven",
      description: "Setting high standards and celebrating boundaries pushed.",
    },
  ];

  /* SLIDES */
  const slides = [
    "/aboutUs/innovation.jpg",
    "/aboutUs/partnership.jpg",
    "/aboutUs/warehouse.jpg",
    "/companyCulture/celebration1.jpg",
    "/companyCulture/celebration2.jpg",
    "/companyCulture/celebration3.jpg",
    "/companyCulture/celebration4.jpg",
    "/companyCulture/celebration5.jpg",
  ];

  const SLIDE_DURATION = 3000;
  const totalClones = slidesPerView;

  const extendedSlides = [
    ...slides.slice(-totalClones),
    ...slides,
    ...slides.slice(0, totalClones),
  ];

  const sliderRef = useRef(null);
  const timerRef = useRef(null);

  const [active, setActive] = useState(totalClones);
  const [paused, setPaused] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);
  const [instantJump, setInstantJump] = useState(false);

  const realIndex = (active - totalClones + slides.length) % slides.length;

  /* Measure slide width */
  useEffect(() => {
    if (sliderRef.current) {
      setSlideWidth(sliderRef.current.offsetWidth / slidesPerView);
    }
  }, [slidesPerView]);

  /* AUTOPLAY */
  useEffect(() => {
    if (paused) return;

    timerRef.current = setInterval(() => {
      setActive((prev) => prev + 1);
    }, SLIDE_DURATION);

    return () => clearInterval(timerRef.current);
  }, [paused]);

  useEffect(() => {
    if (active === slides.length + totalClones) {
      setInstantJump(true);
      setActive(totalClones);
    }

    if (active === totalClones - 1) {
      setInstantJump(true);
      setActive(slides.length + totalClones - 1);
    }
  }, [active, slides.length, totalClones]);

  useEffect(() => {
    if (instantJump) {
      requestAnimationFrame(() => setInstantJump(false));
    }
  }, [instantJump]);

  /* DRAG END */
  const handleDragEnd = (_, info) => {
    const movedSlides = Math.round(info.offset.x / slideWidth);
    if (movedSlides !== 0) {
      setActive((prev) => prev - movedSlides);
    }
    setPaused(false);
  };

  return (
    <Box component="section" sx={{ bgcolor: "#fff" }}>
      {/* HEADER + VALUES */}
      <Container maxWidth="lg" sx={{ pt: { xs: 6, sm: 8, md: 12 } }}>
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="overline"
            sx={{ color: brandRed, fontWeight: 800, letterSpacing: 3 }}
          >
            OUR SPIRIT
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              color: brandBlue,
              mt: 1,
              mb: 2,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
            }}
          >
            Life & Culture at Nepal Can Group
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              maxWidth: { xs: 300, sm: 500, md: 700 },
              mx: "auto",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
            }}
          >
            A workplace built on empowerment, continuous innovation, and shared
            success.
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 4 }}
          sx={{ mb: { xs: 6, md: 12 } }}
        >
          {cultureValues.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Stack
                alignItems="center"
                spacing={{ xs: 1.5, sm: 2 }}
                textAlign="center"
              >
                <Box
                  sx={{
                    color: brandRed,
                    "& svg": { fontSize: { xs: 28, sm: 32, md: 34 } },
                  }}
                >
                  {value.icon}
                </Box>
                <Typography
                  sx={{
                    fontWeight: 800,
                    color: brandBlue,
                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1rem" },
                  }}
                >
                  {value.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.95rem" },
                  }}
                >
                  {value.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* SLIDER */}
      <Box
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        sx={{
          overflow: "hidden",
          bgcolor: alpha(brandBlue, 0.02),
          pb: { xs: 4, sm: 5, md: 6 },
        }}
      >
        <motion.div
          ref={sliderRef}
          drag="x"
          dragElastic={0.08}
          dragConstraints={{ left: -Infinity, right: 0 }}
          onDragStart={() => setPaused(true)}
          onDragEnd={handleDragEnd}
          animate={{ x: -active * slideWidth }}
          transition={
            instantJump
              ? { duration: 0 }
              : { type: "spring", stiffness: 260, damping: 30 }
          }
          style={{ display: "flex", cursor: "grab" }}
          whileTap={{ cursor: "grabbing" }}
        >
          {extendedSlides.map((src, index) => (
            <Box
              key={index}
              sx={{
                flex: `0 0 ${100 / slidesPerView}%`,
                px: { xs: 1, sm: 1.5 },
              }}
            >
              <Box
                component="img"
                src={src}
                loading="lazy"
                sx={{
                  width: "100%",
                  height: { xs: 180, sm: 240, md: 360 },
                  objectFit: "cover",
                  borderRadius: 3,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                }}
              />
            </Box>
          ))}
        </motion.div>

        {/* DOTS */}
        <Stack
          direction="row"
          justifyContent="center"
          spacing={1.2}
          mt={{ xs: 3, md: 4 }}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => setActive(index + totalClones)}
              sx={{
                width: { xs: 20, sm: 24, md: 28 },
                height: 4,
                borderRadius: 4,
                cursor: "pointer",
                bgcolor: realIndex === index ? brandRed : alpha("#000", 0.2),
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
