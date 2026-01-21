"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  Stack,
  alpha,
} from "@mui/material";
import { motion } from "framer-motion";
import WorkIcon from "@mui/icons-material/Work";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function CareerOpportunitiesSection() {
  const brandBlue = "#0B2B5B";
  const brandRed = "#dc1e3e";

  const opportunities = [
    {
      icon: <WorkIcon />,
      title: "Professional Growth",
      description:
        "Advance your career with clear progression paths within our diverse business units.",
    },
    {
      icon: <TrendingUpIcon />,
      title: "Innovation & Impact",
      description:
        "Work on cutting-edge projects transforming logistics and digital solutions in Nepal.",
    },
    {
      icon: <GroupsIcon />,
      title: "Collaborative Environment",
      description:
        "Join a passionate team working together to achieve extraordinary results.",
    },
    {
      icon: <SchoolIcon />,
      title: "Learning & Development",
      description:
        "Access comprehensive training and mentorship to enhance your capabilities.",
    },
  ];

  return (
    <Box
      id="career-opportunities"
      component="section"
      sx={{ py: { xs: 4, sm: 6, md: 15 }, bgcolor: "#fff" }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, sm: 5, md: 8 }}
          alignItems={{ xs: "flex-start", md: "center" }}
        >
          {/* Left Column: Centered Content */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: { xs: "auto", md: "100%" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: brandRed,
                    fontWeight: 800,
                    letterSpacing: 3,
                    mb: 2,
                  }}
                >
                  OPPORTUNITIES
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    color: brandBlue,
                    mb: 3,
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    lineHeight: 1.1,
                  }}
                >
                  Why Join <br />
                  <Box component="span" sx={{ color: brandRed }}>
                    Nepal Can Group?
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    fontSize: "1.1rem",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Discover a workplace where your talent meets opportunity, and
                  your ambitions find perfect platform to soar.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Column: Opportunities */}
          <Grid item xs={12} md={7}>
            <Stack spacing={{ xs: 1.5, sm: 2 }}>
              {opportunities.map((opp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 3,
                      p: { xs: 2, sm: 3 },
                      borderRadius: 4,
                      transition: "all 0.4s ease",
                      borderLeft: `4px solid transparent`,
                      "&:hover": {
                        bgcolor: alpha(brandRed, 0.08),
                        borderLeft: `4px solid ${brandRed}`,
                        transform: "translateX(10px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: brandRed,
                        display: "flex",
                        alignItems: "center",
                        "& svg": { fontSize: 35 },
                      }}
                    >
                      {opp.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 800, color: brandBlue, mb: 1 }}
                      >
                        {opp.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", lineHeight: 1.6 }}
                      >
                        {opp.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box
            sx={{
              mt: { xs: 4, md: 6 },
              p: { xs: 3, sm: 4, md: 8 },
              borderRadius: 8,
              bgcolor: brandRed,
              textAlign: "center",
              color: "white",
              boxShadow: "0 20px 50px rgba(220, 30, 62, 0.3)",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                mb: 2,
                fontSize: { xs: "2rem", md: "2.8rem" },
              }}
            >
              Ready to Take the Next Step?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 5,
                fontWeight: 300,
                opacity: 0.9,
                maxWidth: "700px",
                mx: "auto",
              }}
            >
              Explore available positions and find where you belong in our
              growing family.
            </Typography>

            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              href="https://bayupayu.com/vacancy/NCG?page=1"
              target="_blank"
              sx={{
                bgcolor: "white",
                color: brandRed,
                px: 6,
                py: 2,
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "1.1rem",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#f3f4f6",
                  color: brandRed,
                  transform: "scale(1.05)",
                },
              }}
            >
              View Current Openings
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
