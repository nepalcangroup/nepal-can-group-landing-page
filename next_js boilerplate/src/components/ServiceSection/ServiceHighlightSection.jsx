"use client";

import React from "react";
import Link from "next/link";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";

import FlashOnIcon from "@mui/icons-material/FlashOn";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const features = [
  {
    title: "Fast Delivery",
    description:
      "Speed is at our core. We ensure your business moves as fast as market demands.",
    icon: <FlashOnIcon />,
  },
  {
    title: "Secure Handling",
    description:
      "Your assets are our priority. We maintain the highest standards of safety.",
    icon: <SecurityIcon />,
  },
  {
    title: "Reliable Support",
    description:
      "24/7 support you can depend on for operational continuity and growth.",
    icon: <SupportAgentIcon />,
  },
];

const ServiceHighlightSection = ({
  title = "Experience Service Like Never Before",
  subtitle = "Join thousands of businesses that trust Nepal Can Group for daily operations and long-term growth.",
  buttonText = "Partner With Us",
  buttonLink = "/contact",
}) => {
  return (
    <Box component="section" sx={{ py: { xs: 2, md: 2 }, bgcolor: "#FFFDFE" }}>
      <Container maxWidth="lg">
        <Box mb={{ xs: 6, md: 8 }} textAlign="center">
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 3,
              fontWeight: 700,
              color: "var(--custom-red)",
              mb: 1,
            }}
          >
            Why Choose Us
          </Typography>

          <Typography
            variant="h3"
            fontWeight={800}
            sx={{
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              color: "#0f172a",
              mb: 2,
            }}
          >
            Why Businesses Choose Nepal Can Group
          </Typography>

          <Typography
            sx={{
              maxWidth: 680,
              mx: "auto",
              color: "#64748b",
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            Operational excellence built on speed, secure processes, and
            dependable support — empowering businesses to scale with confidence.
          </Typography>
        </Box>

        <Grid container spacing={8} mb={{ xs: 8, md: 12 }}>
          {features.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Box textAlign="center" px={3}>
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      mx: "auto",
                      mb: 3,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "rgba(220,38,38,0.08)",
                      color: "var(--custom-red)",
                      fontSize: "1.8rem",
                    }}
                  >
                    {item.icon}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    mb={1.5}
                    color="#0f172a"
                  >
                    {item.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      color: "#64748b",
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/*CTA CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: { xs: 4, md: 6 },
              background: "var(--custom-red)",
              px: { xs: 3, md: 8 },
              py: { xs: 6, md: 8 },
              textAlign: "center",
              color: "#fff",
            }}
          >
            {/* Decorative blur */}
            <Box
              sx={{
                position: "absolute",
                top: -70,
                right: -70,
                width: 180,
                height: 180,
                bgcolor: "rgba(255,255,255,0.18)",
                borderRadius: "50%",
                filter: "blur(50px)",
              }}
            />

            <Typography
              variant="h2"
              fontWeight={800}
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                maxWidth: 720,
                mx: "auto",
                mb: 5,
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: "rgba(255,255,255,0.9)",
              }}
            >
              {subtitle}
            </Typography>

            <Button
              component={Link}
              href={buttonLink}
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: "#fff",
                color: "var(--custom-red)",
                fontWeight: 700,
                px: 4,
                py: 1.4,
                borderRadius: 999,
                textTransform: "none",
                boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#f8fafc",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {buttonText}
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServiceHighlightSection;
