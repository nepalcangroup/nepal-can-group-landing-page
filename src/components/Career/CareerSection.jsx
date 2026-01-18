"use client";

import React from "react";
import { Box, Typography, Container, Button, Stack, Grid } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function CareerSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "auto", md: "500px" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        bgcolor: "#050505",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('/carrer/carrer.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          zIndex: 1,
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.95) 20%, rgba(0,0,0,0.4) 100%)",
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10, py: 8 }}>
        <Grid container>
          <Grid item xs={12} md={7} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "white",
                  fontWeight: 800,
                  letterSpacing: 2,
                  mb: 1,
                  display: "block",
                  opacity: 0.7,
                  pt: 10,
                }}
              >
                CAREERS
              </Typography>

              {/* Main Heading */}
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  color: "white",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  mb: 2,
                  background:
                    "linear-gradient(45deg, var(--custom-red), #b91632)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Join our team
              </Typography>

              {/* Subtext */}
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 300,
                  maxWidth: "500px",
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                Explore exciting career opportunities at Nepal Can Group and
                become part of our dynamic team shaping the future of logistics
                and supply chain solutions.
              </Typography>

              {/* Action Button */}
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => {
                    const opportunities = document.getElementById(
                      "career-opportunities"
                    );
                    if (opportunities) {
                      opportunities.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    px: 4,
                    py: 1.5,
                    borderRadius: "50px",
                    fontWeight: 700,
                    textTransform: "none",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "var(--custom-red)",
                      color: "white",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  View Opportunities
                </Button>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
