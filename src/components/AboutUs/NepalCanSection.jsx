"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import HistoryIcon from "@mui/icons-material/History";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const NepalCanSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fafafa", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          {/* LEFT SIDE: IMAGE SECTION */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ position: "relative" }}
            >
              {/* Main Image Wrapper */}
              <Box
                component="img"
                src="/aboutUs/warehouse.jpg"
                alt="Logistics Operations"
                sx={{
                  width: "100%",
                  borderRadius: "24px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  display: "block",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: -20,
                  right: { xs: 20, md: -20 },
                  bgcolor: "#004AAD", 
                  color: "white",
                  p: 4,
                  borderRadius: "16px",
                  minWidth: "180px",
                  boxShadow: "0 10px 30px rgba(0,74,173,0.3)",
                }}
              >
                <Typography variant="h3" fontWeight="bold">
                  7+
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Years of Delivering Happiness Across Nepal
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* RIGHT SIDE: CONTENT SECTION */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Badge */}
              <Typography
                variant="overline"
                sx={{
                  color: "#004AAD",
                  fontWeight: 700,
                  letterSpacing: 1.2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    border: "2px solid #004AAD",
                  }}
                />
                About Nepal Can Group
              </Typography>

              {/* Heading */}
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2rem", md: "3rem" },
                  lineHeight: 1.2,
                  mb: 3,
                  color: "#1a1a1a",
                }}
              >
                Driving Nepal's Economic Growth Through{" "}
                <Box component="span" sx={{ color: "#004AAD" }}>
                  Innovation & Logistics
                </Box>
              </Typography>

              {/* Paragraph */}
              <Typography
                variant="body1"
                sx={{ color: "#555", mb: 5, lineHeight: 1.8 }}
              >
                Established with a vision to revolutionize the service industry
                in Nepal, Nepal Can Group has evolved into a powerhouse
                conglomerate. We pride ourselves on being your full-service
                partner, offering a spectrum of solutions from national courier
                services to cutting-edge software development.
              </Typography>

              <Stack spacing={4}>
                {/* Heritage */}
                <motion.div variants={itemVariants}>
                  <Stack direction="row" spacing={3}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: "12px",
                        bgcolor: "#f0f7ff",
                        height: "fit-content",
                      }}
                    >
                      <HistoryIcon sx={{ color: "#004AAD" }} />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        gutterBottom
                      >
                        Our Heritage
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Delivering happiness since Shrawan 1, 2075 B.S. with
                        unwavering commitment.
                      </Typography>
                    </Box>
                  </Stack>
                </motion.div>

                {/* Vision */}
                <motion.div variants={itemVariants}>
                  <Stack direction="row" spacing={3}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: "12px",
                        bgcolor: "#f5f0ff",
                        height: "fit-content",
                      }}
                    >
                      <TrendingUpIcon sx={{ color: "#6C63FF" }} />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        gutterBottom
                      >
                        Our Vision
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        To empower Nepali businesses to reach global markets
                        through seamless logistics and digital excellence.
                      </Typography>
                    </Box>
                  </Stack>
                </motion.div>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NepalCanSection;
