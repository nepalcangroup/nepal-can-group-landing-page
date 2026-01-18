"use client";
import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import LocalShippingIcon from "@mui/icons-material/LocalShipping"; // Nepal Can Move
import PublicIcon from "@mui/icons-material/Public"; // Nepal Can International
import InventoryIcon from "@mui/icons-material/Inventory"; // Nepal Can Packaging
import CodeIcon from "@mui/icons-material/Code"; // Nepal Can Code
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"; // Nepal Can Buy
import TrackChangesIcon from "@mui/icons-material/TrackChanges"; // Nepal Can Logistics
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const services = [
  {
    title: "Nepal Can Move",
    subtitle: "Courier & Logistics",
    description:
      "Nepal's national courier, cargo, delivery and logistics company. Fast, secure, and reliable nationwide services.",
    badge: "Delivering happiness since 2075 B.S.",
    icon: <LocalShippingIcon />,
    link: "https://nepalcanmove.com",
  },
  {
    title: "Nepal Can International",
    subtitle: "Global Shipping",
    description:
      "Seamless international shipping solutions connecting Nepal to the global marketplace.",
    icon: <PublicIcon />,
    link: "https://international.nepalcan.com/",
  },
  {
    title: "Nepal Can Packaging",
    subtitle: "Packaging Solutions",
    description:
      "Professional packaging designed for safety, durability, and brand presentation.",
    icon: <InventoryIcon />,
    link: "https://nepalcanpackaging.com",
  },
  {
    title: "Nepal Can Logistics",
    subtitle: "Talent Solutions",
    description:
      "Reliable logistics services empowering businesses with efficient transportation, nationwide coverage, and technology-driven delivery solutions.",
    icon: <TrackChangesIcon />,
    link: "https://logistics.nepalcan.com/",
  },
  {
    title: "Nepal Can Code",
    subtitle: "Digital & Software",
    description:
      "Custom software development and digital transformation for modern businesses.",
    icon: <CodeIcon />,
    link: "https://nepalcancode.com",
  },
  {
    title: "Nepal Can.com",
    subtitle: "E-commerce Platform",
    description:
      "A unified marketplace offering quality products delivered to your doorstep.",
    icon: <ShoppingBagIcon />,
    link: "https://nepalcan.com",
  },
];

const OurServices = () => {
  return (
    <Box
      component="section"
      sx={{ py: { xs: 10, md: 16 }, bgcolor: "#f0f4f8" }}
    >
      <Container maxWidth="lg">
        <Box mb={10} maxWidth="640px">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
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
              The Nepal Can{" "}
              <Box component="span" sx={{ color: "var(--custom-red)" }}>
                Ecosystem
              </Box>
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 4,
                bgcolor: "var(--custom-red)",
                borderRadius: 2,
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
              }}
            >
              A diversified group of companies delivering logistics, technology,
              commerce, and workforce solutions across Nepal and beyond.
            </Typography>
          </motion.div>
        </Box>

        {/* Services  */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ height: "100%" }}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    border: "1px solid #e2e8f0",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    background: "#ffffff",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.15)",
                      transform: "translateY(-8px) scale(1.02)",
                      borderColor: "var(--custom-red)",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: "var(--custom-red)",
                      transform: "translateX(-100%)",
                      transition: "transform 0.4s ease",
                    },
                    "&:hover::before": {
                      transform: "translateX(0)",
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 }, height: "100%" }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 3,
                        background:
                          "linear-gradient(135deg, var(--custom-red), #ef4444)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                        fontSize: "1.8rem",
                        boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.3)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {service.icon}
                    </Box>

                    <Typography
                      variant="h5"
                      fontWeight={700}
                      mb={1}
                      sx={{
                        fontSize: { xs: "1.3rem", md: "1.5rem" },
                        color: "#1e293b",
                        lineHeight: 1.3,
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        color: "var(--custom-red)",
                        fontWeight: 600,
                        fontSize: "0.75rem",
                        mb: 2,
                      }}
                    >
                      {service.subtitle}
                    </Typography>

                    <Typography
                      mb={3}
                      sx={{
                        color: "#64748b",
                        fontSize: "0.95rem",
                        lineHeight: 1.7,
                        flex: 1,
                      }}
                    >
                      {service.description}
                    </Typography>

                    {service.badge && (
                      <Box
                        mb={4}
                        sx={{
                          display: "inline-block",
                          px: 2.5,
                          py: 1,
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          borderRadius: 999,
                          background:
                            "linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(239, 68, 68, 0.05))",
                          color: "var(--custom-red)",
                          border: "1px solid rgba(220, 38, 38, 0.2)",
                        }}
                      >
                        {service.badge}
                      </Box>
                    )}

                    <Box flexGrow={1} />
                    <Button
                      component={Link}
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        mt: "auto",
                        px: 0,
                        color: "var(--custom-red)",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        textTransform: "none",
                        position: "relative",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "transparent",
                          transform: "translateX(4px)",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: -2,
                          left: 0,
                          width: 0,
                          height: 2,
                          bgcolor: "var(--custom-red)",
                          transition: "width 0.3s ease",
                        },
                        "&:hover::after": {
                          width: "100%",
                        },
                      }}
                    >
                      Learn more
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurServices;
