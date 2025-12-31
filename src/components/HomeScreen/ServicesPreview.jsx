"use client";

import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PublicIcon from "@mui/icons-material/Public";
import CodeIcon from "@mui/icons-material/Code";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const services = [
  {
    icon: <LocalShippingIcon />,
    title: "Logistics Solutions",
    description: "Nationwide courier, cargo, and delivery services with real-time tracking and reliable support.",
    color: "#dc2626"
  },
  {
    icon: <PublicIcon />,
    title: "Global Shipping",
    description: "International freight forwarding connecting Nepal to global markets with seamless logistics.",
    color: "#ea580c"
  },
  {
    icon: <CodeIcon />,
    title: "Digital Services",
    description: "Custom software development and digital transformation solutions for modern businesses.",
    color: "#ca8a04"
  }
];

const ServicesPreview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        bgcolor: "#f8fafc",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box textAlign="center" mb={10}>
            <Typography
              variant="overline"
              component="div"
              sx={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "var(--custom-red)",
                mb: 2,
              }}
            >
              Our Services
            </Typography>
            <Typography
              variant="h2"
              fontWeight={800}
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                color: "#1e293b",
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Comprehensive{" "}
              <Box component="span" sx={{ color: "var(--custom-red)" }}>
                Solutions
              </Box>
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 4,
                bgcolor: "var(--custom-red)",
                borderRadius: 2,
                mx: "auto",
                mb: 4,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontSize: "1.1rem",
                color: "#64748b",
                lineHeight: 1.7,
                fontWeight: 400,
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              From logistics to digital transformation, we provide end-to-end solutions 
              to power your business growth across Nepal and beyond.
            </Typography>
          </Box>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div variants={itemVariants}>
                    <Box
                      sx={{
                        p: 4,
                        bgcolor: "white",
                        borderRadius: 4,
                        height: "100%",
                        border: "1px solid #e2e8f0",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                          transform: "translateY(-4px)",
                          borderColor: "var(--custom-red)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: 3,
                          bgcolor: `${service.color}15`,
                          color: service.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 3,
                          fontSize: "1.8rem",
                        }}
                      >
                        {service.icon}
                      </Box>

                      <Typography
                        variant="h5"
                        fontWeight={700}
                        mb={2}
                        sx={{
                          fontSize: { xs: "1.3rem", md: "1.5rem" },
                          color: "#1e293b",
                          lineHeight: 1.3,
                        }}
                      >
                        {service.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: "#64748b",
                          fontSize: "1rem",
                          lineHeight: 1.7,
                          mb: 3,
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          <Box textAlign="center" mt={8}>
            <Link href="/services" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: "var(--custom-red)",
                  color: "white",
                  px: 4,
                  py: 2,
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderRadius: "50px",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#b91c1c",
                    boxShadow: "0 8px 25px rgba(220, 38, 38, 0.3)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                View All Services
              </Button>
            </Link>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServicesPreview;
