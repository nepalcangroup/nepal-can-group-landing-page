"use client";

import React from "react";
import { Box, Typography, Container, Grid, Stack, alpha } from "@mui/material";
import { motion } from "framer-motion";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function BenefitsSection() {
  const brandBlue = "#0B2B5B";
  const brandRed = "var(--custom-red)";

  const benefits = [
    {
      icon: <HealthAndSafetyIcon />,
      title: "Health & Wellness",
      description:
        "Comprehensive medical coverage, mental health support, and wellness programs.",
    },
    {
      icon: <WorkIcon />,
      title: "Work-Life Balance",
      description:
        "Flexible schedules, remote work options, and generous paid time off.",
    },
    {
      icon: <SchoolIcon />,
      title: "Growth & Learning",
      description:
        "Continuous professional development, workshops, and learning stipends.",
    },
    {
      icon: <AttachMoneyIcon />,
      title: "Financial Security",
      description:
        "Competitive compensation, performance bonuses, and retirement planning.",
    },
    {
      icon: <HomeIcon />,
      title: "Modern Workspace",
      description:
        "State-of-the-art office facilities designed for collaboration and comfort.",
    },
    {
      icon: <PeopleIcon />,
      title: "Corporate Culture",
      description:
        "Inclusive environment, team-building events, and social responsibility.",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 2, sm: 6, md: 6 },
        bgcolor: "#FFFAFA",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="overline"
              sx={{ color: brandRed, fontWeight: 800, letterSpacing: 2 }}
            >
              OUR PERKS
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                color: brandBlue,
                mt: 1,
                mb: 2,
                fontSize: { xs: "2rem", sm: "2.2rem", md: "3rem" },
              }}
            >
              More Than Just a Job
            </Typography>
            <Box
              sx={{
                width: 50,
                height: 4,
                bgcolor: brandRed,
                mx: "auto",
                borderRadius: 2,
                mb: 3,
              }}
            />
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: 500,
                mx: "auto",
                fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
              }}
            >
              We’re committed to providing a holistic environment where you can
              thrive personally and professionally.
            </Typography>
          </motion.div>
        </Box>

        {/* Benefits Grid */}
        <Grid container spacing={{ xs: 4, sm: 6, md: 8 }}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Stack
                  alignItems="center"
                  textAlign="center"
                  spacing={{ xs: 1.5, sm: 2 }}
                >
                  <Box
                    sx={{
                      color: brandRed,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1,
                      "& svg": { fontSize: { xs: 32, sm: 36, md: 40 } },
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "translateY(-5px)" },
                    }}
                  >
                    {benefit.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      color: brandBlue,
                      fontSize: { xs: "1.05rem", sm: "1.15rem", md: "1.2rem" },
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.6,
                      px: { xs: 1.5, sm: 2 },
                      fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                    }}
                  >
                    {benefit.description}
                  </Typography>
                </Stack>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
