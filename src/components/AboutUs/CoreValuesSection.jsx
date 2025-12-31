"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

import VerifiedIcon from "@mui/icons-material/Verified";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PublicIcon from "@mui/icons-material/Public";
import BalanceIcon from "@mui/icons-material/Balance";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const values = [
  {
    title: "Reliability & Trust",
    description:
      "Consistent and dependable services built on transparency and long-term trust.",
    icon: <VerifiedIcon />,
  },
  {
    title: "Customer-Centricity",
    description:
      "Solutions designed around customer needs to build meaningful partnerships.",
    icon: <PeopleAltIcon />,
  },
  {
    title: "Innovation & Adaptability",
    description:
      "Agile, digital-first thinking that enables continuous improvement.",
    icon: <LightbulbIcon />,
  },
  {
    title: "National Growth",
    description:
      "Committed to strengthening Nepal’s economy and empowering communities.",
    icon: <PublicIcon />,
  },
  {
    title: "Integrity & Ethics",
    description:
      "Honest, ethical, and responsible practices in every decision we make.",
    icon: <BalanceIcon />,
  },
  {
    title: "Excellence in Execution",
    description:
      "High standards, disciplined execution, and professional delivery.",
    icon: <TrendingUpIcon />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CoreValuesSection() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box textAlign="center" maxWidth={720} mx="auto" mb={10}>
            <Typography
              variant="h3"
              fontWeight={800}
              mb={2}
              sx={{
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom: -10,
                  width: 150,
                  height: 4,
                  borderRadius: 2,
                  bgcolor: "var(--custom-red)",
                },
              }}
            >
              Our Core Values
            </Typography>

            <Typography color="text.secondary" fontSize="1.05rem" mt={3}>
              The principles that guide how Nepal Can Group builds trust,
              delivers impact, and drives sustainable growth.
            </Typography>
          </Box>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {values.map((value) => (
              <Grid
                key={value.title}
                item
                xs={12}
                sm={6}
                md={4}
                sx={{ display: "flex" }}
              >
                <motion.div
                  variants={itemVariants}
                  style={{ display: "flex", width: "100%" }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      flex: 1,
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 4,
                      border: "1.5px solid",
                      borderColor: "divider",
                      transition: "all 0.35s ease",
                      "&:hover": {
                        borderColor: "var(--custom-red)",
                        boxShadow: "0 16px 36px rgba(0,0,0,0.12)",
                        transform: "translateY(-6px)",
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 5,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: { xs: "center", md: "flex-start" },
                        textAlign: { xs: "center", md: "left" },
                      }}
                    >
                      {/* Icon */}
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 3,
                          background:
                            "linear-gradient(135deg, var(--custom-red), #b91632)",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 4,
                        }}
                      >
                        {value.icon}
                      </Box>

                      <Typography variant="h6" fontWeight={700} mb={1.5}>
                        {value.title}
                      </Typography>

                      <Typography
                        color="text.secondary"
                        fontSize="0.95rem"
                        lineHeight={1.7}
                        sx={{
                          minHeight: "3.6rem",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
