"use client";

import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { LocationCityOutlined } from "@mui/icons-material";

const CTASection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "#fff1f2",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Grid container spacing={6} alignItems="center">
            {/* Left Content */}
            <Grid item xs={12} md={8}>
              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    color: "var(--custom-red)",
                    mb: 2,
                  }}
                >
                  Get Started Today
                </Typography>

                <Typography
                  variant="h2"
                  fontWeight={800}
                  sx={{
                    fontSize: { xs: "2rem", md: "3rem" },
                    color: "#1e293b",
                    mb: 3,
                    lineHeight: 1.2,
                  }}
                >
                  Ready to Transform Your{" "}
                  <Box component="span" sx={{ color: "var(--custom-red)" }}>
                    Business?
                  </Box>
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    color: "#475569",
                    lineHeight: 1.7,
                    fontWeight: 400,
                    mb: 4,
                    maxWidth: 700,
                  }}
                >
                  Join hundreds of businesses across Nepal that trust Nepal Can
                  Group for logistics, technology, and growth solutions. Let’s
                  build something great together.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 3,
                    alignItems: { xs: "stretch", sm: "center" },
                  }}
                >
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        bgcolor: "var(--custom-red)",
                        color: "white",
                        px: 4,
                        py: 1.8,
                        fontSize: "1rem",
                        fontWeight: 600,
                        borderRadius: "50px",
                        textTransform: "none",
                        minWidth: { xs: "100%", sm: "auto" },
                        "&:hover": {
                          bgcolor: "#b91c1c",
                          boxShadow:
                            "0 10px 28px rgba(220, 38, 38, 0.35)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Contact Sales
                    </Button>
                  </Link>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.2,
                      color: "#1e293b",
                    }}
                  >
                    <PhoneIcon sx={{ fontSize: 20, color: "var(--custom-red)" }} />
                    <Typography variant="body1" fontWeight={600}>
                      01-5970736
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Right Info Card */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  p: 4,
                  bgcolor: "white",
                  borderRadius: 4,
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ color: "#1e293b", mb: 2 }}
                >
                  Quick Response
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "#475569", mb: 3, lineHeight: 1.6 }}
                >
                  Our team typically responds within 24 hours to discuss your
                  requirements.
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 2 }}>
                  <EmailIcon sx={{ fontSize: 18, color: "var(--custom-red)" }} />
                  <Typography variant="body2" sx={{ color: "#475569" }}>
                    info@nepalcangroup.com
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                  <LocationCityOutlined
                    sx={{ fontSize: 18, color: "var(--custom-red)" }}
                  />
                  <Typography variant="body2" sx={{ color: "#475569" }}>
                    Tinkune, Kathmandu
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CTASection;
